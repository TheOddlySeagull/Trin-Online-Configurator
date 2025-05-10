import { get_body_texture_type, factoryColors, factoryWraps, factoryWoods } from "./data.js";
import { current_configured_model, get_current_full_model } from './comunicator.js';
import { update_Model_Texture } from './texture_generator.js';


/*
######################################################################
Globals
######################################################################
*/

// Define the current options selection
var currentPaint_Layer_Index = 0;
var currentPaint_Type_Index = 0;
var is_monochrome = true;
var exterior_LayerType_Options = ["Paint", "Wrap", "Wood", "Custom"];

/*
######################################################################
Utility functions (buttons)
######################################################################
*/

function createCycleButton_Layer() {

    let options = [];

    for (let i = 1; i < current_configured_model.paint_layers.length + 1; i++) {

        options.push("Paint " + i);
    }

    function updateOptionText() {
        document.getElementById('optionText').textContent = options[currentPaint_Layer_Index];
    }

    function prevOption() {
        currentPaint_Layer_Index = (currentPaint_Layer_Index - 1 + options.length) % options.length;
        updateOptionText();
    }

    function nextOption() {
        currentPaint_Layer_Index = (currentPaint_Layer_Index + 1) % options.length;
        updateOptionText();
    }
  
    // Create the cycling button
    const cycleButtonCluster = document.createElement("div");
    cycleButtonCluster.classList.add("paint-option-cycle-button-container");
  
    // ----------------------------------------------------------------------
  
    // Left arrow button
    const leftArrowButton = document.createElement("div");
    leftArrowButton.classList.add("paint-option-cycle-button-arrow");
  
    // Add the onclick function to the left arrow button
    leftArrowButton.onclick = () => prevOption();
  
    // Add text to leftArrowButton
    leftArrowButton.textContent = "◀";
  
    // ----------------------------------------------------------------------
  
    // Text in the middle
    const optionText = document.createElement("div");
    optionText.classList.add("paint-option-cycle-button-text");
    optionText.id = "optionText";
  
    // Add text to optionText
    optionText.textContent = "Paint 1";
  
    // ----------------------------------------------------------------------
  
    // Right arrow button
    const rightArrowButton = document.createElement("div");
    rightArrowButton.classList.add("paint-option-cycle-button-arrow");
  
    // Add the onclick function to the right arrow button
    rightArrowButton.onclick = () => nextOption();
  
    // Add text to rightArrowButton
    rightArrowButton.textContent = "▶";
  
    // ----------------------------------------------------------------------
  
    // Add the buttons to the cycleButtonCluster
    cycleButtonCluster.appendChild(leftArrowButton);
    cycleButtonCluster.appendChild(optionText);
    cycleButtonCluster.appendChild(rightArrowButton);
  
    return cycleButtonCluster;
  
}

function createCycleButton_LayerType(default_option = "Paint") {

    function updateOptionText() {
        document.getElementById('textureTypeText').textContent = exterior_LayerType_Options[currentPaint_Type_Index];
        updateButtonSpecificPanel_ExteriorLayers_Selector_LayerType();
    }

    function prevOption() {
        currentPaint_Type_Index = (currentPaint_Type_Index - 1 + exterior_LayerType_Options.length) % exterior_LayerType_Options.length;
        updateOptionText();
    }

    function nextOption() {
        currentPaint_Type_Index = (currentPaint_Type_Index + 1) % exterior_LayerType_Options.length;
        updateOptionText();
    }

    // Create the cycling button
    const cycleButtonCluster = document.createElement("div");
    cycleButtonCluster.classList.add("paint-option-cycle-button-container");

    // ----------------------------------------------------------------------

    // Left arrow button
    const leftArrowButton = document.createElement("div");
    leftArrowButton.classList.add("paint-option-cycle-button-arrow");

    // Add the onclick function to the left arrow button
    leftArrowButton.onclick = () => prevOption();
  
    // Add text to leftArrowButton
    leftArrowButton.textContent = "◀";

    // ----------------------------------------------------------------------

    // Text in the middle
    const optionText = document.createElement("div");
    optionText.classList.add("paint-option-cycle-button-text");
    optionText.id = "textureTypeText";
  
    // Add text to optionText
    optionText.textContent = default_option;

    // ----------------------------------------------------------------------

    // Right arrow button
    const rightArrowButton = document.createElement("div");
    rightArrowButton.classList.add("paint-option-cycle-button-arrow");

    // Add the onclick function to the right arrow button
    rightArrowButton.onclick = () => nextOption();

    // Add text to rightArrowButton
    rightArrowButton.textContent = "▶";

    // ----------------------------------------------------------------------

    // Add the buttons to the cycleButtonCluster
    cycleButtonCluster.appendChild(leftArrowButton);
    cycleButtonCluster.appendChild(optionText);
    cycleButtonCluster.appendChild(rightArrowButton);

    return cycleButtonCluster;

}


/*
######################################################################
Create Paint Panels
######################################################################
*/

export function createPaintShowcasePanel(texture_name = "Glacier White", type = "Paint") {

    if (type == "Wrap") {
        //Get the texture from factoryWraps where name is texture_name
        var color = factoryWraps.find(color => color.name === texture_name);
    } else if (type == "Wood") {
        //Get the texture from factoryWoods where name is texture_name
        var color = factoryWoods.find(color => color.name === texture_name);
    } else if (type == "Paint") {
        //Get the hex from factoryColors where name is texture_name
        var color = factoryColors.find(color => color.name === texture_name);
    } else if (type == "Custom") {
        var color = {name: texture_name, hex: texture_name, price: 5000};
    }

    // Create the paint showcase panel
    const paintShowcasePanel = document.createElement("div");
    paintShowcasePanel.classList.add("paint-option-container");

    // Top sub-div
    const paintShowcasePanelTop = document.createElement("div");
    paintShowcasePanelTop.classList.add("paint-option-container-color");

    if (type == "Paint" || (type == "Custom" && texture_name != "Custom")) {
        paintShowcasePanelTop.style.backgroundColor = color.hex;
    } else if (type == "Wrap" || type == "Wood") {
        paintShowcasePanelTop.style.backgroundImage = "url(" + color.texture + ")";
    } else if (type == "Custom" && texture_name == "Custom") {
        //paintShowcasePanelTop.style.backgroundColor = color.hex;

        // Create a color picker
        const showcasePanel = document.createElement("input");
        showcasePanel.type = "color";
        //Make it fit the panel
        showcasePanel.style.width = "100%";
        showcasePanel.style.height = "100%";
        //disable border
        showcasePanel.style.border = "none";
        showcasePanel.addEventListener("input", () => {
            current_configured_model.paint_layers[currentPaint_Layer_Index] = showcasePanel.value;
            current_configured_model.paint_price[currentPaint_Layer_Index] = 5000;
            updateButtonSpecificPanel_ExteriorLayers_Selected();
        });

        paintShowcasePanelTop.appendChild(showcasePanel);

    }

    // Bottom sub-div
    const paintShowcasePanelBottom = document.createElement("div");
    paintShowcasePanelBottom.classList.add("paint-option-container-name");

    // Bottom sub-div content
    const paintShowcasePanelBottomName = document.createElement("div");
    paintShowcasePanelBottomName.textContent = color.name;
    const paintShowcasePanelBottomPrice = document.createElement("div");
    if (type == "Wood") {
        paintShowcasePanelBottomPrice.textContent = color.exterior_price + " grons";
    } else
        paintShowcasePanelBottomPrice.textContent = color.price + " grons";

    // Append the bottom sub-divs to the bottom sub-div
    paintShowcasePanelBottom.appendChild(paintShowcasePanelBottomName);
    paintShowcasePanelBottom.appendChild(paintShowcasePanelBottomPrice);

    // Append the top and bottom sub-divs to the main div
    paintShowcasePanel.appendChild(paintShowcasePanelTop);
    paintShowcasePanel.appendChild(paintShowcasePanelBottom);

    return paintShowcasePanel;
}

/*
######################################################################
The panel of the exterior layers configurator:
######################################################################
*/

export function createButtonSpecificPanel_ExteriorLayers_Selected( monochrome = false, update_globals = false ) {

    // ######################################################################

    if (update_globals) {

        // Update our global variables
        var model = get_current_full_model();
        
        is_monochrome = monochrome;

        //If monochrome, only keep the first layer
        if (is_monochrome) {
            current_configured_model.paint_layers = [current_configured_model.paint_layers[0]];
            current_configured_model.paint_price = [current_configured_model.paint_price[0]];
        }
        //If not monochrome, add layers until we have the same amount as the model
        else {
            while (current_configured_model.paint_layers.length < model.paint_layers.length-1) {
                current_configured_model.paint_layers.push("Glacier White");
                current_configured_model.paint_price.push(0);
            }
        }

        currentPaint_Layer_Index = 0;
        currentPaint_Type_Index = 0;

        console.log(current_configured_model);
    }

    if (is_monochrome) {
        currentPaint_Layer_Index = 0;
    }

    // ######################################################################

    // Create the selected interior trim panel
    const selectedExteriorLayersPanel = document.createElement("div");
    selectedExteriorLayersPanel.classList.add("paint-option-selected");
    selectedExteriorLayersPanel.id = "selected-exterior-layers";

    // ======================================================================

    // Create the title
    const selectedExteriorLayersPanelTitle = document.createElement("h1");
    selectedExteriorLayersPanelTitle.textContent = "Selected Exterior";

    selectedExteriorLayersPanel.appendChild(selectedExteriorLayersPanelTitle);
    
    // ----------------------------------------------------------------------

    for (let i = 0; i < current_configured_model.paint_layers.length; i++) {
        const exteriorTextureShowcase = createPaintShowcasePanel(current_configured_model.paint_layers[i], get_body_texture_type(current_configured_model.paint_layers[i]));
        selectedExteriorLayersPanel.appendChild(exteriorTextureShowcase);
    }

    // ======================================================================
    
    return selectedExteriorLayersPanel;
}

export function createButtonSpecificPanel_ExteriorLayers_Selector() {

    // ######################################################################

    // Create a new exterior layer option selector panel
    const exteriorLayerSelectorPanel = document.createElement("div");
    exteriorLayerSelectorPanel.classList.add("paint-option-selector");
    exteriorLayerSelectorPanel.id = "exterior-layer-selector";

    // ======================================================================

    // Create the layer cycle button with createCycleButton_Layer
    if (!is_monochrome) {
        exteriorLayerSelectorPanel.appendChild(createCycleButton_Layer(currentPaint_Layer_Index));
    }

    // ======================================================================

    // Create the texture options panel with createButtonSpecificPanel_ExteriorLayers_Selector_LayerType
    exteriorLayerSelectorPanel.appendChild(createButtonSpecificPanel_ExteriorLayers_Selector_LayerType());

    // ======================================================================

    return exteriorLayerSelectorPanel;

}

function createButtonSpecificPanel_ExteriorLayers_Selector_LayerType() {

    // ######################################################################

    // Create a new exterior layer type option selector panel
    const exteriorLayerTypePanel = document.createElement("div");
    exteriorLayerTypePanel.classList.add("interior-option-selector");
    exteriorLayerTypePanel.id = "exterior-layer-type-selector";

    // ======================================================================

    // Create the layer type cycle button with createCycleButton_LayerType
    exteriorLayerTypePanel.appendChild(createCycleButton_LayerType(exterior_LayerType_Options[currentPaint_Type_Index]));

    // ======================================================================

    

    if (exterior_LayerType_Options[currentPaint_Type_Index] == "Paint") {
        factoryColors.forEach(color => {
            const showcasePanel = createPaintShowcasePanel(color.name, "Paint");
            showcasePanel.addEventListener("click", () => {
                current_configured_model.paint_layers[currentPaint_Layer_Index] = color.name;
                current_configured_model.paint_price[currentPaint_Layer_Index] = color.price;
                updateButtonSpecificPanel_ExteriorLayers_Selected();
            });
    
            exteriorLayerTypePanel.appendChild(showcasePanel);
        }
        );
    } else if (exterior_LayerType_Options[currentPaint_Type_Index] == "Wrap") {
        factoryWraps.forEach(wrap => {
            const showcasePanel = createPaintShowcasePanel(wrap.name, "Wrap");
            showcasePanel.addEventListener("click", () => {
                current_configured_model.paint_layers[currentPaint_Layer_Index] = wrap.name;
                current_configured_model.paint_price[currentPaint_Layer_Index] = wrap.price;
                updateButtonSpecificPanel_ExteriorLayers_Selected();
            });
    
            exteriorLayerTypePanel.appendChild(showcasePanel);
        }
        );
    } else if (exterior_LayerType_Options[currentPaint_Type_Index] == "Wood") {
        factoryWoods.forEach(wood => {
            const showcasePanel = createPaintShowcasePanel(wood.name, "Wood");
            showcasePanel.addEventListener("click", () => {
                current_configured_model.paint_layers[currentPaint_Layer_Index] = wood.name;
                current_configured_model.paint_price[currentPaint_Layer_Index] = wood.exterior_price;
                updateButtonSpecificPanel_ExteriorLayers_Selected();
            });
    
            exteriorLayerTypePanel.appendChild(showcasePanel);
        }
        );
    } else if (exterior_LayerType_Options[currentPaint_Type_Index] == "Custom") {
        const showcasePanel = createPaintShowcasePanel("Custom", "Custom");
        // Create a color picker
        /*const showcasePanel = document.createElement("input");
        showcasePanel.type = "color";
        showcasePanel.addEventListener("input", () => {
            current_configured_model.paint_layers[currentPaint_Layer_Index] = showcasePanel.value;
            current_configured_model.paint_price[currentPaint_Layer_Index] = 5000;
            updateButtonSpecificPanel_ExteriorLayers_Selected();
        });*/

        exteriorLayerTypePanel.appendChild(showcasePanel);
    } else {
        console.log("Error: Invalid exterior layer type: " + exterior_LayerType_Options[currentPaint_Type_Index]);
    }

    // ======================================================================

    return exteriorLayerTypePanel;
}

/*
######################################################################
Update functions:
######################################################################
*/

function updateButtonSpecificPanel_ExteriorLayers() {
    
    updateButtonSpecificPanel_ExteriorLayers_Selected();

    updateButtonSpecificPanel_ExteriorLayers_Selector();
}



function updateButtonSpecificPanel_ExteriorLayers_Selected() {

    //Get element with class paint-option-selected
    const oldPanel = document.getElementById("selected-exterior-layers");

    // Replace the old interior option selector panel with the new one
    oldPanel.replaceWith(createButtonSpecificPanel_ExteriorLayers_Selected());

    console.log("index ", currentPaint_Layer_Index, ": ", exterior_LayerType_Options[currentPaint_Type_Index]);
    console.log(current_configured_model);

    // Update the rendered model
    update_Model_Texture();
}

function updateButtonSpecificPanel_ExteriorLayers_Selector() {

    //Get element with class paint-option-selector
    const oldPanel = document.getElementById("paint-option-selector");

    // Replace the old interior option selector panel with the new one
    oldPanel.replaceWith(createButtonSpecificPanel_ExteriorLayers_Selector());

}

function updateButtonSpecificPanel_ExteriorLayers_Selector_LayerType() {

    //Get element with class interior-option-selector
    const oldPanel = document.getElementById("exterior-layer-type-selector");

    // Replace the old interior option selector panel with the new one
    oldPanel.replaceWith(createButtonSpecificPanel_ExteriorLayers_Selector_LayerType());

}



