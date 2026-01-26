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

function jugar(opcion) {
  eleccionUsuario = opcion;
  eleccionCPU = opciones[Math.floor(Math.random() * opciones.length)];

  imgUsuario.src = `img/${eleccionUsuario}.png`;
  imgCPU.src = `img/${eleccionCPU}.png`;

  if (eleccionUsuario === eleccionCPU) {
    msgResultado.textContent = "¡Empate!";
    contadorEmpates++;
    winsEmpates.textContent = contadorEmpates;
  } else if (
    (eleccionUsuario === "piedra" && eleccionCPU === "tijera") ||
    (eleccionUsuario === "papel" && eleccionCPU === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionCPU === "papel")
  ) {
    msgResultado.textContent = "¡Ganaste!";
    contadorUsuario++;
    winsUsuario.textContent = contadorUsuario;
  }
  else {
    msgResultado.textContent = "¡Perdiste!";
    contadorCPU++;
    winsCPU.textContent = contadorCPU;
  }
  desactivarBotones();  
}

function desactivarBotones() {
  btnPiedra.disabled = true;
  btnPapel.disabled = true;
  btnTijera.disabled = true;
  btnJugar.disabled = false;
}

function reiniciarJuego() {
  msgResultado.textContent = "Pulsa un boton para comenzar";
  btnPiedra.disabled = false;
  btnPapel.disabled = false;
  btnTijera.disabled = false;
  btnJugar.disabled = true;
}

btnPiedra.addEventListener("click", () => jugar("piedra"));
btnPapel.addEventListener("click", () => jugar("papel"));
btnTijera.addEventListener("click", () => jugar("tijera"));
btnJugar.addEventListener("click", reiniciarJuego);






