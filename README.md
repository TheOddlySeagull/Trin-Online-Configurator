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
   - Models and textures are fetched cross-origin. Ensure the host `https://trin.legends-of-gramdatis.com` sends CORS headers:
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

## Updating three.js
If you bump Three.js, update both mappings in the import map:
- `three` core
- `three/addons/` examples path

Then verify `OBJLoader` and `OrbitControls` import paths are unchanged.
