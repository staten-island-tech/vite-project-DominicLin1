import "../styles/style.css" ;
import { League } from "./array.js";
/*import { filter } from "./filter";*/
console.log(League);
const DOMselectors={
    Space:document.getElementById("hi"),
Menu:document.getElementById("List")}




    DOMselectors.Menu.addEventListener("click", function () {
    League.forEach((work) => {
        DOMselectors.Menu.insertAdjacentHTML("afterend",
        
        `<div class="display-card">
        <div class="card">
        <img class="display-img" src= ${work.img}/>
        <h2 class="display-champion" id= "display-champion">${work.champion}</h2>
        <h3 class="display-role" id="display-role">${work.role}</h3>
        <h3 class="display-price" id="display-price">${work.price}</h3>
        </div>
        </div>`)
         })
})



