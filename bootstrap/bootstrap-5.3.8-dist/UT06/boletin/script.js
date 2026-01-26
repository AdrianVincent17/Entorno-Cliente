// =================================
// BOLETÍN 1: Piedra, papel o tijera
// =================================

/*============================================================
  ELEMENTOS DEL DOM (IDs que existen en el HTML)
  ------------------------------------------------------------
  PANEL 1: ELECCIÓN DEL USUARIO
  - Botón Piedra:     id="btnPiedra"
  - Botón Papel:      id="btnPapel"
  - Botón Tijera:     id="btnTijera"
  - Botón volver:     id="btnJugar"  (empieza deshabilitado)
  
  PANEL 2: RESULTADO
  - Imagen usuario:   id="imgUsuario" (class="jugada-img")
  - Imagen CPU:       id="imgCPU"     (class="jugada-img")
  - Mensaje resultado:id="msgResultado" (class="msg")

  PANEL 3: MARCADOR
  - Victorias usuario: id="winsUsuario"
  - Victorias CPU:     id="winsCPU"
  - Empates:           id="winsEmpates"
============================================================ */


const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const btnJugar = document.getElementById("btnJugar");

const imgUsuario = document.getElementById("imgUsuario");
const imgCPU = document.getElementById("imgCPU");
const msgResultado = document.getElementById("msgResultado");

const winsUsuario = document.getElementById("winsUsuario");
const winsCPU = document.getElementById("winsCPU");
const winsEmpates = document.getElementById("winsEmpates");

// Variables para llevar el marcador
let contadorUsuario = 0;
let contadorCPU = 0;
let contadorEmpates = 0;
let eleccionUsuario = "";
let eleccionCPU = "";
const opciones = ["piedra", "papel", "tijera"];

function generareleccionCPU() {
  const elecCPU = opciones[Math.floor(Math.random() * opciones.length)];
  return elecCPU;
}

eleccionCPU = generareleccionCPU();
console.log("Elección CPU (inicial): " + eleccionCPU);


// Evento para los botones de elección del usuario
btnPiedra.addEventListener("click", function(){ 
  piedra(); 
});
btnPapel.addEventListener("click", function(){
  papel(); 
});
btnTijera.addEventListener("click", function(){
  tijera(); 
});

// Evento para el botón de volver a jugar
btnJugar.addEventListener("click", volverJugar);

function piedra() {
  imgUsuario.src = "img/piedra.png";
  eleccionUsuario = "piedra";
  turnoCPU();
  desactivarBotones();
  determinarGanador();
}

function papel() {
  imgUsuario.src = "img/papel.png";
  eleccionUsuario = "papel";
  turnoCPU();
  desactivarBotones();
  determinarGanador();
}

function tijera() {
  imgUsuario.src = "img/tijera.png";
  eleccionUsuario = "tijera";
  turnoCPU();
  desactivarBotones();
  determinarGanador();


}
function desactivarBotones() {
  btnPiedra.disabled = true;
  btnPapel.disabled = true;
  btnTijera.disabled = true;
  btnJugar.disabled = false;
}

function reactivarBotones() {
  btnPiedra.disabled = false;
  btnPapel.disabled = false;
  btnTijera.disabled = false;
  btnJugar.disabled = true;
}

function volverJugar() {
  eleccionCPU = generareleccionCPU();
  console.log("Elección CPU: " + eleccionCPU);
  reactivarBotones();
  msgResultado.textContent = "Pulsa una opción para jugar";
}

function turnoCPU() { 

  if (eleccionCPU === "piedra") {
    imgCPU.src = "img/piedra.png";
  } else if (eleccionCPU === "papel") {
    imgCPU.src = "img/papel.png";
  } else if (eleccionCPU === "tijera") {
    imgCPU.src = "img/tijera.png";
  }
}

function determinarGanador() {
  
  if (eleccionUsuario === eleccionCPU) {
    msgResultado.textContent = "¡Empate!";
    contadorEmpates++;
    winsEmpates.textContent = contadorEmpates;
  } else if ((eleccionUsuario === "piedra" && eleccionCPU === "tijera") ||
    (eleccionUsuario === "papel" && eleccionCPU === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionCPU === "papel")) {
    msgResultado.textContent = "¡Has ganado!";
    contadorUsuario++;
    winsUsuario.textContent = contadorUsuario;
  } else {
    msgResultado.textContent = "¡Has perdido!";
    contadorCPU++;
    winsCPU.textContent = contadorCPU;
  }
}




