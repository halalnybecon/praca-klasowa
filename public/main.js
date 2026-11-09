import ShoppingList from "./ShoppingList";
const nameInput = document.querySelector("#nameInput");
const quantityInput = document.querySelector("#quantityInput");
const addButton = document.querySelector("#addButton");
const errorMessage = document.querySelector("$errorMessage");
const filterSelect = document.querySelector("#filterSelect");
const optionAll = document.querySelector("#all");
const optionBought = document.querySelector("#bought");
const optionToBuy = document.querySelector("#toBuy");
const listContainer = document.querySelector("#listContainer");
let arrayOfProducts = [];
let id = 1;
if (nameInput && quantityInput && addButton) {
    addButton.addEventListener('click', (e) => {
        arrayOfProducts.push(new ShoppingList());
    });
    function buildList() {
        listContainer.innerHTML = "";
        arrayOfProducts.forEach(element => {
            listContainer.innerHTML += element;
        });
    }
}
