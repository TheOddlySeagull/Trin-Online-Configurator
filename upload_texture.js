import { loadCustomWraps, saveCustomWraps, validateWrap, storeWrapImage, getCustomWrapSource } from './custom_wraps.js';

const status = document.getElementById('upload-status');
const container = document.getElementById('uploaded-skins-container');

function renderWraps() {
    container.replaceChildren();
    loadCustomWraps().forEach((wrap, index) => {
        const panel = document.createElement('div');
        panel.className = 'custom-tiled-preview';
        const preview = document.createElement('div');
        preview.className = 'custom-tiled-preview-image';
        getCustomWrapSource(wrap.texture).then(source => {
            preview.style.backgroundImage = `url(${JSON.stringify(source)})`;
        }).catch(error => { preview.textContent = error.message; });
        const name = document.createElement('p');
        name.textContent = wrap.name;
        const remove = document.createElement('button');
        remove.textContent = 'Remove';
        remove.onclick = () => {
            const wraps = loadCustomWraps();
            wraps.splice(index, 1);
            saveCustomWraps(wraps);
            renderWraps();
        };
        panel.append(preview, name, remove);
        container.append(panel);
    });
}

async function addWrap(source, name, file) {
    status.textContent = 'Checking PNG…';
    try {
        await validateWrap(source);
        if (file) source = await storeWrapImage(file);
        const wraps = loadCustomWraps();
        if (!wraps.some(wrap => wrap.texture === source)) wraps.push({ name, texture: source });
        saveCustomWraps(wraps);
        renderWraps();
        status.textContent = 'Wrap added. Select it under CustomTiled in the configurator.';
    } catch (error) {
        status.textContent = error.name === "QuotaExceededError"
            ? "Browser storage is full. Remove unused wraps or saved configurations and try again."
            : `Could not add wrap: ${error.message}`;
    }
}

document.getElementById('link-button').onclick = () => {
    const source = document.getElementById('texture-url').value.trim();
    addWrap(source, 'Custom Wrap');
};
document.getElementById('upload-button').onclick = () => {
    const file = document.getElementById('upload-input').files[0];
    if (!file || file.type !== 'image/png') {
        status.textContent = 'Please select a PNG file.';
        return;
    }
    const reader = new FileReader();
    reader.onload = () => addWrap(reader.result, file.name, file);
    reader.onerror = () => { status.textContent = 'Unable to read PNG file.'; };
    reader.readAsDataURL(file);
};
renderWraps();
