import { trinCarModels } from './data.js'; // Import the trinCarModels JSON object
import { partMapping } from './data.js'; // Import the partMapping object
import { resetCurrentModel } from './comunicator.js'; // Import the setCurrentModel function

const civilModelContainer = document.querySelector(".civil-model-container");
const txsModelContainer = document.querySelector(".txs-model-container");
const commercialModelContainer = document.querySelector(".commercial-model-container");

const civilModelList = []
const txsModelList = []
const commercialModelList = []

// Recalculate and render the models when the window is resized
window.addEventListener("resize", () => {
  generateCivilVehicleMenu();
});

// Function to create a civil model card
function createCivilModelCard(model) {

  // Add the model card div
  const modelCard = document.createElement("div");
  modelCard.classList.add("civil-model-card");

  // Add the model name
  const modelName = document.createElement("h3");
  modelName.textContent = model.name;
  modelName.classList.add("civil-model-title");

  // Add the model image div
  const modelImageDiv = document.createElement("div");
  modelImageDiv.classList.add("civil-model-card-main-picture");

  // Wrap the model image inside an anchor tag
  const modelImageLink = document.createElement("a");
  modelImageLink.addEventListener("click", () => resetCurrentModel(model));
  modelImageLink.href = `trin_configurator.html?model=${model.variant}`;

  // Create an <img> element for the model image
  const modelImage = document.createElement("img");
  modelImage.src = model.image;
  modelImage.alt = model.name;

  modelImageLink.appendChild(modelImage); // Wrap the image inside the anchor tag

  // Append the model image with the anchor tag to the modelImageDiv
  modelImageDiv.appendChild(modelImageLink);

  // Add the model variant
  const modelDescription = document.createElement("p");
  modelDescription.textContent = model.variant;
  modelDescription.classList.add("civil-model-variant");

  // Add the model base parts list title
  const modelBasePartTitle = document.createElement("h4");
  modelBasePartTitle.textContent = "Base parts:";
  modelBasePartTitle.classList.add("civil-model-base-part-title");

  // Add the model base parts list
  const modelInfo = document.createElement("ul");
  modelInfo.classList.add("civil-model-details");
  modelInfo.innerHTML = `
    <li>Engine: ${model.base_engine}</li>
    <li>Wheels: ${partMapping.base_wheels[model.base_wheels]}</li>
    <li>Seats: ${partMapping.base_seats[model.base_seats]}</li>
  `;

  // Add the model price
  const modelPrice = document.createElement("p");

  // (model price) Create a <span> element to wrap the numerical value
  const priceValueSpan = document.createElement("span");
  priceValueSpan.style.fontWeight = "bold"; // Apply the bold style to the <span> element
  priceValueSpan.textContent = model.base_price;

  // (model price) Add the "grons" text after the <span> element
  const priceText = document.createTextNode(" grons");

  // (model price) Append the <span> element and the text node to the modelPrice <p> element
  modelPrice.appendChild(document.createTextNode("Starting at: "));
  modelPrice.appendChild(priceValueSpan);
  modelPrice.appendChild(priceText);


  // Add the "Configure" button
  const configureButton = document.createElement("button");
  configureButton.textContent = "Configure";
  configureButton.classList.add("civil-model-generate-button"); // Add the civil-model-generate-button class
  configureButton.addEventListener("click", () => {
      // Redirect to the Trin model page when clicked on "Configure" button
      window.location.href = `trin_configurator.html?model=${model.variant}`;
      resetCurrentModel(model);

  });

  modelCard.appendChild(modelName);
  modelCard.appendChild(modelImageDiv);
  modelCard.appendChild(modelDescription);
  modelCard.appendChild(modelBasePartTitle);
  modelCard.appendChild(modelInfo);
  modelCard.appendChild(modelPrice);
  modelCard.appendChild(configureButton);

  return modelCard;
}

// Function to create a TXS model card
function createTXSModelCard(model) {

  // Add the model card div
  const modelCard = document.createElement("div");
  modelCard.classList.add("txs-model-card");

  // Add the model name
  const modelName = document.createElement("h3");
  modelName.textContent = model.name;
  modelName.classList.add("txs-model-title");

  // Add the model image div
  const modelImageDiv = document.createElement("div");
  modelImageDiv.classList.add("txs-model-card-main-picture");

  // Wrap the model image inside an anchor tag
  const modelImageLink = document.createElement("a");
  modelImageLink.href = `trin_configurator.html?model=${model.variant}`;

  // Create an <img> element for the model image
  const modelImage = document.createElement("img");
  modelImage.src = model.image;
  modelImage.alt = model.name;

  modelImageLink.appendChild(modelImage); // Wrap the image inside the anchor tag

  // Append the model image with the anchor tag to the modelImageDiv
  modelImageDiv.appendChild(modelImageLink);

  // Add the model variant
  const modelDescription = document.createElement("p");
  modelDescription.textContent = model.variant;
  modelDescription.classList.add("txs-model-variant");

  // Add the model base parts list title
  const modelBasePartTitle = document.createElement("h4");
  modelBasePartTitle.textContent = "Base parts:";
  modelBasePartTitle.classList.add("txs-model-base-part-title");

  // Add the model base parts list
  const modelInfo = document.createElement("ul");
  modelInfo.classList.add("txs-model-details");
  modelInfo.innerHTML = `
    <li>Engine: ${model.base_engine}</li>
    <li>Wheels: ${partMapping.base_wheels[model.base_wheels]}</li>
    <li>Seats: ${partMapping.base_seats[model.base_seats]}</li>
  `;

  // Add the model price
  const modelPrice = document.createElement("p");

  // (model price) Create a <span> element to wrap the numerical value
  const priceValueSpan = document.createElement("span");
  priceValueSpan.style.fontWeight = "bold"; // Apply the bold style to the <span> element
  priceValueSpan.textContent = model.base_price;

  // (model price) Add the "grons" text after the <span> element
  const priceText = document.createTextNode(" grons");

  // (model price) Append the <span> element and the text node to the modelPrice <p> element
  modelPrice.appendChild(document.createTextNode("Starting at: "));
  modelPrice.appendChild(priceValueSpan);
  modelPrice.appendChild(priceText);


  // Add the "Configure" button
  const configureButton = document.createElement("button");
  configureButton.textContent = "Configure";
  configureButton.classList.add("txs-model-generate-button"); // Add the txs-model-generate-button class
  configureButton.addEventListener("click", () => {
      // Redirect to the Trin model page when clicked on "Configure" button
      window.location.href = `trin_configurator.html?model=${model.variant}`;
  });

  modelCard.appendChild(modelName);
  modelCard.appendChild(modelImageDiv);
  modelCard.appendChild(modelDescription);
  modelCard.appendChild(modelBasePartTitle);
  modelCard.appendChild(modelInfo);
  modelCard.appendChild(modelPrice);
  modelCard.appendChild(configureButton);

  return modelCard;
}

// Function to create a commercial model card
function createCommercialModelCard(model) {

  // Add the model card div
  const modelCard = document.createElement("div");
  modelCard.classList.add("commercial-model-card");

  // Add the model name
  const modelName = document.createElement("h3");
  modelName.textContent = model.name;
  modelName.classList.add("commercial-model-title");

  // Add the model image div
  const modelImageDiv = document.createElement("div");
  modelImageDiv.classList.add("commercial-model-card-main-picture");

  // Wrap the model image inside an anchor tag
  const modelImageLink = document.createElement("a");
  modelImageLink.addEventListener("click", () => resetCurrentModel(model));
  modelImageLink.href = `trin_configurator.html?model=${model.variant}`;

  // Create an <img> element for the model image
  const modelImage = document.createElement("img");
  modelImage.src = model.image;
  modelImage.alt = model.name;

  modelImageLink.appendChild(modelImage); // Wrap the image inside the anchor tag

  // Append the model image with the anchor tag to the modelImageDiv
  modelImageDiv.appendChild(modelImageLink);

  // Add the model variant
  const modelDescription = document.createElement("p");
  modelDescription.textContent = model.variant;
  modelDescription.classList.add("commercial-model-variant");

  // Add the model base parts list title
  const modelBasePartTitle = document.createElement("h4");
  modelBasePartTitle.textContent = "Base parts:";
  modelBasePartTitle.classList.add("commercial-model-base-part-title");

  // Add the model base parts list
  const modelInfo = document.createElement("ul");
  modelInfo.classList.add("commercial-model-details");
  modelInfo.innerHTML = `
    <li>Engine: ${model.base_engine}</li>
    <li>Wheels: ${partMapping.base_wheels[model.base_wheels]}</li>
    <li>Seats: ${partMapping.base_seats[model.base_seats]}</li>
  `;

  // Add the model price
  const modelPrice = document.createElement("p");

  // (model price) Create a <span> element to wrap the numerical value
  const priceValueSpan = document.createElement("span");
  priceValueSpan.style.fontWeight = "bold"; // Apply the bold style to the <span> element
  priceValueSpan.textContent = model.base_price;

  // (model price) Add the "grons" text after the <span> element
  const priceText = document.createTextNode(" grons");

  // (model price) Append the <span> element and the text node to the modelPrice <p> element
  modelPrice.appendChild(document.createTextNode("Starting at: "));
  modelPrice.appendChild(priceValueSpan);
  modelPrice.appendChild(priceText);


  // Add the "Configure" button
  const configureButton = document.createElement("button");
  configureButton.textContent = "Configure";
  configureButton.classList.add("commercial-model-generate-button"); // Add the commercial-model-generate-button class
  configureButton.addEventListener("click", () => {
      // Redirect to the Trin model page when clicked on "Configure" button
      window.location.href = `trin_configurator.html?model=${model.variant}`;
      resetCurrentModel(model);

  });

  modelCard.appendChild(modelName);
  modelCard.appendChild(modelImageDiv);
  modelCard.appendChild(modelDescription);
  modelCard.appendChild(modelBasePartTitle);
  modelCard.appendChild(modelInfo);
  modelCard.appendChild(modelPrice);
  modelCard.appendChild(configureButton);

  return modelCard;
}


// Function to generate the civil vehicle menu
function generateCivilVehicleMenu() {
  civilModelContainer.innerHTML = "";

  for (let i = 0; i < civilModelList.length; i++) {
    const modelCard = createCivilModelCard(civilModelList[i]);
    civilModelContainer.appendChild(modelCard);
  }
}

// Function to generate the TXS vehicle menu
function generateTXSVehicleMenu() {
  txsModelContainer.innerHTML = "";

  for (let i = 0; i < txsModelList.length; i++) {
    const modelCard = createTXSModelCard(txsModelList[i]);
    txsModelContainer.appendChild(modelCard);
  }
}

// Function to generate the commercial vehicle menu
function generateCommercialVehicleMenu() {
  commercialModelContainer.innerHTML = "";

  for (let i = 0; i < commercialModelList.length; i++) {
    const modelCard = createCommercialModelCard(commercialModelList[i]);
    commercialModelContainer.appendChild(modelCard);
  }
}







function initiateMainPage() {
  const modelList = trinCarModels;

  // For each model in the modelList:
  modelList.forEach((model) => {
    // If "Civil" in model.vehicle_category list:
    if (model.vehicle_category.includes("Civil")) {
      // Add the model to the civilModelList
      civilModelList.push(model);
    }
    // If "TXS" in model.vehicle_category list:
    if (model.vehicle_category.includes("TXS")) {
      // Add the model to the txsModelList
      txsModelList.push(model);
    }
    // If "Commercial" in model.vehicle_category list:
    if (model.vehicle_category.includes("Commercial")) {
      // Add the model to the commercialModelList
      commercialModelList.push(model);
    }
  });

  // Sort the lists (number)
  /*
  civilModelList.sort((a, b) => a.base_price - b.base_price);
  txsModelList.sort((a, b) => a.base_price - b.base_price);
  commercialModelList.sort((a, b) => a.base_price - b.base_price);
  */

  // Sort the lists (character)
  civilModelList.sort((a, b) => a.variant.localeCompare(b.variant));
  txsModelList.sort((a, b) => a.variant.localeCompare(b.variant));
  commercialModelList.sort((a, b) => a.variant.localeCompare(b.variant));

  // Generate the vehicle menus:
  generateCivilVehicleMenu();
  generateTXSVehicleMenu();
  generateCommercialVehicleMenu();
}

// Initial rendering
initiateMainPage();