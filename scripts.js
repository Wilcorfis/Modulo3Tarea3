
const urlapi =
    "https://hp-api.herokuapp.com/api/characters/students/";

const urlImagen = "https://cs.wellesley.edu/~cs110/labs/lab06/archive/lab4solution/images/"

let objImages = {
    Gryffindor: urlImagen + "Gryffindor.png",
    Hufflepuff: urlImagen + "Hufflepuff.png",
    Ravenclaw: urlImagen + "Ravenclaw.png",
    Slytherin: urlImagen + "Slytherin.png"
}
//https://codepen.io/robertmesserle/pen/yNPdwZ
let ventana1 = document.getElementById("ventana1");
let btn = document.getElementById("btn");
btn.onclick = function () {
    btn.textContent="Nuevo Personaje";
    ventana1.style.cssText += "display:block"
    const x = Math.floor(Math.random() * personajes.length);
    let houseimage = document.getElementById("houseimage");
    let character = document.getElementById("character");
    let name = document.getElementById("name");
    let house = document.getElementById("house");

    let home=personajes[x].house;

    if (!home=="") {
    
        houseimage.setAttribute("src", objImages[personajes[x].house]);
        house.textContent = personajes[x].house;
    }
    
    character.setAttribute("src", personajes[x].imagen);
    name.textContent = personajes[x].name;
    



}


