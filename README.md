# Trin website (GitHub Pages)

This site is a static ES Modules app. Three.js and its loaders are pulled from a CDN via an import map, and OBJ models/textures are fetched from the `trin.legends-of-gramdatis.com` domain.

## How 3D loading works
- Three.js (r154) and examples loaders are mapped by the import map in the HTML pages that need them:
  - `trin_configurator.html`
  - `trin_user_configurations.html`
- The OBJ model is loaded with `OBJLoader`, then the texture PNG is applied with `TextureLoader`.

## GitHub Pages gotchas and fixes
1. Import map polyfill ordering
   - The import map shim is included before the import map and module scripts, without `async`, to avoid races on slower networks.
2. CORS for external assets
   - Models and textures can now be resolved to same-origin when on GitHub Pages via `asset_path.js`.
   - If you keep absolute external URLs, ensure the host `https://trin.legends-of-gramdatis.com` sends CORS headers:
     - `Access-Control-Allow-Origin: *` (or your page origin)
     - `Access-Control-Allow-Methods: GET`
   - Texture loading is configured with `crossOrigin: 'anonymous'` in `three_model_viewer.js`.
3. HTTPS
   - All assets are loaded via HTTPS. GitHub Pages serves over HTTPS; mixed content would otherwise be blocked.

## Troubleshooting
- Open the browser devtools console and network tabs while loading a configurator page.
- If an OBJ or PNG fails to load, you will now see explicit errors (added in `configurator_renderer.js` and `three_model_viewer.js`).
- 404 on models/textures: verify URLs in `data.js`.
- CORS errors on textures/models: serve assets from the same origin (this repository) or enable CORS on the external host.

## Local preview
You can use a simple static server to preview locally with correct module behavior (file:// won’t work):

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

## Asset resolution
- Asset URLs in `data.js` are absolute for the custom domain. The loaders call `resolveAssetURL()` to rewrite those URLs to the current site base (e.g., `https://<user>.github.io/trin/`) so the same code works on both GitHub Pages and the custom domain.

## Updating three.js
If you bump Three.js, update both mappings in the import map:
- `three` core
- `three/addons/` examples path

Then verify `OBJLoader` and `OrbitControls` import paths are unchanged.

## Custom wraps
Open `upload_texture.html` to add a PNG file or a direct HTTPS PNG link. Linked
images must allow CORS; when a host blocks access, download the image and add the
PNG file instead. Select the saved image under `CustomTiled` in the exterior
selector. Images repeat at their native pixel size and are masked to the selected
paint layer. The library of wraps is stored in this browser, while each vehicle
configuration retains its selected image source. Previously uploaded skins are
also available.

Custom wrap regression checks use real canvas pixels and cover migration,
validation, lookup, tiling, composition, and load failures:

```bash
npm install --no-save --package-lock=false @napi-rs/canvas
node scripts/test-custom-wraps.cjs
```

## Editing saved configurations
Use **Edit** on a card in My Configurations to reopen its vehicle with its saved
texture, paint layers, upholstery, accent, and part values. **Save** asks for a
configuration name and updates that entry. **Save as** asks for a name and creates
a separate copy; subsequent saves update the copy. Canceling the name prompt
leaves stored configurations unchanged. Older unnamed configurations use the
vehicle model as their initial name and receive stable IDs automatically.

```bash
node scripts/test-configuration-editing.cjs
```
