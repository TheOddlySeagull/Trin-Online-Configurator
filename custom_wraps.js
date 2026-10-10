// Keep the existing storage key and migrate skins from the old upload page.
export function loadCustomWraps() {
    const wraps = JSON.parse(localStorage.getItem('uploadedTextures') || '[]');
    const skins = JSON.parse(localStorage.getItem('uploadedSkins') || '[]');
    for (const texture of skins) {
        if (!wraps.some(wrap => wrap.texture === texture)) {
            wraps.push({ name: 'Custom Wrap', texture });
        }
    }
    return wraps;
}

export function saveCustomWraps(wraps) {
    localStorage.setItem('uploadedTextures', JSON.stringify(wraps));
    localStorage.removeItem('uploadedSkins');
}

export async function validateWrap(source) {
    if (!/^data:image\/png;base64,/i.test(source)) {
        const url = new URL(source);
        if (url.protocol !== 'https:') throw new Error('Use a direct HTTPS PNG link.');
        const response = await fetch(url.href, { mode: 'cors' });
        if (!response.ok) throw new Error('The PNG link could not be loaded.');
        const bytes = new Uint8Array(await response.arrayBuffer());
        const signature = [137, 80, 78, 71, 13, 10, 26, 10];
        if (!signature.every((byte, index) => bytes[index] === byte)) {
            throw new Error('The link must point directly to a PNG image.');
        }
    }
    await new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = resolve;
        image.onerror = () => reject(new Error('Unable to load PNG. Try adding the PNG file instead.'));
        image.src = source;
    });
    return source;
}

let wrapDatabase;
const wrapSources = new Map();
function openWrapDatabase() {
    if (!wrapDatabase) wrapDatabase = new Promise((resolve, reject) => {
        const request = indexedDB.open('trin-custom-wraps', 1);
        request.onupgradeneeded = () => request.result.createObjectStore('images');
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
    return wrapDatabase;
}

export async function storeWrapImage(blob) {
    const database = await openWrapDatabase();
    const reference = 'customwrap:' + crypto.randomUUID();
    await new Promise((resolve, reject) => {
        const transaction = database.transaction('images', 'readwrite');
        transaction.objectStore('images').put(blob, reference);
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error);
        transaction.onabort = () => reject(transaction.error);
    });
    return reference;
}

export async function getCustomWrapSource(reference) {
    if (!reference.startsWith('customwrap:')) return reference;
    if (!wrapSources.has(reference)) {
        const database = await openWrapDatabase();
        const blob = await new Promise((resolve, reject) => {
            const request = database.transaction('images').objectStore('images').get(reference);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
        if (!blob) throw new Error('This uploaded wrap is missing from this browser. Add the PNG again.');
        wrapSources.set(reference, URL.createObjectURL(blob));
    }
    return wrapSources.get(reference);
}
