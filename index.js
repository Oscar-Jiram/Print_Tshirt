window.onload = start;

let reyes = ["atanagildo", "ataulfo",
     "ervigio", "leogivildo", "recesvinto",
      "sisebuto", "teodorico"];
let camisetas = ["camisetaBlanca.png",
     "camisetaNegra.png"];
let camisetaActual = 0;

let reyActual = Math.floor(Math.random()*reyes.length);

let size = 2;

let reyConMayusculas = reyes[reyActual].substr(
    0,1).toUpperCase() + reyes[reyActual].substr(1).toLowerCase();

function start() {
    document.querySelector(".camiseta").insertAdjacentHTML("beforeend", `
        <img id="dibujo" src="./img/${camisetas[camisetaActual]}" alt="Camiseta">`);
    
    document.querySelector(".imagen").innerHTML = `
    <img id="rey" src="img/rey_${reyes[reyActual]}.png" >` 
    
    window.onkeydown = teclado;
    document.querySelector("#dibujo").addEventListener("click", Cambio);
    document.querySelector("#rey").addEventListener("click", reyCambio);
    document.querySelector("#imprimir").addEventListener("click",imprimir)
    actualizarRey();
}
function teclado(e){
    let longitud = document.querySelector(".texto").innerHTML.length;
    let excepciones = ["Delete","Backspace",
        "ArrowUp","ArrowDown","ArrowRight","ArrowLeft",
    "+","-"];
    if (longitud >15 && excepciones.indexOf(e.key)==-1){
        e.preventDefault();
    }
    let codigo = e.key
    if (codigo == "+"){
        if (size < 3){ 
        size += .1
         }
        e.preventDefault();
    }
    document.querySelector(".texto").style.fontSize =size+"em";
    if (codigo == "-"){
        if (size > 1){ 
        size -= .1
         }
        e.preventDefault();
    }
    document.querySelector(".texto").style.fontSize =size-"em";
}

function actualizarRey(){
    let reyConMayusculas = reyes[reyActual].substr(
        0,1).toUpperCase() + reyes[reyActual].substr(1).toLowerCase();
        document.querySelector(".texto").innerHTML=`
        I ♥️ ${reyConMayusculas}`    
}
function Cambio() {
    camisetaActual = Number(!camisetaActual)
    document.querySelector("#dibujo").src = `
    ./img/${camisetas[camisetaActual]}`;
    if (camisetaActual == 0){
        document.querySelector(".texto").style.color="black";
    }else {
        document.querySelector(".texto").style.color="white";
    }
}
function reyCambio(){
    reyActual++;
    if (reyActual >= reyes.length){ 
    reyActual = 0;
    }
    document.querySelector("#rey").src=`
    img/rey_${reyes[reyActual]}.png`;
    actualizarRey();
 }
 function imprimir(){
    window.print();
 }