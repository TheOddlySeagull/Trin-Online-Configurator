// Helpers to resolve asset URLs (OBJ, textures) so the site works on
// both the custom domain and GitHub Pages without changing data.js.

export const REMOTE_BASE = 'https://trin.legends-of-gramdatis.com/';

export function siteBasePath() {
  const { origin, pathname, hostname } = window.location;
  // When hosted as a GitHub Pages project site, URLs should include the repo name.
  // This repo is "trin", so the base is `${origin}/trin/`.
  const repo = 'trin';
  const marker = `/${repo}/`;
  const idx = pathname.indexOf(marker);

  if (hostname.endsWith('github.io') && idx !== -1) {
    return origin + pathname.substring(0, idx + marker.length);
  }
  // For custom domain or local server, root is fine.
  return origin + '/';
}

export function resolveAssetURL(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith(REMOTE_BASE)) {
    const relativePath = url.substring(REMOTE_BASE.length);
    return siteBasePath() + relativePath;
  }
  // Already relative or absolute to current origin
  return url;
}
