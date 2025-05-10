// Function to generate the website's header
function generate_header() {
    var header = document.getElementById("header"); 
    
    // Create an "a" element for the logo
    var logo = document.createElement("a");
    // Add href to https://trin.legends-of-gramdatis.com
    logo.setAttribute("href", "https://trin.legends-of-gramdatis.com");

    //Add both images
    var logo_img = document.createElement("img");
    logo_img.setAttribute("class", "logo");
    logo_img.setAttribute("src", "https://trin.legends-of-gramdatis.com/img/trin_logo.png");
    logo_img.setAttribute("alt", "Trin Logo");
    var logo_img2 = document.createElement("img");
    logo_img2.setAttribute("class", "header-image");
    logo_img2.setAttribute("src", "https://trin.legends-of-gramdatis.com/img/fancy_trin_text.png");
    logo_img2.setAttribute("alt", "Trin Fancy Text");

    // Add both images to the "a" element
    logo.appendChild(logo_img);
    logo.appendChild(logo_img2);

    // Create a nev div
    var my_configurations = document.createElement("div");
    my_configurations.setAttribute("class", "my-configurations");

    // Create a "a" element for the "My Configurations" button
    var my_configurations_button = document.createElement("a");
    my_configurations_button.setAttribute("href", "https://trin.legends-of-gramdatis.com/trin_user_configurations.html");
    my_configurations_button.setAttribute("class", "my-configurations-link");
    my_configurations_button.innerHTML = "My Configurations";

    // Add the "a" element to the div
    my_configurations.appendChild(my_configurations_button);

    // Add the elements to the header
    header.appendChild(logo);
    header.appendChild(my_configurations);

}