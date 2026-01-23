// -------------------------------
// --- Configuración del juego ---
// -------------------------------

const PALABRAS = ["ALGORITMO", "JAVASCRIPT", "NAVEGADOR", "FORMULARIO", "VARIABLE", "DOMINIO", "BOLETIN", "EXAMEN", "INFORMATICA", "SERVIDOR", "CLIENTE"];

// 27 letras (incluye Ñ)
// Se usa para construir el teclado 
const LETRAS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Expresión equivalente: const LETRAS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

const MAX_ERRORES = 6;

// --------------------------
// --- Referencias al DOM ---
// --------------------------

const elPalabra = document.getElementById("palabra");
const elEstado = document.getElementById("estado");
const elErrores = document.getElementById("errores");
const elMaxErrores = document.getElementById("maxErrores");
const elMuñeco = document.getElementById("muñeco");
const elTeclado = document.getElementById("teclado");
const btnNueva = document.getElementById("btnNueva");
const btnRevelar = document.getElementById("btnRevelar");

elMaxErrores.textContent = MAX_ERRORES;

// ------------------------
// --- Estado del juego ---
// ------------------------

let palabraSecreta = "";
let letrasAcertadas = []; // array de letras acertadas
let letrasUsadas = [];    // array de letras ya pulsadas
let errores = 0;
let juegoTerminado = false;

// ---------------
// --- Eventos ---
// ---------------

// Inicia una nueva partida cuando el usuario pulsa el botón.
btnNueva.addEventListener("click", nuevaPartida);

// Revela la palabra secreta y finaliza la partida al pulsar el botón.
btnRevelar.addEventListener("click", revelarPalabra);

// Gestiona los clics sobre el teclado del juego
elTeclado.addEventListener("click", pulsarLetraTeclado);

// -----------------------------------
// --- Inicialización del programa ---
// -----------------------------------

crearTeclado();
nuevaPartida();

// -------------------------------
// --- Funciones (a completar) ---
// -------------------------------

// Crea dinámicamente el teclado del juego.
// Genera un botón por cada letra del abecedario y lo añade al contenedor.
function crearTeclado() {
    elTeclado.innerHTML = "";
    for (const letra of LETRAS) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = letra;
        elTeclado.appendChild(btn);
    }
}

// Inicia una nueva partida.
// Selecciona una palabra aleatoria, reinicia errores, estados y reactiva el teclado.
function nuevaPartida() {
    // - Elegir una palabra de forma aleatoria
    palabraSecreta = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
    console.log(palabraSecreta);
    // - Reiniciar arrays letrasAcertadas y letrasUsadas
    letrasAcertadas = [];
    letrasUsadas = [];
    // - Reiniciar el número de errores y marcar el juego como no terminado
    errores = 0;
    terminado = true;
    // - Actualizar el contador de errores (0) y mensaje inicial
    elErrores.textContent = "0";
    elEstado.textContent = "¡Suerte!";
    // - Cambiar la imagen del muñeco a la inicial (img0.jpg)
    elMuñeco.src = "img/img0.jpg";
    // - Reactivar todos los botones del teclado
    const botones = elTeclado.querySelectorAll("button");
    botones.forEach(boton => {
        boton.classList.remove("error", "acierto");
        boton.disabled = false;
    });
    // - Mostrar la palabra oculta llamando a pintarPalabra()
    pintarPalabra();
}

// Revela la palabra secreta y finaliza la partida
function revelarPalabra() {
    // - Marcar el juego como terminado
    terminado = true;
    // - Mostrar la palabra completa en pantalla
    elPalabra.textContent = palabraSecreta.join(" ")
    // - Mostrar un mensaje indicando que la palabra se ha revelado
    elEstado.textContent = "La palabra ha sido revelada, era: " + palabraSecreta;
    // - Desactivar todos los botones del teclado
    const botones = elTeclado.querySelectorAll("button");
    botones.forEach(boton => {
        boton.disabled = true;
    });
}

// Gestiona los clics sobre el teclado del juego
// Detecta la letra pulsada y la envía a la función jugarLetra().
function pulsarLetraTeclado(event) {
    // - Obtener el elemento sobre el que se ha hecho clic
    const btn = event.target;
    // - Comprobar que se ha pulsado un botón (es decir, que event.target sea un botón y tagName === "BUTTON") y que no esté desactivado. 
    if (btn.tagName == "button" && !btn.disabled) {
        // - Llamar a la función jugarLetra() 
        jugarLetra(btn.textContent, btn);
    }
}

// Gestiona la lógica cuando el usuario pulsa una letra.
// Comprueba si es acierto o error, actualiza el estado del juego y desactiva el botón.
function jugarLetra(letra, btn) {
    // - Comprobar que el juego no haya terminado
    if (!terminado) {
        // - Comprobar si la letra ya ha sido usada
        if (letrasUsadas.includes(Letra)) {
            // - Guardar la letra usada y desactivar el botón
            letrasUsadas.push(Letra);
        }
    }
    // - Comprobar si la letra está en la palabra secreta
    //      - Marcar el botón como acierto y guardar la letra como acertada
    //      - Actualizar el mensaje y la palabra mostrada
    //      - Comprobar si el jugador ha ganado la partida
    // - Si la letra no está en la palabra
    //      - Marcar el botón como error
    //      - Actualizar el contador de errores, la imagen del muñeco y el mensaje de error
    //      - Comprobar si se ha alcanzado el máximo de errores 

}

// Muestra la palabra a adivinar en pantalla.
// Sustituye las letras no acertadas por guiones bajos (_).
function pintarPalabra() {
    // Recorrer la palabra secreta letra a letra
    // Mostrar la letra si ha sido acertada o un guión bajo (_) si no lo ha sido
}

// Comprueba si el jugador ha acertado todas las letras de la palabra.
// Devuelve true si ha ganado la partida.
function haGanado() {
    // Recorrer la palabra secreta
    // Devolver true si todas las letras están acertadas
    // Devolver false en otro caso
}

// Finaliza la partida.
// Desactiva el teclado y muestra el mensaje final según si se ha ganado o perdido.
function finalizar(ganado) {
    // Marcar el juego como terminado
    // Desactivar todos los botones del teclado
    // Mostrar un mensaje final en función a si ha ganado o no
}
