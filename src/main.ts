import { validateItem } from "./validation";
import ShoppingList from "./ShoppingList";

const nameInput : HTMLInputElement|null = document.querySelector("#nameInput");
const quantityInput : HTMLInputElement|null = document.querySelector("#quantityInput");
const addButton: HTMLButtonElement|null = document.querySelector("#addButton");
const errorMessage: HTMLDivElement|null = document.querySelector("$errorMessage");
const filterSelect:HTMLSelectElement|null = document.querySelector("#filterSelect");
const optionAll:HTMLOptionElement|null=document.querySelector("#all");
const optionBought:HTMLOptionElement|null=document.querySelector("#bought");
const optionToBuy:HTMLOptionElement|null=document.querySelector("#toBuy");
const listContainer: HTMLDivElement=document.querySelector("#listContainer")!;
let arrayOfProducts: ShoppingList[] = [];

let id:number = 1;

if(nameInput && quantityInput && addButton){
    addButton.addEventListener('click',(e)=>{
        arrayOfProducts.push(new ShoppingList())
    })


    function buildList(){
        listContainer.innerHTML="";
        arrayOfProducts.forEach(element=>{
            listContainer.innerHTML += element
        })
    }
}
