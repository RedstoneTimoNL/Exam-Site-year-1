// get the items
let Button = document.getElementById("button")
let FoodImput = document.getElementById("food-input")
let AdressImput = document.getElementById("adress-input")

// check if the items actually exist so we dont get errors
if (button, AdressImput, FoodImput) {
    // connect to the button with a event listener
    button.addEventListener("click", function() {
        // get the adress text and the food text
        const AdressText = AdressImput.value
        const FoodText = FoodImput.value
         // alert!
        alert("Uw adres is " + AdressText + " en u bent op zoek naar " + FoodText);
    });
}