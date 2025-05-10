import { current_configured_model } from "./comunicator.js";

export function createInteriorTrimCurrentSelectionPanel() {

    // ######################################################################

    //Get the texture from interiorColors where name is interior_name
    var interior_color = interiorColors.find(interior_color => interior_color.name === current_configured_model.interior);
    
    if (current_configured_model.interior_accent != null) {
        var interior_accent = factoryWoods.find(interior_accent => interior_accent.name === current_configured_model.interior_accent);
    } else {
        var interior_accent = null;
    }

    // ######################################################################

    // Create the interior showcase panel
    const interiorShowcasePanel = document.createElement("div");
    interiorShowcasePanel.classList.add("interior-option-container");

    // ----------------------------------------------------------------------

    // Top panel
    const interiorShowcasePanelTop = document.createElement("div");
    interiorShowcasePanelTop.classList.add("interior-option-container-color");
    interiorShowcasePanelTop.style.backgroundImage = "url(" + interior_color.background_url + ")";
    interiorShowcasePanelTop.style.backgroundSize = "64px 64px";

    // ----------------------------------------------------------------------

    // Bottom panel
    const interiorShowcasePanelBottom = document.createElement("div");
    interiorShowcasePanelBottom.classList.add("interior-option-container-name");

    // Bottom sub-div content
    const interiorShowcasePanelBottomName = document.createElement("div");
    interiorShowcasePanelBottomName.textContent = interior_color.name;
    const interiorShowcasePanelBottomPrice = document.createElement("div");
    if (texture_type === "Color") {
        interiorShowcasePanelBottomPrice.textContent = interior_color.price + " grons";
    } else if (texture_type === "Wood") {
        interiorShowcasePanelBottomPrice.textContent = interior_color.interior_price + " grons";
    }

    // Append the bottom sub-div content to the bottom panel
    interiorShowcasePanelBottom.appendChild(interiorShowcasePanelBottomName);
    interiorShowcasePanelBottom.appendChild(interiorShowcasePanelBottomPrice);

    // Append the top and bottom sub-divs to the main div
    interiorShowcasePanel.appendChild(interiorShowcasePanelTop);
    interiorShowcasePanel.appendChild(interiorShowcasePanelBottom);

    return interiorShowcasePanel;

}