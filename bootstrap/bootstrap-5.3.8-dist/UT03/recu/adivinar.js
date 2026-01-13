// =====================
// PLANTILLA adivinar.js 
// =====================

// --- Configuración del juego ---
const MIN = 1;
const MAX = 10;
const CLAVE_RECORD_TIEMPO = "record_tiempo";
let segundos = 0;
let intervalo = null;

let partidas = 1;
let numeroadivinar=0;


// --- Elementos del DOM ---
const btnIniciar = document.getElementById("btnIniciar");
const btnIntentar = document.getElementById("btnIntentar");
const mensaje = document.getElementById("mensaje");
const historial = document.getElementById("historial");
const tiempoTxt = document.getElementById("tiempoTxt");
const recordTxt = document.getElementById("recordTxt");

// --- FUNCIONES ---


function aleatorio() {
    return aleatorio = Math.floor(Math.random() * 10 + 1);
}

function aumentacontador() {
    segundos++;
    tiempoTxt.innerHTML = segundos + " s";
}

function iniciarPartida() {
   
    segundos=0;
    mensaje.textContent=`Partida ${partidas} iniciada`;
    partidas++;
    clearInterval(intervalo);
    intervalo = setInterval(aumentacontador, 1000);
}

function detener() {

    clearInterval(intervalo);
    let nuevoelemento = document.createElement("li");
    nuevoelemento.textContent = `Partida: ${partidas} ${segundos} s`;
    historial.appendChild(nuevoelemento);
}

let ale=aleatorio();

function intentar() {

    let entrada = prompt("Elige un numero del 1 - 10");

    if (entrada == 0 || entrada > 10) {
        alert("Error el numero debe estar entre 1 y 10");
    }

    if (entrada === "" || entrada == null) {
        alert("entrada no correcta");
    }

    if (entrada < ale) {
        mensaje.textContent = "El numero secreto es MAYOR que " + entrada;
    } else if (entrada > ale) {
        mensaje.textContent = "El numero secreto es MENOR que " + entrada;
    } else {
        mensaje.innerHTML = `Has acertado! El numero era ${ale}<br>Tiempo: ${segundos}`;
        detener();
    }

}
console.log(aleatorio());


