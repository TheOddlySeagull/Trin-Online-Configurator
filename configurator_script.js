import { trinCarModels } from './data.js';
import { createRenderPanel } from './configurator_renderer.js';
import { createButtonPanelDiv, createButtonSpecificPanel } from './configurator_button_panel.js';
import { calculateCurrentPrice, updatePricing, current_configured_model, resetCurrentModel } from './comunicator.js';


const modelConfiguratorContainer = document.querySelector(".model-configurator-container");


/*
######################################################################
Create Configurator 
######################################################################
*/

/*
Function to create the configurator div

This div holds the 2 main divs:
- The header div
- The central div
*/

function createConfigurator(model) {

  //=====================================================================

  //Update price
  updatePricing("base", model.base_price);

  //=====================================================================

  // Create the configurator
  const modelConfigurator = document.createElement("div");
  modelConfigurator.classList.add("model-configurator-container");

  //=====================================================================

  // Create the configurator header
  const configuratorHeaderDiv = createConfiguratorHeader(model);

  //=====================================================================

  // Create the configurator central
  const configuratorCentralDiv = createConfiguratorCentral(model);

  //=====================================================================

  // Add the header div to the model configurator
  modelConfigurator.appendChild(configuratorHeaderDiv);
  // Add the central div to the model configurator
  modelConfigurator.appendChild(configuratorCentralDiv);


  // Return the model configurator
  return modelConfigurator;
}

// Function to create the configurator header
function createConfiguratorHeader(model) {
  
  // Add the header base
  const configuratorHeaderBase = document.createElement("div");
  configuratorHeaderBase.classList.add("configurator-header");

  //=====================================================================

  // Create the full model name
  const headerFullModelName = document.createElement("div");
  headerFullModelName.classList.add("configurator-header-full-model");

  //---------------------------------------------------------

  // Add Model main name to headerFullModelName
  const headerSUB_ModelMainName = document.createElement("h2");
  headerSUB_ModelMainName.textContent = model.name;
  headerFullModelName.appendChild(headerSUB_ModelMainName);

  // Add Model name variant to headerFullModelName
  const headerSUB_ModelVariant = document.createElement("h3");
  headerSUB_ModelVariant.textContent = model.variant;
  headerFullModelName.appendChild(headerSUB_ModelVariant);

  //=====================================================================

  // Create the small model preview
  const headerSmallModelPreview = document.createElement("div");
  headerSmallModelPreview.classList.add("configurator-header-small-model");

  //---------------------------------------------------------

  // Add Model image to headerSmallModelPreview
  const headerSUB_ModelImage = document.createElement("img");
  headerSUB_ModelImage.src = model.image;
  headerSUB_ModelImage.alt = model.name;
  headerSmallModelPreview.appendChild(headerSUB_ModelImage);

  //=====================================================================

  // Create the model price
  const headerModelPrice = document.createElement("div");
  headerModelPrice.classList.add("configurator-header-price");

  //---------------------------------------------------------

  // Add "price" text to headerModelPrice
  const headerSUB_ModelPrice = document.createElement("h2");
  headerSUB_ModelPrice.textContent = "Price";
  headerModelPrice.appendChild(headerSUB_ModelPrice);

  // Add Model price to headerModelPrice
  const headerSUB_ModelPriceValue = document.createElement("h3");
  headerSUB_ModelPriceValue.textContent = `${calculateCurrentPrice()} grons`;
  headerModelPrice.appendChild(headerSUB_ModelPriceValue);

  //=====================================================================

  // Add headerFullModelName to headerBase
  configuratorHeaderBase.appendChild(headerFullModelName);
  // Add headerSmallModelPreview to headerBase
  configuratorHeaderBase.appendChild(headerSmallModelPreview);
  // Add headerModelPrice to headerBase
  configuratorHeaderBase.appendChild(headerModelPrice);

  //=====================================================================


  return configuratorHeaderBase;

}

// Function to create the configurator central
function createConfiguratorCentral(model) {

  // Create the configurator central base
  const configuratorCentralBase = document.createElement("div");
  configuratorCentralBase.classList.add("configurator-central");

  //=====================================================================

  // Create the configurator button panel
  const configuratorButtonPanel = createButtonPanelDiv(model);

  //=====================================================================

  // Create the configurator button specific panel
  const configuratorButtonSpecificPanel = createButtonSpecificPanel(model);

  //=====================================================================

  // Create the configurator render panel
  const configuratorRenderPanel = createRenderPanel(model);

  //=====================================================================

  // Add configuratorButtonPanel to configuratorCentralBase
  configuratorCentralBase.appendChild(configuratorButtonPanel);
  // Add configuratorButtonSpecificPanel to configuratorCentralBase
  configuratorCentralBase.appendChild(configuratorButtonSpecificPanel);
  // Add configuratorRenderPanel to configuratorCentralBase
  configuratorCentralBase.appendChild(configuratorRenderPanel);

  return configuratorCentralBase;

}

/*
Function to render the model configurator

This function is called when the page is loaded, and when the user clicks on a button
*/

function renderModelConfigurator() {
  modelConfiguratorContainer.innerHTML = "";

  // Get the model variant name from the URL (eg. model = "Heavorum Crew Cab Dually")
  const urlParams = new URLSearchParams(window.location.search);
  const modelDetailName = urlParams.get("model");

  // Find the model to show, based on the model variant name
  const modelToShow = trinCarModels.find((model) => model.variant === modelDetailName);

  // If the model is not found, show an error message
  if (!modelToShow) {
    modelConfiguratorContainer.innerHTML = `<h1>Model not found</h1>`;
    return;
  } else {
    // Update the current model
    resetCurrentModel(modelToShow);
  }

  // Create the configurator
  const modelConfigurator = createConfigurator(modelToShow);

  // Add the configurator to the model configurator container
  modelConfiguratorContainer.appendChild(modelConfigurator);

}

// Initial rendering
renderModelConfigurator();
