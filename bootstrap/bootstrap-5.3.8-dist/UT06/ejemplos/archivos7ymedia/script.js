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
let puntosB=0;
let historial = "";     // texto concatenado con las cartas
let historialBanca="";
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

    // Reiniciamos estados
        baraja=crearBaraja();
        terminado=false;
        puntos=0;
        historial="";

        //Reiniciamos interfaz
        puntosE.textContent="0";
        imgCartaE.src="img/cartainicio.png";
        imgCartaE.alt="Carta boca abajo";
        mensajeE.textContent="Pide Carta";
        historialE.textContent="Todavia no has pedido ninguna carta";

        //Botones: al inicio solo tiene sentido pedir
        btnPedir.disabled=false;
        btnPlantarse.disabled=true;


}

function turnoBanca(){
    if(puntos>7.5){
        mensajeE.textContent=`Te has pasado con ${puntos} puntos`;
    }else{
        while(puntosB<6 && baraja.length>0){

             const i=Math.floor(Math.random()*baraja.length);
            //1b
            const eliminadas=baraja.splice(i,1);

            const carta=eliminadas[0];

            imgCartaE.src=carta.img;
            imgCartaE.alt=carta.nombre;

            puntosB=Math.round((puntosB + carta.valor)*2)/2;
            historialBanca=(historialBanca==="") ? carta.nombre :(historialBanca +", "+carta.nombre);

        }

        const textJugador=(historial==="")?"-":historial;
        const textoBanca=(historialBanca==="")? "-" :historialBanca;
        historialE.innerHTML=`<strong>Jugador:</strong>${textJugador}<br><strong>Banca:</strong>${textoBanca}`;

        if(puntosB>7.5){
            mensajeE.textContent=`La banca se ha pasado con ${puntosB}. ¡Ganas tu con ${puntos} puntos`;

        }else if(puntos> puntosB){
            mensajeE.textContent=`Ganas tu: ${puntos} puntos. Banca: ${puntosB}`;

        }else if(puntosB> puntos){
            mensajeE.textContent=`Ganas la banca: ${puntosB} puntos. Tu: ${puntos}`;
            
        }else{
            mensajeE.textContent=`Empate a ${puntos} puntos`;
        }

        terminado=true;
    }
}

/**
 * Función pedirCarta. Al pulsar “Pedir carta”:
 *   - Sacamos una carta aleatoria de la baraja
 *   - Sumamos puntos
 *   - Actualizamos imagen, marcador, mensaje e historial
 */
function pedirCarta() {
    //si el juego no ha terminado
    if(!terminado){
        //si no hay cartas, acabamos(caso raro pero lo contemplamos)
        if(baraja.length===0){
            mensajeE.textContent="No quedan cartas en la baraja";
            btnPedir.disabled=true;
            btnPlantarse.disabled=true;
            terminado=true;

        }else{

            //si quedan cartas
            //1 elegimos una carta aleatoria y la elminamos de la baraja
            //1a generamos un numero aleatorio entre 0 y el ultimo indice de la baraja
            const i=Math.floor(Math.random()*baraja.length);
            //1b
            const eliminadas=baraja.splice(i,1);

            const carta=eliminadas[0];

            imgCartaE.src=carta.img;
            imgCartaE.alt=carta.nombre;

            puntos=Math.round((puntos + carta.valor)*2)/2;

            puntosE.textContent=String(puntos);

            historial=(historial==="")? carta.nombre:(historial+", "+carta.nombre);
            historialE.textContent=historial;

            btnPlantarse.disabled=false;

            if(puntos<7.5){
            mensajeE.textContent="Puedes pedir otra carta o plantarse";

            }else if(puntos===7.5){
                mensajeE.textContent="¡Enhorabuena! Has conseguido 7.5";
                terminado=true;
                btnPedir.disabled=true;
                btnPlantarse.disabled=true;

                turnoBanca();

            }else{
                mensajeE.textContent=`Te has pasado con ${puntos} puntos`;
                terminado=true;
                btnPedir.disabled=true;
                btnPlantarse.disabled=true;

            }

        }
    }
}

/**
 * Función plantarse. 
 * Al pulsar “Plantarse”: se termina la partida con la puntuación actual
 */
function plantarse() {
    if(!terminado){
        mensajeE.textContent=`Te has plantado con ${puntos} puntos, turno de la Banca...`;
        terminado=true;
        btnPedir.disabled=true;
        btnPlantarse.disabled=true;

        setTimeout(turnoBanca,3000);
      
    }
}

// --- Eventos (conectamos botones con funciones) ---
btnPedir.addEventListener("click", pedirCarta);
btnPlantarse.addEventListener("click", plantarse);
btnNueva.addEventListener("click", nuevaPartida);

// --- Arranque inicial del juego ---
nuevaPartida();
