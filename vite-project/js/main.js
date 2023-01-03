import "../styles/style.css" ;
import { League } from "./array.js";
import { filteradc, filterjungle, filtermid, filtersupport, filtertop } from "../js/filter";
console.log(League);
const DOMselectors={
   clear: `<div class="child" id= "child"></div>`,
Menu:document.getElementById("List"),
Mid:document.getElementById("Mid"),
Top:document.getElementById("Top"),
Jungle:document.getElementById("Jungle"),
Adc:document.getElementById("Adc"),
Support:document.getElementById("Support"),
Card:document.getElementById("display-card"),
Parent:document.getElementById("Parent"),
}

function makecard(x){
    
        x.forEach((work) => {
            DOMselectors.Menu.insertAdjacentHTML("afterend",
            
           ` <div class="display-card">
            <img class="display-img" src= ${work.img}/>
            <h2 class="display-champion" id= "display-champion">${work.champion}</h2>
            <h3 class="display-role" id="display-role">${work.role}</h3>
            <h3 class="display-price" id="display-price">${work.price}</h3>
            </div>
            </div>`)
             })
}

/* DOMselectors.Menu.addEventListener("click", function create() {
    League.forEach((work) => {
        DOMselectors.Menu.insertAdjacentHTML("afterend",
        
       ` <div class="display-card">
        <img class="display-img" src= ${work.img}/>
        <h2 class="display-champion" id= "display-champion">${work.champion}</h2>
        <h3 class="display-role" id="display-role">${work.role}</h3>
        <h3 class="display-price" id="display-price">${work.price}</h3>
        </div>
        </div>`)
         })
})
 */
DOMselectors.Menu.addEventListener("click", function create() {
    makecard(League)
})

function remove(){
DOMselectors.Menu.innerHTML = DOMselectors.clear;
}


DOMselectors.Mid.addEventListener("click", function Mid(event){
    remove();
    makecard(filtermid)
    event.preventDefault
})
DOMselectors.Top.addEventListener("click", function Top(event){
    remove();
    makecard(filtertop)
    event.preventDefault
})
DOMselectors.Jungle.addEventListener("click", function Jungle(event){
    remove();
    makecard(filterjungle)
    event.preventDefault
})
DOMselectors.Adc.addEventListener("click", function Adc(event){
    remove();
    makecard(filteradc)
    event.preventDefault
})
DOMselectors.Support.addEventListener("click", function Support(event){
    remove();
    makecard(filtersupport)
    event.preventDefault
})

document.querySelector(".btn").addEventListener("click", function theme(){
        if  (document.body.classList.contains("warm"));{
    document.body.classList.add("cool");
    document.body.classList.remove("warm");}
    else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
  }
})