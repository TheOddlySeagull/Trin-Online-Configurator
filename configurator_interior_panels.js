import { interiorColors, factoryWoods, interiorAccents } from "./data.js";
import { current_configured_model } from './comunicator.js';
import { update_Model_Texture } from './texture_generator.js';

/*
######################################################################
Globals
######################################################################
*/

var has_accent = false;
export var accent_enabled = false;
var cycleButton_Index_InteriorTrim = 0;
var cycleButton_Index_InteriorAccent = 0;
var interior_trim_options = ["Upholstery"];
var interior_accent_options = ["Wood", "Accent"];

/*
######################################################################
Utility functions (buttons)
######################################################################
*/

function createCycleButton_InteriorTrim() {

    // ######################################################################

    // Update our options
    if (has_accent && accent_enabled) {
        interior_trim_options = ["Upholstery", "Accent"];
    } else {
        interior_trim_options = ["Upholstery"];
    }

    // ######################################################################

    // Update the option text
    function updateOptionText() {
        document.getElementById('interiorTrimOptionText').textContent = interior_trim_options[cycleButton_Index_InteriorTrim];
        updateButtonSpecificPanel_InteriorTrim_Selector()
    }

    // Action when clicking the left arrow button
    function prevOption() {
        cycleButton_Index_InteriorTrim = (cycleButton_Index_InteriorTrim - 1 + interior_trim_options.length) % interior_trim_options.length;
        updateOptionText();
    }

    // Action when clicking the right arrow button
    function nextOption() {
        cycleButton_Index_InteriorTrim = (cycleButton_Index_InteriorTrim + 1) % interior_trim_options.length;
        updateOptionText();
    }

    // ######################################################################
  
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
    optionText.id = "interiorTrimOptionText";
  
    // Add text to optionText
    optionText.textContent = interior_trim_options[cycleButton_Index_InteriorTrim];
  
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
    if (has_accent && accent_enabled) {
        cycleButtonCluster.appendChild(leftArrowButton);
        cycleButtonCluster.appendChild(optionText);
        cycleButtonCluster.appendChild(rightArrowButton);
    }
  
    return cycleButtonCluster;
}

function createCycleButton_AccentType() {

    // ######################################################################

    // Update the option text
    function updateOptionText() {
        document.getElementById('accentTypeOptionText').textContent = interior_accent_options[cycleButton_Index_InteriorAccent];
        updateButtonSpecificPanel_InteriorTrim_Selector_Accent();
    }

    // Action when clicking the left arrow button
    function prevOption() {
        cycleButton_Index_InteriorAccent = (cycleButton_Index_InteriorAccent - 1 + interior_accent_options.length) % interior_accent_options.length;
        updateOptionText();
    }

    // Action when clicking the right arrow button
    function nextOption() {
        cycleButton_Index_InteriorAccent = (cycleButton_Index_InteriorAccent + 1) % interior_accent_options.length;
        updateOptionText();
    }

    // ######################################################################
  
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
    optionText.id = "accentTypeOptionText";
  
    // Add text to optionText
    optionText.textContent = interior_accent_options[cycleButton_Index_InteriorAccent];
  
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
Showcase panel
######################################################################
*/

function create_InteriorTrim_ShowcaseBox(texture_name = "Gray", texture_type = "Color") {

    // ######################################################################

    // Find our correct texture
    if (texture_type === "Color") {
        var texture = interiorColors.find(texture => texture.name === texture_name);
    } else if (texture_type === "Wood") {
        if (texture_name === "None") {
            // Get the first wood texture from the factoryWoods array
            var texture = factoryWoods[0];
            texture_name = texture.name;
            current_configured_model.interior_accent = texture_name;

        } else {
            var texture = factoryWoods.find(texture => texture.name === texture_name);
        }
    } else if (texture_type === "Accent") {
        if (texture_name === "None") {
            // Get the first texture from the interiorAccents array
            var texture = interiorAccents[0];
            texture_name = texture.name;
            current_configured_model.interior_accent = texture_name;

        } else {
            var texture = interiorAccents.find(texture => texture.name === texture_name);
        }
    } else {
        console.log("Error: texture_type not recognized");
    }

    // ######################################################################

    // Create the interior showcase panel
    const interiorShowcasePanel = document.createElement("div");
    interiorShowcasePanel.classList.add("interior-option-container");

    // ----------------------------------------------------------------------

    // Top panel
    const interiorShowcasePanelTop = document.createElement("div");
    interiorShowcasePanelTop.classList.add("interior-option-container-color");
    if (texture_type === "Color") {
        interiorShowcasePanelTop.style.backgroundImage = "url(" + texture.background_url + ")";
        interiorShowcasePanelTop.style.backgroundSize = "64px 64px";
    } else if (texture_type === "Wood" || texture_type === "Accent") {
        interiorShowcasePanelTop.style.backgroundImage = "url(" + texture.texture + ")";
    }

    // ----------------------------------------------------------------------

    // Bottom panel
    const interiorShowcasePanelBottom = document.createElement("div");
    interiorShowcasePanelBottom.classList.add("interior-option-container-name");

    // Bottom sub-div content
    const interiorShowcasePanelBottomName = document.createElement("div");
    interiorShowcasePanelBottomName.textContent = texture.name;
    const interiorShowcasePanelBottomPrice = document.createElement("div");
    if (texture_type === "Color") {
        interiorShowcasePanelBottomPrice.textContent = texture.price + " grons";
    } else if (texture_type === "Wood") {
        interiorShowcasePanelBottomPrice.textContent = texture.interior_price + " grons";
    }

    // Append the bottom sub-div content to the bottom panel
    interiorShowcasePanelBottom.appendChild(interiorShowcasePanelBottomName);
    interiorShowcasePanelBottom.appendChild(interiorShowcasePanelBottomPrice);

    // Append the top and bottom sub-divs to the main div
    interiorShowcasePanel.appendChild(interiorShowcasePanelTop);
    interiorShowcasePanel.appendChild(interiorShowcasePanelBottom);

    return interiorShowcasePanel;

}

/*
######################################################################
The panel of the interior configurator:
######################################################################
*/

export function createButtonSpecificPanel_InteriorTrim_Selected() {

    // ######################################################################

    // Update our global variables
    has_accent = (current_configured_model.interior_accent != null);

    // ######################################################################

    // Create the selected interior trim panel
    const selectedInteriorColorPanel = document.createElement("div");
    selectedInteriorColorPanel.classList.add("paint-option-selected");
    selectedInteriorColorPanel.id = "selected-interior-trims";

    // ======================================================================

    // Create the title
    const selectedInteriorColorPanelTitle = document.createElement("h1");
    selectedInteriorColorPanelTitle.textContent = "Selected Interior";

    // ----------------------------------------------------------------------
    
    // Create the "enable accent" button if any
    if (has_accent) {
        var enableAccentButton = document.createElement("button");
        enableAccentButton.classList.add("paint-option-button");
        if (accent_enabled) {
            enableAccentButton.textContent = "Disable Accent";
        } else {
            enableAccentButton.textContent = "Enable Accent";
        }

        enableAccentButton.addEventListener("click", function() {
            accent_enabled = !accent_enabled;
            if (!accent_enabled) {
                current_configured_model.interior_accent = null;
            }
            updateButtonSpecificPanel_InteriorTrim();
        }
        );
    }

    // ----------------------------------------------------------------------

    // Create the interior color showcase panel
    const interiorColorShowcasePanel = create_InteriorTrim_ShowcaseBox(current_configured_model.interior, "Color");

    // ----------------------------------------------------------------------

    // Create the interior accent showcase panel if any
    if (accent_enabled) {

        // get the texture type of the accent
        if (factoryWoods.find(interior_accent => interior_accent.name === current_configured_model.interior_accent) != undefined) {
            var texture_type = "Wood";
        } else {
            var texture_type = "Accent";
        }

        var interiorAccentShowcasePanel = create_InteriorTrim_ShowcaseBox(current_configured_model.interior_accent, texture_type);
    }

    // ======================================================================

    selectedInteriorColorPanel.appendChild(selectedInteriorColorPanelTitle);

    if (has_accent) {
        selectedInteriorColorPanel.appendChild(enableAccentButton);
    }

    selectedInteriorColorPanel.appendChild(interiorColorShowcasePanel);

    if (accent_enabled) {
        selectedInteriorColorPanel.appendChild(interiorAccentShowcasePanel);
    }

    return selectedInteriorColorPanel;
}

export function createButtonSpecificPanel_InteriorTrim_Selector() {

    // ######################################################################

    // Create the interior option selector panel
    const interiorOptionSelectorPanel = document.createElement("div");
    interiorOptionSelectorPanel.classList.add("paint-option-selector");
    interiorOptionSelectorPanel.id = "interior-trim-selector";

    // ----------------------------------------------------------------------

    // Create the interior trim cycle button
    const interiorTrimCycleButton = createCycleButton_InteriorTrim();

    // ----------------------------------------------------------------------

    // Create the interior trim panel
    const interiorTrimPanel = createButtonSpecificPanel_InteriorTrim_Selector_Accent();

    // ======================================================================

    // Append the elemnts
    interiorOptionSelectorPanel.appendChild(interiorTrimCycleButton);
    interiorOptionSelectorPanel.appendChild(interiorTrimPanel);


    return interiorOptionSelectorPanel;
}

function createButtonSpecificPanel_InteriorTrim_Selector_Accent() {
    
    // ######################################################################

    // Create a new interior option selector panel
    const interiorTrimPanel = document.createElement("div");
    interiorTrimPanel.classList.add("interior-option-selector");
    interiorTrimPanel.id = "interior-trim-accent-selector";

    // ======================================================================

    if (interior_trim_options[cycleButton_Index_InteriorTrim] === "Accent") {
        // Create the accent type cycle button
        const accentTypeCycleButton = createCycleButton_AccentType();
        interiorTrimPanel.appendChild(accentTypeCycleButton);

        // Create the pannel for the interior accents:
        if (interior_accent_options[cycleButton_Index_InteriorAccent] === "Wood") {
            // for each factoryWoods, create a showcase panel
            factoryWoods.forEach(texture => {
                const newShowcasePanel = create_InteriorTrim_ShowcaseBox(texture.name, "Wood");
                newShowcasePanel.onclick = () => {

                    current_configured_model.interior_accent = texture.name;
                    updateButtonSpecificPanel_InteriorTrim_Selected();

                }
                interiorTrimPanel.appendChild(newShowcasePanel);
            }
            );
        } else if (interior_accent_options[cycleButton_Index_InteriorAccent] === "Accent") {
            // for each interiorAccents, create a showcase panel
            interiorAccents.forEach(texture => {
                const newShowcasePanel = create_InteriorTrim_ShowcaseBox(texture.name, "Accent");
                newShowcasePanel.onclick = () => {

                    current_configured_model.interior_accent = texture.name;
                    updateButtonSpecificPanel_InteriorTrim_Selected();

                }
                interiorTrimPanel.appendChild(newShowcasePanel);
            }
            );
        }


    } else if (interior_trim_options[cycleButton_Index_InteriorTrim] === "Upholstery") {
        // Create the pannel for the interior colors:
        // for each interiorColors, create a showcase panel
        interiorColors.forEach(texture => {
            const newShowcasePanel = create_InteriorTrim_ShowcaseBox(texture.name, "Color");
            newShowcasePanel.onclick = () => {

                current_configured_model.interior = texture.name;
                updateButtonSpecificPanel_InteriorTrim_Selected();

            }
            interiorTrimPanel.appendChild(newShowcasePanel);
        }
        );
    } else {
        console.log("ERROR: Invalid interior trim option: " + interior_trim_options[cycleButton_Index_InteriorTrim] + "");
    }

    return interiorTrimPanel;
}

/*
######################################################################
Update functions:
######################################################################
*/

function updateButtonSpecificPanel_InteriorTrim() {
    updateButtonSpecificPanel_InteriorTrim_Selected()

    updateButtonSpecificPanel_InteriorTrim_Selector()
}

function updateButtonSpecificPanel_InteriorTrim_Selected() {
    
    // Get the selected interior trim panel
    const selectedInteriorColorPanel = document.getElementById("selected-interior-trims");
    // replace it with the new one
    selectedInteriorColorPanel.replaceWith(createButtonSpecificPanel_InteriorTrim_Selected());

    // Update the rendered model
    update_Model_Texture();
}

function updateButtonSpecificPanel_InteriorTrim_Selector() {
    
    // Get the interior option selector panel
    const interiorOptionSelectorPanel = document.getElementById("interior-trim-selector");
    // replace it with the new one
    interiorOptionSelectorPanel.replaceWith(createButtonSpecificPanel_InteriorTrim_Selector());

    updateButtonSpecificPanel_InteriorTrim_Selector_Accent();

}

function updateButtonSpecificPanel_InteriorTrim_Selector_Accent() {
    
    //Get element with class interior-option-selector
    const oldInteriorTrimPanel = document.getElementById("interior-trim-accent-selector");

    // Replace the old interior option selector panel with the new one
    oldInteriorTrimPanel.replaceWith(createButtonSpecificPanel_InteriorTrim_Selector_Accent());
}
