function update_details(){
    const card_name = document.querySelector("#watch1 .watch-name span");
    card_name.textContent = "Casiio";
 
    const watch_model = document.querySelector("#watch1 .watch-model");
    watch_model.textContent = "Watch Model: C8";
 
    const price = document.querySelector("#watch1 .watch-price");
    price.textContent = "Price: 9000";
 }
//  function add_watch() {
//     const watch_list = document.getElementById("watch_list");

//     const card = document.createElement("div");
//     card.classList.add("watch");

//     const image_d = document.createElement("img");
//     image_d.src = "casio.jpeg";
//     image_d.alt = "Watch Image";
//     image_d.width = 100;
//     image_d.height = 100;

//     const name = document.createElement("p");
//     name.classList.add("watch-name");
//     name.innerHTML = "Model Name: Seiko S";

//     const model = document.createElement("p");
//     model.classList.add("watch-model");
//     model.innerHTML = "Model: C5";

//     const price = document.createElement("p");
//     price.classList.add("watch-price");
//     price.innerHTML = "Price: 1100";

//     // Add all child items to parent element
//     card.appendChild(image_d);
//     card.appendChild(name);
//     card.appendChild(model);
//     card.appendChild(price);

//     // Append the new watch card to the watch list
//     watch_list.appendChild(card);
// }

function add_watch2(name_n ,model_name ,pricee) {
    // Get the watch list container
    const watch_list = document.getElementById("watch_list");

    // Create a new card for the watch
    const card = document.createElement("div");
    card.classList.add("watch");

    // Create the image element for the watch
    const image_d = document.createElement("img");
    image_d.src = "watch5image.jpeg";
    image_d.alt = "Watch Image";
    image_d.width = 100;  // Set width for consistency
    image_d.height = 100; // Set height for consistency

    // Create the name element
    const name = document.createElement("p");
    name.classList.add("watch-name");
    name.innerHTML = "Model Name: " +name_n;

    // Create the model element
    const model = document.createElement("p");
    model.classList.add("watch-model");
    model.innerHTML = "Model: " +model_name;

    // Create the price element
    const price = document.createElement("p");
    price.classList.add("watch-price");
    price.innerHTML = "Price: " +pricee;

    // Append all child items to the card
    card.appendChild(image_d);
    card.appendChild(name);
    card.appendChild(model);
    card.appendChild(price);

    // Append the new card to the watch list
    watch_list.appendChild(card);
}

// Add a few sample watches
add_watch2("Fossil", "C5", "1100");

