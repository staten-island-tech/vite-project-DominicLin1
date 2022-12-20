import "../styles/style.css" ;
import { League } from "./array.js";
console.log(League);

const DOMselectors=
{
    Menu:document.getElementById("List")
}
function insert(){
let champion=League.champion.value
let price=League.price.value
let role=League.role.value
let permaban=League.permaban.value
let toxic=League.toxic.value
create()
}

/* DOMselectors.Menu.addEventListener("click",
function create(){
const card = {
    champion:League.champion,
    price:League.price,
    role:League.role,
    permaban:League.permaban,
    toxic:League.toxic,
    img:League.img
}
DOMselectors.Menu.insertAdjacentHTML(
    "afterend",

   `<div class="display-card">
        <img class="display-img" src=${card.img}/>
        <h2 class="display-champion" id= "display-champion">${card.champion}</h2>
        <h3 class="display-role" id="display-role">${card.role}</h3>
        <h3 class="display-price" id="display-price">${card.price}</h3>
         
    </div>`)
    console.log(card);
})
 */

let hi = document.getElementById("hi")
DOMselectors.Menu.addEventListener("click", function (
    League.forEach((champion) => {
        DOMselectors.hi.insertAdjacentHTML("afterend", 
        `<div class="display-card">
        <img class="display-img" src=${League.img}/>
        <h2 class="display-champion" id= "display-champion">${League.champion}</h2>
        <h3 class="display-role" id="display-role">${League.role}</h3>
        <h3 class="display-price" id="display-price">${League.price}</h3>
         
    </div>`);
    })));