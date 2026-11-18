const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');
const values = new Map();
const context = vm.createContext({console, crypto:{randomUUID}, localStorage:{
    getItem: key => values.get(key) || null,
    setItem: (key,value) => values.set(key,value),
}});
function load(file) {vm.runInContext(fs.readFileSync(file,'utf8').replace(/^import .*;\r?\n/gm,'').replace(/export /g,''),context);}
load('data.js');load('comunicator.js');
const original = {model:'Test vehicle',base_price:10000,has_interior_accent:true,paint_layers:['#123456','https://example.com/wrap.png'],paint_price:[5000,5000],interior:'Gray',interior_accent:'Wood',texture_url:'same-texture',engine:'engine',wheels:'wheels',seats:'seats',navigation:'navigation'};
values.set('saved_configurations',JSON.stringify([original,original]));
let saved=context.get_saved_configurations();assert.notEqual(saved[0].id,saved[1].id);
const id=saved[0].id;context.load_saved_configuration(id);
assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(current_configured_model)',context)),JSON.parse(JSON.stringify(saved[0])));
context.save_configuration(' My custom car ');
saved=context.get_saved_configurations();assert.equal(saved.length,2);assert.equal(saved[0].name,'My custom car');assert.equal(saved[0].id,id);
context.save_configuration('Copy',true);
saved=context.get_saved_configurations();assert.equal(saved.length,3);assert.notEqual(saved[2].id,id);assert.equal(saved[0].name,'My custom car');
assert.throws(()=>context.save_configuration('   '),/name/);
context.delete_saved_configuration(saved[2]);assert.equal(context.get_saved_configurations().length,2);
assert.throws(()=>context.save_configuration('Removed'),/removed/);
context.save_configuration('Recovered',true);assert.equal(context.get_saved_configurations().length,3);
const imported=context.save_new_configuration({...original,id,name:'Imported'});assert.notEqual(imported.id,id);
console.log('PASS: legacy identities, complete selection restore, named save, replacement, save as, cancellation validation, duplicate-texture deletion, missing edits, import identity');
