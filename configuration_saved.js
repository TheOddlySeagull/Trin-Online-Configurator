import { delete_saved_configuration, calculatePrice, save_new_configuration } from "./comunicator.js";
import { trinCarModels, partMapping, get_texture, get_interior_texture_type } from "./data.js";
import { addTextureToModel } from "./three_model_viewer.js";
import { createRenderPanel } from "./configurator_renderer.js";
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Function to reead all the configurations from the localStorage
function read_configurations() {
    // Retrieving the list of saved configurations from localStorage
    const storedData = localStorage.getItem('saved_configurations');
    let saved_configurations = JSON.parse(storedData) || [];

    //Get the saved-configurations-container div
    const saved_configurations_container = document.getElementById('saved-configurations-container');

    // Add json file input
    const importInput = document.createElement('input');
    importInput.type = 'file';
    importInput.accept = '.json';
    importInput.id = 'jsonFileInput';
    importInput.addEventListener('change', handleFileInputChange);

    // Add an "Import Configuration" button
    const importButton = document.createElement('button');
    importButton.classList.add('saved-configuration-card-button');
    importButton.innerHTML = "Import Configuration from Json";
    // Disable button
    //importButton.disabled = true;
    // Trigger import when the import button is clicked
    importButton.addEventListener('click', () => {
        importInput.click();
    });

    saved_configurations_container.appendChild(importButton);

    // Copy the list and reverse it
    let saved_configurations_copy = saved_configurations.slice();
    saved_configurations_copy.reverse();

    // For each saved configuration, call create_saved_configuration_card with the configuration and index
    for (let i = 0; i < saved_configurations_copy.length; i++) {
        saved_configurations_container.appendChild(create_saved_configuration_card(saved_configurations_copy[i]));
    }
}

// Function to export a configuration as a .json file
function downloadConfigurationAsJSON(configuration) {
    // Convert the configuration object to a JSON string
    const jsonConfig = JSON.stringify(configuration, null, 2); // The third argument adds indentation for readability

    // Create a Blob from the JSON data
    const blob = new Blob([jsonConfig], { type: 'application/json' });

    // Create a temporary anchor element for download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'configuration.json'; // Set the desired file name

    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Function to import configuration from JSON file
async function importConfigurationFromJSON(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const importedConfig = JSON.parse(event.target.result);
            save_new_configuration(importedConfig); // Call your existing function to save the new configuration
            console.log('Configuration imported successfully:', importedConfig);

            //Get the saved-configurations-container div and add the new configuration card after the button (so as second child)
            const saved_configurations_container = document.getElementById('saved-configurations-container');
            saved_configurations_container.insertBefore(create_saved_configuration_card(importedConfig), saved_configurations_container.children[1]);

        } catch (error) {
            console.error('Error importing configuration:', error);
        }
    };
    reader.readAsText(file);
}

// Function to handle file input change event
function handleFileInputChange(event) {
    const file = event.target.files[0];
    if (file) {
        importConfigurationFromJSON(file);
    }
}

// Function to handle download
function downloadImage(imageUrl) {
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'configuration_skin.png'; // Set the desired file name

    // Attach an error event handler
    downloadLink.addEventListener('error', () => {
        // Display an error message on the page
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Download failed. Please try again later.';
        document.body.appendChild(errorMessage);
    });

    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Function to create a card for each saved configuration
export function create_saved_configuration_card(configuration) {
    // Create a new div element for the configuration card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('saved-configuration-card-main');

    //##########################################################################################################

    // Add the top line
    const topLine = document.createElement('div');
    topLine.classList.add('saved-configuration-card-title');

    // Add title to top line
    const title = document.createElement('h3');
    title.innerHTML = configuration.model;

    //----------------------------------------------------------------------------------------------------------

    topLine.appendChild(title);

    //##########################################################################################################

    // Add the central line
    const centralLine = document.createElement('div');
    centralLine.classList.add('saved-configuration-card-central');

    //----------------------------------------------------------------------------------------------------------

    // Add the details
    const details = document.createElement('div');
    details.classList.add('saved-configuration-card-details');

    //-----------------------------------------------------

    // Base Price:
    const basePrice = document.createElement('h4');
    basePrice.innerHTML = "Base Price: " + configuration.base_price + " grons";

    //Paints:
    const paintTitle = document.createElement('h4');
    paintTitle.innerHTML = "Paints:";


    //Paint list:
    const paintList = document.createElement('ul');
    // If polychrome, add 1000 grons to the base price
    if (configuration.paint_layers.length > 1) {
        const paint = document.createElement('li');
        paint.innerHTML = "Polychrome: 1000 grons";
        paintList.appendChild(paint);
    }
    // Add the paints to the list
    for (let i = 0; i < configuration.paint_layers.length; i++) {
        const paint = document.createElement('li');
        paint.innerHTML = configuration.paint_layers[i] + ": " + configuration.paint_price[i] + " grons";
        paintList.appendChild(paint);
    }

    //-----------------------------------------------------

    //Interior:
    const interiorTitle = document.createElement('h4');
    interiorTitle.innerHTML = "Interior:";

    //Interior list:
    const interiorList = document.createElement('ul');

    const interior = document.createElement('li');
    interior.innerHTML = "Upholstery color: " + configuration.interior + ": " + get_texture(configuration.interior, "Color").price + " grons";
    interiorList.appendChild(interior);

    if (configuration.has_interior_accent && configuration.interior_accent != null) {
        const interiorWood = document.createElement('li');

        let interior_accent_texture_type = get_interior_texture_type(configuration.interior_accent);
        interiorWood.innerHTML = "Accent: " + configuration.interior_accent + ": " + get_texture(configuration.interior_accent, interior_accent_texture_type).interior_price + " grons";
        

        interiorList.appendChild(interiorWood);
    }

    //-----------------------------------------------------

    //Parts:
    const partsTitle = document.createElement('h4');
    partsTitle.innerHTML = "Parts:";

    //Parts list:
    const partsList = document.createElement('ul');

    const engine = document.createElement('li');
    engine.innerHTML = "Engine: " + configuration.engine;

    const wheels = document.createElement('li');
    wheels.innerHTML = "Wheels: " + partMapping.base_wheels[configuration.wheels];

    const seats = document.createElement('li');
    seats.innerHTML = "Seats: " + partMapping.base_seats[configuration.seats];

    const navigation = document.createElement('li');
    navigation.innerHTML = "Navigation: " + configuration.navigation;

    partsList.appendChild(engine);
    partsList.appendChild(wheels);
    partsList.appendChild(seats);
    partsList.appendChild(navigation);

    //-----------------------------------------------------

    //Add all the details to the details div
    details.appendChild(basePrice);
    details.appendChild(paintTitle);
    details.appendChild(paintList);
    details.appendChild(interiorTitle);
    details.appendChild(interiorList);
    details.appendChild(partsTitle);
    details.appendChild(partsList);

    //----------------------------------------------------------------------------------------------------------

    // Add the renderer
    const renderer = document.createElement('div');
    renderer.classList.add('saved-configuration-card-renderer');

    // Get the model from the trinCarModels array
    const model = trinCarModels.find((model) => model.variant === configuration.model);

    // Create a renderer using createRenderPanel
    const rendererPanel = createRenderPanel(model, configuration.texture_url);

    // Add the renderer to the renderer div
    renderer.appendChild(rendererPanel);

    //----------------------------------------------------------------------------------------------------------

    // Add the details and the renderer to the central line
    centralLine.appendChild(details);
    centralLine.appendChild(renderer);

    //##########################################################################################################

    // Add the price line
    const priceLine = document.createElement('div');
    priceLine.classList.add('saved-configuration-card-price');

    // Add the price to the price line
    const price = document.createElement('p');
    price.innerHTML = "Price: " + calculatePrice(configuration) + " grons";

    //----------------------------------------------------------------------------------------------------------

    priceLine.appendChild(price);

    //##########################################################################################################

    // Add the button line
    const buttonLine = document.createElement('div');
    buttonLine.classList.add('saved-configuration-card-button-panel');

    // Add the buttons to the button line:
    // 1. Remove button
    const removeButton = document.createElement('button');
    removeButton.classList.add('saved-configuration-card-button');
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener('click', () => {
        // Remove the configuration from the localStorage
        delete_saved_configuration(configuration);

        // Remove the card from the saved-configurations-container div
        cardDiv.remove();
    });

    // 2. Share button
    const shareButton = document.createElement('button');
    shareButton.classList.add('saved-configuration-card-button');
    shareButton.innerHTML = "Download Skin";
    shareButton.addEventListener('click', () => {

        downloadImage(configuration.texture_url);
        
        shareButton.innerHTML = "Downloaded!";
    });

    // 3. Export button
    const exportButton = document.createElement('button');
    exportButton.classList.add('saved-configuration-card-button');
    exportButton.innerHTML = "Export Configuration";
    // Disable button
    //exportButton.disabled = true;
    exportButton.addEventListener('click', () => {
        downloadConfigurationAsJSON(configuration);

        exportButton.innerHTML = "Exported!";
    });

    // Add the buttons to the button line
    buttonLine.appendChild(removeButton);
    buttonLine.appendChild(shareButton);
    buttonLine.appendChild(exportButton);

    //##########################################################################################################

    // Add all the lines to the card div
    cardDiv.appendChild(topLine);
    cardDiv.appendChild(centralLine);
    cardDiv.appendChild(priceLine);
    cardDiv.appendChild(buttonLine);

    //##########################################################################################################


    // Return the created configuration card div
    return cardDiv;
}

read_configurations();