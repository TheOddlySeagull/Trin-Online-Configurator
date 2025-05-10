import { trinCarModels, factoryColors } from './data.js';
import { createButtonSpecificPanel_ExteriorLayers_Selected, createButtonSpecificPanel_ExteriorLayers_Selector } from './configurator_paint_panels.js';
import { createButtonSpecificPanel_InteriorTrim_Selected, createButtonSpecificPanel_InteriorTrim_Selector } from './configurator_interior_panels.js';
import { save_new_configuration } from './comunicator.js';

/*
######################################################################
Utility functions (buttons)
######################################################################
*/

// Function to create a simple button
function createPanelButton(label) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button_category_container");

  const mainButton = document.createElement("button");
  mainButton.classList.add("main-button");
  mainButton.textContent = label;
  buttonContainer.appendChild(mainButton);

  return buttonContainer;
}

// Function to create a toggle button with sub-buttons
function createPanelToggleButton(label, subButtons) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button_category_container");

  const mainButton = document.createElement("button");
  mainButton.classList.add("main-button");
  mainButton.textContent = label;
  buttonContainer.appendChild(mainButton);

  // Create sub-buttons
  for (const subButtonLabel of subButtons) {
    const subButton = document.createElement("button");
    subButton.classList.add("sub-button");
    subButton.textContent = subButtonLabel;
    subButton.style.display = "none"; // Initially hide the sub-buttons
    buttonContainer.appendChild(subButton);
  }

  // Add event listener to the main button to toggle sub-buttons
  mainButton.addEventListener("click", () => {
    for (const subButton of buttonContainer.querySelectorAll("button:not(:first-child)")) {
      subButton.style.display = subButton.style.display === "none" ? "block" : "none";
    }
  });

  return buttonContainer;
}

// Function to create a specific button panel based on the selected button
export function createButtonSpecificPanel(selectedButton, model) {
  const buttonSpecificPanel = document.createElement("div");
  buttonSpecificPanel.classList.add("configurator-central-buttonspecific-panel");

  // Add custom content based on the selected button
  if (selectedButton === "Interior") {

    buttonSpecificPanel.appendChild(createButtonSpecificPanel_InteriorTrim_Selected(model));
    buttonSpecificPanel.appendChild(createButtonSpecificPanel_InteriorTrim_Selector(model));

  } else 
  if (selectedButton === "Monochrome") {

    buttonSpecificPanel.appendChild(createButtonSpecificPanel_ExteriorLayers_Selected(true, true));
    buttonSpecificPanel.appendChild(createButtonSpecificPanel_ExteriorLayers_Selector());

  } else 
  if (selectedButton === "Polychrome") {

    buttonSpecificPanel.appendChild(createButtonSpecificPanel_ExteriorLayers_Selected(false, true));
    buttonSpecificPanel.appendChild(createButtonSpecificPanel_ExteriorLayers_Selector());
    
  } else
  { 
    // Add content specific to the "Interior" button
    buttonSpecificPanel.classList.add("configurator-central-button-panel");

    const buttonSpecificPanelPlaceholderText = document.createElement("h2");
    buttonSpecificPanelPlaceholderText.textContent = "Select a configuration button to get started.";
    
    buttonSpecificPanel.appendChild(buttonSpecificPanelPlaceholderText);
  }

    return buttonSpecificPanel;
}

/*
######################################################################
Create Configurator Panels
######################################################################
*/

// Function to create the main button panel
export function createButtonPanelDiv(model) {
  const buttonPanel = document.createElement("div");
  buttonPanel.classList.add("configurator-central-button-panel");

  // Add the "Button panel" text
  const buttonPanelText = document.createElement("h2");
  buttonPanelText.textContent = "Button panel";
  buttonPanel.appendChild(buttonPanelText);

  // count the number of layer of type "Layer":
  var count = 0;
  for (let i = 0; i < model.paint_layers.length; i++) {
    if (model.paint_layers[i].type == "Layer") {
      count++;
    }
  }

  var sub_button_list = ["Monochrome"];

  if (count > 1) {
    // Create and add the "paint" button with sub-buttons
    sub_button_list = ["Monochrome", "Polychrome"];
  }

  // Create the "save" button
  const saveButton = createPanelButton("Save");
  buttonPanel.appendChild(saveButton);

  // Create and add the "paint" button witho sub-buttons
  const paintButton = createPanelToggleButton("Paint", sub_button_list);
  buttonPanel.appendChild(paintButton);

  // Create and add the "interior" button without sub-buttons
  const interiorButton = createPanelButton("Interior");
  buttonPanel.appendChild(interiorButton);

  // Add event listener to the "save" button to handle main button click
  saveButton.firstElementChild.addEventListener("click", () => {
    alert("Saved configuration!");
    save_new_configuration();
  });

  // Add event listener to the "paint" button to handle main button click
  paintButton.firstElementChild.addEventListener("click", () => {
    const buttonSpecificPanel = createButtonSpecificPanel("Paint", model);
    updateButtonSpecificPanel(buttonSpecificPanel);
  });

  // Add event listener to the "interior" button to handle main button click
  interiorButton.firstElementChild.addEventListener("click", () => {
    const buttonSpecificPanel = createButtonSpecificPanel("Interior", model);
    updateButtonSpecificPanel(buttonSpecificPanel);
  });

  // Add event listeners to the sub-buttons to change the button-specific panel
  const subButtons = paintButton.querySelectorAll(".sub-button");
  for (const subButton of subButtons) {
    subButton.addEventListener("click", () => {
      const buttonSpecificPanel = createButtonSpecificPanel(subButton.textContent, model);
      updateButtonSpecificPanel(buttonSpecificPanel);
    });
  }

  return buttonPanel;
}


// Function to update the button-specific panel content
function updateButtonSpecificPanel(buttonSpecificPanel) {
    // Get the existing button-specific panel
    const existingButtonSpecificPanel = document.querySelector(".configurator-central-buttonspecific-panel");
  
    // Replace the existing panel with the new one
    if (existingButtonSpecificPanel) {
      existingButtonSpecificPanel.replaceWith(buttonSpecificPanel);
    }
}