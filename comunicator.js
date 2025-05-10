import { factoryWoods, get_texture, get_interior_texture_type, get_body_texture_type, trinCarModels, get_full_interior_textile } from './data.js';

/*
######################################################################
This script allows comunication between the different scripts
######################################################################
*/

export var pricing = {
    "base": 0,
    "paint": [0],
    "interior": 0,
    "wheels": 0,
    "engine": 0,
    "navigation": 0
};

export function updatePricing(key, value, index = 0) {
    if (key == "paint") {
        pricing[key][index] = value;
    } else
    pricing[key] = value;
} 

export function calculateCurrentPrice() {
    let price = 0;
    price += pricing.base;
    price += pricing.interior;
    for (let i = 0; i < pricing.paint.length; i++) {
        price += pricing.paint[i];
    }
    price += pricing.wheels;
    price += pricing.engine;
    price += pricing.navigation;
    return price;
}

export function calculatePrice(configuration) {
    let price = 0;
    
    price += configuration.base_price;

    for (let i = 0; i < configuration.paint_price.length; i++) {
        price += configuration.paint_price[i];
    }

    if (configuration.has_interior_accent && configuration.interior_accent != null) {
        let interior_accent_texture_type = get_interior_texture_type(configuration.interior_accent);
        console.log(interior_accent_texture_type);
        if (interior_accent_texture_type == "Wood") {
            price += get_texture(configuration.interior_accent, interior_accent_texture_type).interior_price
        } else {
            price += get_texture(configuration.interior_accent, interior_accent_texture_type).interior_price
        }
    }

    let interior_textile = get_full_interior_textile(configuration.interior);
    price += interior_textile.price;

    // If polychrome add 1000
    if (configuration.paint_price.length > 1) {
        price += 1000;
    }


    return price;
}


// Create the global object that will contain the current configuration
export const current_configured_model = {
    model: null,
    base_price: null,
    paint_layers: ["Glacier White"],
    paint_price: [0],
    interior: "Gray",
    has_interior_accent: false,
    interior_accent: null,
    wheels: null,
    engine: null,
    seats: null,
    navigation: null,
    texture_url: null
};

export function resetCurrentModel(model) {
    // Update the current model in the local storage
    current_configured_model.model = model.variant;
    current_configured_model.base_price = model.base_price;
    current_configured_model.paint_layers = ["Glacier White"];
    current_configured_model.paint_price = [0];
    current_configured_model.interior = "Gray";
    current_configured_model.interior_accent = null;
    current_configured_model.wheels = model.base_wheels;
    current_configured_model.engine = model.base_engine;
    current_configured_model.seats = model.base_seats;
    current_configured_model.navigation = null;

    // Navigate through the paint layers (model.paint_layers)
    console.log(model.paint_layers);
    for (let i = 0; i < model.paint_layers.length; i++) {
        if (model.paint_layers[i].type == "Base") {
            // If the paint layer is default, add it to the current configuration
            current_configured_model.texture_url = model.paint_layers[i].URL;
        }
    }

    // Navigate through the interior layers (model.interior_layers)
    for (let i = 0; i < model.interior_layers.length; i++) {
        if (model.interior_layers[i].type == "Accent") {
            current_configured_model.has_interior_accent = true;
            current_configured_model.interior_accent = factoryWoods[0].name
        } else {
            current_configured_model.has_interior_accent = false;
            current_configured_model.interior_accent = null;
        }
    }


    // Return a resolved promise to indicate that the update is complete
    return Promise.resolve();
}

// Function to save the current configuration in localStorage
export async function save_new_configuration(config_to_save = current_configured_model) {

    // Retrieving the list of saved configurations from localStorage
    const storedData = localStorage.getItem('saved_configurations');
    let saved_configurations = JSON.parse(storedData) || [];

    // Create a copy of config_to_save
    let current_configured_model_copy = Object.assign({}, config_to_save);

    // Add the current model to the list of saved configurations
    saved_configurations.push(current_configured_model_copy);

    // Save the updated list of saved configurations in localStorage
    localStorage.setItem('saved_configurations', JSON.stringify(saved_configurations));

    // Log the list of saved configurations in console
    log_saved_configurations();
}

// Function to log in console the list of saved configurations
export function log_saved_configurations() {
    // Retrieving the list of saved configurations from localStorage
    const storedData = localStorage.getItem('saved_configurations');
    let saved_configurations = JSON.parse(storedData) || [];

    // Log the list of saved configurations in console
    console.log("List of saved configurations:");
    console.log(saved_configurations);
}

// Function to return the list of saved configurations
export function get_saved_configurations() {
    // Retrieving the list of saved configurations from localStorage
    const storedData = localStorage.getItem('saved_configurations');
    let saved_configurations = JSON.parse(storedData) || [];

    return saved_configurations;
}

// Function to delete a saved configuration
export function delete_saved_configuration(configuration) {
    // Retrieving the list of saved configurations from localStorage
    const storedData = localStorage.getItem('saved_configurations');
    let saved_configurations = JSON.parse(storedData) || [];

    let new_saved_configurations = [];

    // Navigate through the list of saved configurations
    for (let i = 0; i < saved_configurations.length; i++) {
        if (saved_configurations[i].texture_url != configuration.texture_url) {
            // If the configuration is not the one to delete, add it to the new list of saved configurations
            new_saved_configurations.push(saved_configurations[i]);
        }
    }

    // Save the updated list of saved configurations in localStorage
    localStorage.setItem('saved_configurations', JSON.stringify(new_saved_configurations));
}

// Function to get the full model object from the model name
export function get_current_full_model() {

    const TrinModel = trinCarModels.find((TrinModel) => TrinModel.variant == current_configured_model.model);

    return TrinModel;
}
