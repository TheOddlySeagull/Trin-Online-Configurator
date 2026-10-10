// Run with: NODE_PATH=<directory containing @napi-rs/canvas> node scripts/test-custom-wraps.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { createCanvas, Image } = require('@napi-rs/canvas');
const storage = new Map();
const context = vm.createContext({console: {log(){}}, Image, URL, Uint8Array,
    localStorage: {getItem: key => storage.get(key) || null, setItem: (key,value) => storage.set(key,value), removeItem: key => storage.delete(key)},
    document: {createElement: () => createCanvas(2,2), getElementById: () => ({replaceWith(){}})},
    resolveAssetURL: url => url, createRenderPanel() {}, accent_enabled: false,
});
function load(file) {
    let source = fs.readFileSync(file,'utf8').replace(/^import .*;\r?\n/gm,'').replace(/export /g,'');
    vm.runInContext(source,context,{filename:file});
}
function png(color) { const canvas=createCanvas(2,2);const ctx=canvas.getContext('2d');ctx.fillStyle=color;ctx.fillRect(0,0,2,2);return canvas.toDataURL(); }
(async()=>{
load('data.js');load('custom_wraps.js');
const red=png('red'), blue=png('blue'), mask=png('white');
assert.equal(context.get_body_texture_type(red),'CustomTiled');
assert.equal(context.get_body_texture_type('https://example.com/wrap.png?x=1'),'CustomTiled');
assert.equal(context.get_texture(red,'CustomTiled').texture,red);
assert.equal(context.get_body_texture_type('#123456'),'Custom');
assert.equal(context.get_body_texture_type('Glacier White'),'Paint');
storage.set('uploadedSkins',JSON.stringify([red]));
assert.equal(context.loadCustomWraps()[0].texture,red);
context.saveCustomWraps(context.loadCustomWraps());assert.equal(storage.has('uploadedSkins'),false);
context.saveCustomWraps([]);assert.equal(context.loadCustomWraps().length,0);
await context.validateWrap(red);
await assert.rejects(context.validateWrap('http://example.com/wrap.png'),/HTTPS/);
context.fetch=async()=>({ok:true,arrayBuffer:async()=>new Uint8Array([1,2,3]).buffer});
await assert.rejects(context.validateWrap('https://example.com/not-png'),/directly/);
load('texture_generator.js');
const canvas=createCanvas(2,2);await context.applyCustomTiledTexture(mask,red,canvas.getContext('2d'));
assert.deepEqual([...canvas.getContext('2d').getImageData(0,0,1,1).data],[255,0,0,255]);
const result=createCanvas(2,2);await context.generateNewCanvas(blue,[canvas],result.getContext('2d'),2,2);
assert.deepEqual([...result.getContext('2d').getImageData(0,0,1,1).data],[255,0,0,255]);
await assert.rejects(context.applyCustomTiledTexture(mask,'/missing-wrap.png',createCanvas(2,2).getContext('2d')),/Unable to load wrap/);
console.log('PASS: storage migration, deletion, PNG validation, paint resolution, real canvas tiling/composition, image failure');
})().catch(error=>{console.error(error);process.exitCode=1;});
