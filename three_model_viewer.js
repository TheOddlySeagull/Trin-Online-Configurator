import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function addTextureToModel(object, textureURL) {
  const textureLoader = new THREE.TextureLoader();
  // Ensure cross-origin textures from CDN work on GitHub Pages
  if (typeof textureLoader.setCrossOrigin === 'function') {
    textureLoader.setCrossOrigin('anonymous');
  } else {
    textureLoader.crossOrigin = 'anonymous';
  }

  // Load texture with error handling
  const texture = textureLoader.load(
    textureURL,
    () => {
      // success
      texture.needsUpdate = true;
    },
    undefined,
    (err) => {
      console.error('Failed to load texture:', textureURL, err);
    }
  );

  // Texture encoding, and alpha channel for PNGs
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 16;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  


  // Add the texture to the model
  object.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
      child.material.transparent = true; // Enable transparency
      child.material.alphaTest = 0.5;
    }
  });
}