import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 
import { addTextureToModel } from './three_model_viewer.js';
import { resolveAssetURL } from './asset_path.js';

// ######################################################################

// Global variables of camera position and rotation
export var camera_position = {
  x: 6,
  y: 4,
  z: 7
};

export var camera_rotation = {
  x: 0,
  y: 0,
  z: 0
};

// Function to create the render panel
export function createRenderPanel(model, obj_texture = model.obj_texture) {
  const renderPanel = document.createElement("div");
  renderPanel.classList.add("configurator-central-model-render-panel");
  // Add renderer id
  renderPanel.id = "configurator-central-model-render-panel";

  // Set the desired width and height
  const panelWidth = innerWidth
  const panelHeight = innerHeight

  // Make it fill the maximum space
  renderPanel.style.width = panelWidth + "px";
  renderPanel.style.height = panelHeight + "px";

  // Create the scene
  const scene = new THREE.Scene();

  // Create the camera
  const camera = new THREE.PerspectiveCamera(50, panelWidth / panelHeight, 0.1, 1000);
  camera.position.x = camera_position.x;
  camera.position.y = camera_position.y;
  camera.position.z = camera_position.z;

  // Set the scene origin
  scene.position.z = -2;
  scene.position.y = 1.5;

  // Create the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(panelWidth, panelHeight); // Set renderer size to match the panel size
  // Add the renderer to the div
  renderPanel.appendChild(renderer.domElement);

  // Load the 3D model
  const loader = new OBJLoader();
  const modelURL = resolveAssetURL(model.obj);
  loader.load(
    modelURL,
    (object) => {
      // Add the texture to the model
      try {
        addTextureToModel(object, obj_texture);
      } catch (e) {
        console.error('Error applying texture to model:', obj_texture, e);
      }
      scene.add(object);
    },
    undefined,
    (err) => {
      console.error('Failed to load OBJ model:', modelURL, err);
    }
  );

  // Add some lighting
  const ambientLight = new THREE.AmbientLight(0xe0e0e0, 1);
  scene.add(ambientLight);

  // Add a directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // Add controls for camera manipulation
  // Add controls for camera manipulation
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  // Listen for camera changes
  controls.addEventListener('change', () => {
    // Update camera_position and camera_rotation
    camera_position.x = camera.position.x;
    camera_position.y = camera.position.y;
    camera_position.z = camera.position.z;
    camera_rotation.x = camera.rotation.x;
    camera_rotation.y = camera.rotation.y;
    camera_rotation.z = camera.rotation.z;
  });


  // Make background color
  renderer.setClearColor(0x000000, 0.75);

  // Adjust the renderer when the window size changes
  window.addEventListener('resize', function () {
    // Get the current width and height of the div container
    const width = renderPanel.clientWidth;
    const height = renderPanel.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls
    renderer.render(scene, camera);
  
    // Update camera_position and camera_rotation
    camera_position.x = camera.position.x;
    camera_position.y = camera.position.y;
    camera_position.z = camera.position.z;
    camera_rotation.x = camera.rotation.x;
    camera_rotation.y = camera.rotation.y;
    camera_rotation.z = camera.rotation.z;
  }
  

  animate();

  return renderPanel;
}
