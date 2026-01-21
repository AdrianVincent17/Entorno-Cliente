// =========================
// SIETE Y MEDIA - script.js 
// =========================

// --- Elementos de la interfaz (DOM) ---
const puntosE = document.querySelector("#puntos");
const imgCartaE = document.querySelector("#imgCarta");
const mensajeE = document.querySelector("#mensaje");
const historialE = document.querySelector("#historial");

const btnPedir = document.querySelector("#btnPedir");
const btnPlantarse = document.querySelector("#btnPlantarse");
const btnNueva = document.querySelector("#btnNueva");

// --- Variables de estado del juego (lo que “va cambiando”) ---
let baraja = [];        // cartas disponibles
let puntos = 0;         // puntos acumulados
let historial = "";     // texto concatenado con las cartas
let terminado = false;  // para bloquear el juego cuando acaba

// --- Funciones ---

/**
 *  Función para crear la baraja (40 cartas) con nombre, valor e imagen
 */
function crearBaraja() {
    // Palos de la baraja española
    const palos = ["oros", "copas", "espadas", "bastos"];

    // Números de las cartas (del 1 al 10, donde 8 = sota, 9 = caballo, 10 = rey)
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const baraja = [];

    // Recorremos cada palo
    for (const palo of palos) {
        // Recorremos cada número dentro del palo
        for (const numero of numeros) {
            let nombre;
            let valor;

            // Determinamos el nombre y el valor de la carta
            if (numero === 1) {
                nombre = `As de ${palo}`;
                valor = numero;
            } else if (numero <= 7) {
                nombre = `${numero} de ${palo}`;
                valor = numero;
            } else if (numero === 8) {
                nombre = `Sota de ${palo}`;
                valor = 0.5;
            } else if (numero === 9) {
                nombre = `Caballo de ${palo}`;
                valor = 0.5;
            } else {
                nombre = `Rey de ${palo}`;
                valor = 0.5;
            }

            // Construimos directamente el nombre del archivo de imagen (ejemplo: img/oros8.png)
            const img = `img/${palo}${numero}.png`;

            // Añadimos la carta a la baraja
            baraja.push({ nombre: nombre, valor: valor, img: img });
        }
    }
    return baraja;
}

/**
 *  Función para empezar/reiniciar la partida
 */
function nuevaPartida() {
        btnPedir.disabled=false;
        btnPlantarse.disabled=true;
        puntos=0;
        historial="Todavia no has pedido ninguna carta.";

}

/**
 * Función pedirCarta. Al pulsar “Pedir carta”:
 *   - Sacamos una carta aleatoria de la baraja
 *   - Sumamos puntos
 *   - Actualizamos imagen, marcador, mensaje e historial
 */
function pedirCarta() {
    let 
}

/**
 * Función plantarse. 
 * Al pulsar “Plantarse”: se termina la partida con la puntuación actual
 */
function plantarse() {

}

// --- Eventos (conectamos botones con funciones) ---
btnPedir.addEventListener("click", pedirCarta);
btnPlantarse.addEventListener("click", plantarse);
btnNueva.addEventListener("click", nuevaPartida);

// --- Arranque inicial del juego ---
nuevaPartida();
