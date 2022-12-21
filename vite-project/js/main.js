import "../styles/style.css" ;
import { League } from "./array.js";
/*import { filter } from "./filter";*/
console.log(League);
const DOMselectors={
Menu:document.getElementById("List")}



function insert(){
let champion=League.champion
let price=League.price
let role=League.role
let permaban=League.permaban
let toxic=League.toxic}
DOMselectors.Menu.addEventListener(
    "click",

function create(){

    const card = {
        champion:League.forEach.champion((League.champion) ),
        price:League.forEach.price((League.price)  ),
        role:League.forEach.role((League.role) ),
        permaban:League.forEach.permaban((League.permaban)  ),
        toxic:League.forEach.toxic((League.toxic) ),
        img:League.forEach.img((League.img) )}

DOMselectors.Menu.insertAdjacentHTML(
    "afterend",

   `<div class="display-card">
        <img class="display-img" src=${card.img}/>
        <h2 class="display-champion" id= "display-champion">${card.champion}</h2>
        <h3 class="display-role" id="display-role">${card.role}</h3>
        <h3 class="display-price" id="display-price">${card.price}</h3>
         
    </div>`)
    console.log(card)})

