import { waitForTextureUpdate } from "./texture_generator.js";
import { trinCarModels, factoryColors } from './data.js';
import { createButtonSpecificPanel_ExteriorLayers_Selected, createButtonSpecificPanel_ExteriorLayers_Selector } from './configurator_paint_panels.js';
import { createButtonSpecificPanel_InteriorTrim_Selected, createButtonSpecificPanel_InteriorTrim_Selector } from './configurator_interior_panels.js';
import { save_configuration, current_configured_model, editing_configuration_id } from './comunicator.js';

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

  const saveAsButton = createPanelButton("Save as");
  saveAsButton.style.display = editing_configuration_id ? "" : "none";
  buttonPanel.insertBefore(saveAsButton, paintButton);

  const saveStatus = document.createElement("p");
  saveStatus.className = "configuration-save-status";
  saveStatus.setAttribute("role", "status");
  buttonPanel.appendChild(saveStatus);

  function openSaveDialog(saveAs) {
    if (document.querySelector(".configuration-save-dialog")) return;
    const dialog = document.createElement("dialog");
    dialog.className = "configuration-save-dialog";
    dialog.setAttribute("aria-labelledby", "configuration-save-title");
    const form = document.createElement("form");
    const title = document.createElement("h2");
    title.id = "configuration-save-title";
    title.textContent = saveAs ? "Save configuration as" : "Save configuration";
    const label = document.createElement("label");
    label.htmlFor = "configuration-save-name";
    label.textContent = "Configuration name";
    const input = document.createElement("input");
    input.id = "configuration-save-name";
    input.type = "text";
    input.value = current_configured_model.name || model.variant;
    input.autocomplete = "off";
    const errorMessage = document.createElement("p");
    errorMessage.className = "configuration-save-error";
    errorMessage.setAttribute("role", "alert");
    const actions = document.createElement("div");
    actions.className = "configuration-save-actions";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "sub-button";
    cancel.textContent = "Cancel";
    cancel.onclick = () => dialog.close();
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "main-button";
    submit.textContent = saveAs ? "Save as" : "Save";
    actions.append(cancel, submit);
    form.append(title, label, input, errorMessage, actions);
    dialog.appendChild(form);
    dialog.addEventListener("close", () => dialog.remove());
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (!input.value.trim()) {
        errorMessage.textContent = "Please provide a configuration name.";
        input.focus();
        return;
      }
      submit.disabled = true;
      cancel.disabled = true;
      input.disabled = true;
      const preventCancel = event => event.preventDefault();
      dialog.addEventListener("cancel", preventCancel);
      errorMessage.textContent = "";
      try {
        await waitForTextureUpdate();
        save_configuration(input.value, saveAs);
        saveAsButton.style.display = "";
        const params = new URLSearchParams(window.location.search);
        params.set("edit", editing_configuration_id);
        window.history.replaceState(null, "", `?${params}`);
        saveStatus.textContent = `Saved “${current_configured_model.name}”.`;
        dialog.close();
      } catch (error) {
        errorMessage.textContent = `Could not save configuration: ${error.message}`;
        submit.disabled = false;
        cancel.disabled = false;
        input.disabled = false;
        dialog.removeEventListener("cancel", preventCancel);
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
    input.focus();
    input.select();
  }
  saveButton.firstElementChild.addEventListener("click", () => openSaveDialog(false));
  saveAsButton.firstElementChild.addEventListener("click", () => openSaveDialog(true));

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