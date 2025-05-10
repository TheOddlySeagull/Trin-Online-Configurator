import { factoryColors, factoryWraps, factoryWoods, interiorColors, interiorAccents, trinCarModels, get_body_texture_type, get_interior_texture_type, get_texture, get_full_interior_textile } from "./data.js";
import { createRenderPanel } from './configurator_renderer.js';
import { current_configured_model } from './comunicator.js';
import { accent_enabled } from './configurator_interior_panels.js';

var baseLayerImageUrl = "https://trin.legends-of-gramdatis.com/model_img/Trin_Footpather_SUV.png";
var originalLayer1ImageUrl = "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Paint1.png";
var originalLayer2ImageUrl = "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Paint2.png";

// Function to apply the texture to the non-transparent pixels of the canvas
function applyTexture(layerImageUrl, textureImageUrl, ctx) {
  return new Promise((resolve) => {

    // Create an image element for the layer drawing
    const layerDrawingImg = new Image();
    layerDrawingImg.onload = function() {
      // Create a temporary canvas to draw the layer and texture
      const tempCanvas = document.createElement("canvas");
      tempCanvas.id = "tempCanvas-ApplyTexture";
      tempCanvas.width = ctx.canvas.width;
      tempCanvas.height = ctx.canvas.height;
      const tempCtx = tempCanvas.getContext("2d");

      // Draw the layer drawing on the temporary canvas
      tempCtx.drawImage(layerDrawingImg, 0, 0, ctx.canvas.width, ctx.canvas.height);

      // Create a pattern from the tiled texture
      const textureImg = new Image();
      textureImg.onload = function() {
        const pattern = tempCtx.createPattern(textureImg, "repeat");

        // Fill the temporary canvas with the pattern, only where the layer drawing is visible
        tempCtx.globalCompositeOperation = "source-in";
        tempCtx.fillStyle = pattern;
        tempCtx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw the temporary canvas on the main canvas
        ctx.drawImage(tempCanvas, 0, 0);

        resolve(); // Resolve the promise once the texture is applied
      };
      textureImg.src = textureImageUrl;
    };
    layerDrawingImg.src = layerImageUrl;
  });
}

function applyCustomTiledTexture(layerImageUrl, textureImageUrl, ctx) {
  return new Promise((resolve) => {
    const layerDrawingImg = new Image();
    layerDrawingImg.onload = function () {
      const textureImg = new Image();
      textureImg.onload = function () {
        const pattern = ctx.createPattern(textureImg, "repeat");
        ctx.drawImage(layerDrawingImg, 0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        resolve();
      };
      textureImg.src = textureImageUrl;
    };
    layerDrawingImg.src = layerImageUrl;
  });
}

// Function to apply a hex color to the non-transparent pixels of the canvas
function applyColor(layerImageUrl, hexColor, ctx) {
  console.log("Applying color: " + hexColor);
  return new Promise((resolve) => {

    // Create an image element for the layer drawing
    const layerDrawingImg = new Image();
    layerDrawingImg.onload = function() {
      // Draw the layer drawing on the canvas
      ctx.drawImage(layerDrawingImg, 0, 0, ctx.canvas.width, ctx.canvas.height);

      // Get the ImageData of the entire canvas
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;

      // Apply the color only to the non-transparent pixels
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha > 0) {
          data[i] = parseInt(hexColor.substr(1, 2), 16); // red
          data[i + 1] = parseInt(hexColor.substr(3, 2), 16); // green
          data[i + 2] = parseInt(hexColor.substr(5, 2), 16); // blue
        }
      }

      // Put the modified ImageData back on the canvas
      ctx.putImageData(imageData, 0, 0);

      resolve(); // Resolve the promise once the color is applied
    };
    layerDrawingImg.src = layerImageUrl;
  });
}

// Function to generate a new canvas with layered retextured and recolored layers
function generateNewCanvas(baseImageUrl, layers, ctxResult, canvas_width = 512, canvas_height = 512) {
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas_width;
  tempCanvas.height = canvas_height;
  const tempCtx = tempCanvas.getContext("2d");

  // Draw the base image on the temporary canvas
  const baseImage = new Image();
  baseImage.onload = function() {
      tempCtx.drawImage(baseImage, 0, 0);

      // Draw the layers on the temporary canvas
      for (const layer of layers) {

        tempCtx.globalCompositeOperation = "source-over";
        tempCtx.drawImage(layer, 0, 0);
      }

      // Draw the temporary canvas on the result canvas
      ctxResult.clearRect(0, 0, canvas_width, canvas_height);
      ctxResult.drawImage(tempCanvas, 0, 0); //LINE 102
  };
  baseImage.src = baseImageUrl;
}

function getTextureFromPanel(paintOptionContainer) {

  // Get the content of the first sub-div of paintOptionContainer
  const textureName = paintOptionContainer.children[0].innerHTML;

  // Check if the textureName is in the factoryWoods, factoryWraps or factoryColors using ".find(color => color.name === textureName)", and keep the json it was found in
  let texture = factoryWoods.find(wood => wood.name === textureName)
  
  if (texture) {
    return [texture.texture, texture.name, texture.exterior_price];
  } else {
    texture = factoryWraps.find(wrap => wrap.name === textureName)
    if (texture) {
      return [texture.texture, texture.name, texture.price];
    } else {
      texture = factoryColors.find(color => color.name === textureName)
      if (texture) {
        return [texture.hex, texture.name, texture.price];
      } else {
        console.log("Texture not found in factoryWoods, factoryWraps or factoryColors");
        return null;
      }
    }
  }
}

// Function to generate a PNG URL from the canvas
function generatePngUrlFromCanvas(resultCanvas) {
  // Convert the result canvas to a data URL (PNG format)
  const dataUrl = resultCanvas.toDataURL("image/png");

  // Return the data URL
  return dataUrl;
}

export async function generateConfiguredMonochrome(model, selectedPaintColorPanel) {

  console.log("Generating monochrome model");

  // Get the div with class paint-option-container-name
  const paintOptionContainer = selectedPaintColorPanel.querySelector(".paint-option-container-name");
  let texture_or_paint = getTextureFromPanel(paintOptionContainer);
  let is_paint = texture_or_paint[0].includes("#");

  // Create resultCanvas of the size of the model texture
  const resultCanvas = document.createElement("canvas");
  resultCanvas.id = "resultCanvas";
  resultCanvas.width = model.skin_size_w || 512;
  resultCanvas.height = model.skin_size_h || 512;

  // Get the ctx
  const ctxResult = resultCanvas.getContext("2d");

  document.body.appendChild(resultCanvas);


  // Create a list of canvas contexts for the layers named "ctx_{layer.id}"
  let canvas_list = [];
  let ctx_list = [];
  let canvas_layer_number = 0;

  // Create a list of promises for each layer to be retextured
  const layerPromises = [];

  // support for final overlays
  let finish_overlay = null;

  // For each paint layers:
  for (let layer of model.paint_layers) {
    console.log("Layer found: " + layer.URL);
    // Switch between the IDs of the layers
    /*switch (layer.id) {
      case "Full_Texture":
        baseLayerImageUrl = layer.URL;
        break;
      case "Base_Paint_Layer":
        originalLayer1ImageUrl = layer.URL;
        break;
      case "Extra_Paint_Layer_1":
        originalLayer2ImageUrl = layer.URL;
        break;
      default:
        console.log("Error: Layer ID not found");
        break;
    }*/

    // Apply the color or texture on the layer drawing
    if (layer.type == "Layer") {
      console.log("Layer found: " + layer.URL);
      canvas_layer_number += 1;

      // Create a canvas for the layer called "canvasLayer{layer_number}"
      const canvasLayer = document.createElement("canvas");
      canvasLayer.id = "canvasLayer" + canvas_layer_number;
      canvasLayer.width = model.skin_size_w || 512;
      canvasLayer.height = model.skin_size_h || 512;

      // get the context of the canvas and store it in "canvas_list"
      const ctx = canvasLayer.getContext("2d");
      ctx_list.push(ctx);
      canvas_list.push(canvasLayer);

      if (is_paint) {
        // Apply the color and push the promise to the list
        layerPromises.push(applyColor(layer.URL, texture_or_paint[0], ctx_list[canvas_layer_number - 1]));
      } else {
        // Apply the texture and push the promise to the list
        layerPromises.push(applyTexture(layer.URL, texture_or_paint[0], ctx_list[canvas_layer_number - 1]));
      }
    } else if (layer.type == "Base") {
      console.log("Base layer found: " + layer.URL);
      baseLayerImageUrl = layer.URL;
    } else if (layer.type == "Overlay") {
      console.log("Finish overlay found: " + layer.URL);
      finish_overlay = layer.URL;
    }
  }

  // if there is an overlay, add it to the end of the layerPromises
  if (finish_overlay) {
    console.log("Finish overlay found: " + finish_overlay);
    const overlayCanvas = document.createElement("canvas");
    overlayCanvas.width = model.skin_size_w || 512;
    overlayCanvas.height = model.skin_size_h || 512;
    const overlayCtx = overlayCanvas.getContext("2d");

    const overlayPromise = new Promise((resolve) => {
      const overlayImage = new Image();
      overlayImage.onload = function() {
        overlayCtx.drawImage(overlayImage, 0, 0);
        resolve();
      };
      overlayImage.src = finish_overlay;
    });

    layerPromises.push(overlayPromise);
    canvas_list.push(overlayCanvas);
  }

  // Wait for all the retexturing promises to resolve
  await Promise.all(layerPromises);
  
  // Now, all the layers have been retextured, and we can generate the new canvas
  generateNewCanvas(baseLayerImageUrl, canvas_list, ctxResult, resultCanvas.width, resultCanvas.height);

  // Delay for 500 milliseconds (adjust the delay time as needed)
  await new Promise(resolve => setTimeout(resolve, 500));

  // Get the div with configurator-central-model-render-panel id
  const renderer = document.getElementById("configurator-central-model-render-panel");

  // Generate a PNG URL from the canvas
  const new_texture_URL = generatePngUrlFromCanvas(resultCanvas);

  // Update current_configured_model with the new texture URL, paint layers and paint prices
  current_configured_model.texture_url = new_texture_URL;
  current_configured_model.paint_layers = [texture_or_paint[1]];
  current_configured_model.paint_price = [texture_or_paint[2]];

  // Replace the old renderer with a new one generated from the new createRenderPanel()
  renderer.replaceWith(createRenderPanel(model, new_texture_URL));
}

export async function generateConfiguredPolychrome(model, selectedPaintColorPanel) {

  // Get all the divs with class paint-option-container-name from the selectedPaintColorPanel
  const paintOptionContainers = selectedPaintColorPanel.querySelectorAll(".paint-option-container-name");

  let textures_or_paints_code = [];
  let textures_or_paints_name = [];
  let textures_or_paints_prices = [];
  let is_paints = [];

  // For each paint-option-container-name:
  for (let paintOptionContainer of paintOptionContainers) {
    // Get the texture or paint from the panel
    let texture_or_paint = getTextureFromPanel(paintOptionContainer);
    let is_paint = texture_or_paint[0].includes("#");

    textures_or_paints_code.push(texture_or_paint[0]);
    textures_or_paints_name.push(texture_or_paint[1]);
    textures_or_paints_prices.push(texture_or_paint[2]);
    is_paints.push(is_paint);
  }

  // Create resultCanvas of the size of the model texture
  const resultCanvas = document.createElement("canvas");
  resultCanvas.id = "resultCanvas";
  resultCanvas.width = model.skin_size_w || 512;
  resultCanvas.height = model.skin_size_h || 512;

  // Get the ctx
  const ctxResult = resultCanvas.getContext("2d");

  document.body.appendChild(resultCanvas);

  // Create a list of canvas contexts for the layers named "ctx_{layer.id}"
  let canvas_list = [];
  let ctx_list = [];
  let canvas_layer_number = 0;

  // Create a list of promises for each layer to be retextured
  const layerPromises = [];

  // support for final overlays
  let finish_overlay = null;

  // For each paint layers:
  for (let layer of model.paint_layers) {
    
    if (layer.type == "Base") {
      baseLayerImageUrl = layer.URL;
    }

    // Apply the color or texture on the layer drawing
    if (layer.type == "Layer") {
      canvas_layer_number += 1;

      // Create a canvas for the layer called "canvasLayer{layer_number}"
      const canvasLayer = document.createElement("canvas");
      canvasLayer.id = "canvasLayer" + canvas_layer_number;
      canvasLayer.width = model.skin_size_w || 512;
      canvasLayer.height = model.skin_size_h || 512;

      // get the context of the canvas and store it in "canvas_list"
      const ctx = canvasLayer.getContext("2d");
      ctx_list.push(ctx);
      canvas_list.push(canvasLayer);

      if (is_paints[canvas_layer_number - 1]) {
        // Apply the color and push the promise to the list
        layerPromises.push(applyColor(layer.URL, textures_or_paints_code[canvas_layer_number - 1], ctx_list[canvas_layer_number - 1]));
      } else {
        // Apply the texture and push the promise to the list
        layerPromises.push(applyTexture(layer.URL, textures_or_paints_code[canvas_layer_number - 1], ctx_list[canvas_layer_number - 1]));
      
      }
    }

    if (layer.type == "Overlay") {
      finish_overlay = layer.URL;
    }

  }

  // if there is an overlay, add it to the end of the layerPromises
  if (finish_overlay) {
    const overlayCanvas = document.createElement("canvas");
    overlayCanvas.width = model.skin_size_w || 512;
    overlayCanvas.height = model.skin_size_h || 512;
    const overlayCtx = overlayCanvas.getContext("2d");

    const overlayPromise = new Promise((resolve) => {
      const overlayImage = new Image();
      overlayImage.onload = function() {
        overlayCtx.drawImage(overlayImage, 0, 0);
        resolve();
      };
      overlayImage.src = finish_overlay;
    });

    layerPromises.push(overlayPromise);
    canvas_list.push(overlayCanvas);
  }

  // Wait for all the retexturing promises to resolve
  await Promise.all(layerPromises);

  // Now, all the layers have been retextured, and we can generate the new canvas
  generateNewCanvas(baseLayerImageUrl, canvas_list, ctxResult, resultCanvas.width, resultCanvas.height);

  // Delay for 500 milliseconds (adjust the delay time as needed)
  await new Promise(resolve => setTimeout(resolve, 500));

  // Get the div with configurator-central-model-render-panel id
  const renderer = document.getElementById("configurator-central-model-render-panel");

  // Generate a PNG URL from the canvas
  const new_texture_URL = generatePngUrlFromCanvas(resultCanvas);

  // Update current_configured_model with the new texture URL, paint layers and paint prices
  current_configured_model.texture_url = new_texture_URL;
  current_configured_model.paint_layers = textures_or_paints_name;
  current_configured_model.paint_price = textures_or_paints_prices;

  // Replace the old renderer with a new one generated from the new createRenderPanel()
  renderer.replaceWith(createRenderPanel(model, new_texture_URL));
}


export async function update_Model_Texture() {

  // Get the trinCarModels who's variant is current_configured_model.model
  const TrinModel = trinCarModels.find((TrinModel) => TrinModel.variant == current_configured_model.model);

  // Create resultCanvas of the size of the model texture
  const resultCanvas = document.createElement("canvas");
  resultCanvas.id = "resultCanvas";
  resultCanvas.width = TrinModel.skin_size_w || 512;
  resultCanvas.height = TrinModel.skin_size_h || 512;

  // Get the ctx
  const ctxResult = resultCanvas.getContext("2d");

  // Create a list of canvas contexts for the layers named "ctx_{layer.id}"
  var trin_model_layers = [];
  var canvas_list = [];
  var ctx_list = [];

  const paintLayerPromises = [];

  // ########################################################################################################################
  // Paint Layers
  // ########################################################################################################################

  // support for final overlays
  let finish_overlay = null;

  for (let i = 0; i < TrinModel.paint_layers.length; i++) {
    if (TrinModel.paint_layers[i].type == "Layer") {
      trin_model_layers.push(TrinModel.paint_layers[i]);
    } else if (TrinModel.paint_layers[i].type == "Base") {
      baseLayerImageUrl = TrinModel.paint_layers[i].URL;
    } else if (TrinModel.paint_layers[i].type == "Overlay") {
      finish_overlay = TrinModel.paint_layers[i].URL;
    }
  }
  // sort the layers by id number
  trin_model_layers.sort((a, b) => (a.id > b.id) ? 1 : -1);

  console.log("LENGTH: " + trin_model_layers.length);
  console.log("Trin model layers: " + trin_model_layers);
  
  // if user in configuring a monochrome model
  if (current_configured_model.paint_layers.length == 1) {
    console.log("Monochrome model");

    // For each trin model paint layers:
    for (let i = 0; i < trin_model_layers.length; i++) {

      // Create a canvas for the layer called "canvasLayer{layer_number}"
      const canvasLayer = document.createElement("canvas");
      canvasLayer.id = "canvasLayer" + i;
      canvasLayer.width = TrinModel.skin_size_w || 512;
      canvasLayer.height = TrinModel.skin_size_h || 512;

      // get the context of the canvas and store it in "canvas_list"
      const ctx = canvasLayer.getContext("2d");
      ctx_list.push(ctx);
      canvas_list.push(canvasLayer);

      console.log("Calling get_body_texture_type with : " + current_configured_model.paint_layers);

      // Get the texture type of the current paint layer
      const layer_type = get_body_texture_type(current_configured_model.paint_layers[0]);
      const actual_texture = get_texture(current_configured_model.paint_layers[0], layer_type);

      if (layer_type == "CustomTiled") {
        paintLayerPromises.push(applyCustomTiledTexture(trin_model_layers[i].URL, actual_texture.texture, ctx_list[i]));
      } else if (layer_type == "Paint" || layer_type == "Custom") {
        paintLayerPromises.push(applyColor(trin_model_layers[i].URL, actual_texture.hex, ctx_list[i]));
      } else {
        paintLayerPromises.push(applyTexture(trin_model_layers[i].URL, actual_texture.texture, ctx_list[i]));
      }
    }

  } else { // Polychrome model

    // For each trin model paint layers:
    for (let i = 0; i < trin_model_layers.length; i++) {

      // Create a canvas for the layer called "canvasLayer{layer_number}"
      const canvasLayer = document.createElement("canvas");
      canvasLayer.id = "canvasLayer" + i;
      canvasLayer.width = TrinModel.skin_size_w || 512;
      canvasLayer.height = TrinModel.skin_size_h || 512;

      // get the context of the canvas and store it in "canvas_list"
      const ctx = canvasLayer.getContext("2d");
      ctx_list.push(ctx);
      canvas_list.push(canvasLayer);

      // Get the texture type of the current paint layer
      const layer_type = get_body_texture_type(current_configured_model.paint_layers[i]);
      const actual_texture = get_texture(current_configured_model.paint_layers[i], layer_type);

      if (layer_type == "CustomTiled") {
        paintLayerPromises.push(applyCustomTiledTexture(trin_model_layers[i].URL, actual_texture.texture, ctx_list[i]));
      } else if (layer_type == "Paint" || layer_type == "Custom") {
        paintLayerPromises.push(applyColor(trin_model_layers[i].URL, actual_texture.hex, ctx_list[i]));
      } else {
        paintLayerPromises.push(applyTexture(trin_model_layers[i].URL, actual_texture.texture, ctx_list[i]));
      }
    }
  }

  // if there is an overlay, add it to the end of the layerPromises
  if (finish_overlay) {
    console.log("Finish overlay found: " + finish_overlay);
    
    const overlayCanvas = document.createElement("canvas");
    overlayCanvas.width = TrinModel.skin_size_w || 512;
    overlayCanvas.height = TrinModel.skin_size_h || 512;
    const overlayCtx = overlayCanvas.getContext("2d");

    const overlayPromise = new Promise((resolve) => {
      const overlayImage = new Image();
      overlayImage.onload = function() {
        overlayCtx.drawImage(overlayImage, 0, 0);
        resolve();
      };
      overlayImage.src = finish_overlay;
    });

    paintLayerPromises.push(overlayPromise);
    canvas_list.push(overlayCanvas);
  }

  // ########################################################################################################################
  // Interior Layers
  // ########################################################################################################################

  var actual_interior_textile = get_full_interior_textile(current_configured_model.interior);
  
  for (let i = 0; i < TrinModel.interior_layers.length; i++) {

    // Create a canvas for the layer called "canvasInteriorLayer{layer_number}"
    const canvasInteriorLayer = document.createElement("canvas");
    canvasInteriorLayer.id = "canvasInteriorLayer" + i;
    canvasInteriorLayer.width = TrinModel.skin_size_w || 512;
    canvasInteriorLayer.height = TrinModel.skin_size_h || 512;

    // get the context of the canvas and store it in "canvas_list"
    const ctx = canvasInteriorLayer.getContext("2d");
    ctx_list.push(ctx);
    canvas_list.push(canvasInteriorLayer);

    var list_index = ctx_list.length - 1;

    if (TrinModel.interior_layers[i].type == "Base") {
      paintLayerPromises.push(applyColor(TrinModel.interior_layers[i].URL, actual_interior_textile.base_color, ctx_list[list_index]));
    } else if (TrinModel.interior_layers[i].type == "Fabric") {
      paintLayerPromises.push(applyColor(TrinModel.interior_layers[i].URL, actual_interior_textile.panel_color, ctx_list[list_index]));
    } else if (TrinModel.interior_layers[i].type == "Stitching") {
      paintLayerPromises.push(applyColor(TrinModel.interior_layers[i].URL, actual_interior_textile.stitching_color, ctx_list[list_index]));
    } else if (TrinModel.interior_layers[i].type == "Accent") {
      if (current_configured_model.has_interior_accent && accent_enabled) {
        let texture = get_texture(current_configured_model.interior_accent, get_interior_texture_type(current_configured_model.interior_accent));
        paintLayerPromises.push(applyTexture(TrinModel.interior_layers[i].URL, texture.texture, ctx_list[list_index]));
      } else {
        // Handle the default case for Accent
        if (actual_interior_textile.secondary_base_color) {
          paintLayerPromises.push(applyColor(TrinModel.interior_layers[i].URL, actual_interior_textile.secondary_base_color, ctx_list[list_index]));
        } else {
          paintLayerPromises.push(applyColor(TrinModel.interior_layers[i].URL, actual_interior_textile.panel_color, ctx_list[list_index]));
        }
      }
    } else {
      console.log("No interior accent");
    }
  }

  // ########################################################################################################################


  // Wait for all the retexturing promises to resolve
  await Promise.all(paintLayerPromises);

  // Now, all the layers have been retextured, and we can generate the new canvas
  generateNewCanvas(baseLayerImageUrl, canvas_list, ctxResult, resultCanvas.width, resultCanvas.height);

  // Delay for 500 milliseconds (adjust the delay time as needed)
  await new Promise(resolve => setTimeout(resolve, 500));

  // Generate a PNG URL from the canvas
  const new_texture_URL = generatePngUrlFromCanvas(resultCanvas);

  // Update current_configured_model with the new texture URL
  current_configured_model.texture_url = new_texture_URL;

  // Get the div with configurator-central-model-render-panel id
  const renderer = document.getElementById("configurator-central-model-render-panel");
  // Replace the old renderer with a new one generated from the new createRenderPanel()
  renderer.replaceWith(createRenderPanel(TrinModel, new_texture_URL));
}
