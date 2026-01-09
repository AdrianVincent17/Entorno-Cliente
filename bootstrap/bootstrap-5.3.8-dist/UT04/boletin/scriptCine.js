// ----- CONSTANTES -----
const NUM_FILAS = 6;
const NUM_ASIENTOS = 12;

// ----- VARIABLES GLOBALES -----
let asientosLibres = NUM_FILAS * NUM_ASIENTOS;

// ----- Objetos del DOM -----
const salaDiv = document.getElementById("sala");
const libresDiv = document.getElementById("libres");


// ----- FUNCIONES -----

// Dibuja la matriz de asientos en la página
function dibujarSala() {
    salaDiv.innerHTML = "";

    // Filas
    for (let i = 0; i < NUM_FILAS; i++) {
        const filaDiv = document.createElement("div");
        filaDiv.className = "fila";

        // Número de fila 
        const etiquetaFila = document.createElement("span");
        etiquetaFila.className = "numero-fila";
        etiquetaFila.textContent = (i + 1);
        filaDiv.appendChild(etiquetaFila);

        // Asientos de la fila
        for (let j = 0; j < NUM_ASIENTOS; j++) {
            const asientoSpan = document.createElement("span");
            asientoSpan.className = "asiento libre"; // siempre libre al iniciar

            // Texto: número de asiento (1..NUM_ASIENTOS)
            asientoSpan.textContent = (j + 1);
            // Identificador: "f1a1", "f1a2", etc.
            asientoSpan.id = "f" + (i + 1) + "a" + (j + 1);

            filaDiv.appendChild(asientoSpan);
        }

        salaDiv.appendChild(filaDiv);
    }
}

// Muestra los asientos que quedan libres
function actualizarLibres() {
    libresDiv.textContent = "Asientos libres: " + asientosLibres + " de " + (NUM_FILAS * NUM_ASIENTOS);
}

// INICIAR SALA
function iniciarSala() {

    dibujarSala();          // Se dibujan las filas y asientos
    actualizarLibres();     // Se muestran los asientos que quedan libres
}


const mensaje = document.getElementById("mensaje");

let matriz = [];

for (let i = 0; i < NUM_FILAS; i++) {
    matriz[i] = [];
    for (let j = 0; j < NUM_ASIENTOS; j++) {
        matriz[i][j] = j + 1;
    }
}

// RESERVAR ASIENTO (onclick del botón 'Reservar asiento')
function reservarAsiento() {
    const fila = document.getElementById("fila").value;
    const asiento = document.getElementById("asiento").value;

    let f = parseInt(fila);
    let a = parseInt(asiento);

    if (isNaN(f) || isNaN(a)) {
        mensaje.textContent = "Tienes que introducir fila y asiento";
    } else {
        if (f < 1 || f > 6) {
            mensaje.textContent = "Tienes que introducir una fila correcta";
        } else {
            if (a < 1 || a > 12) {
                mensaje.textContent = "Tienes que introducir un asiento correcto";
            } else {
                if (matriz[f - 1][a - 1] === 0) {
                    mensaje.textContent = "Ese asiento está reservado, elige otro..";
                } else {
                    matriz[f - 1][a - 1] = 0;
                    asientosLibres--;
                    libresDiv.textContent = "Asientos libres: " + asientosLibres + " de " + (NUM_FILAS * NUM_ASIENTOS);
                    mensaje.innerHTML = `Reservado asiento ${a} de la fila ${f}`;
                    document.getElementById("f" + f + "a" + a).classList.add("ocupado");
                }
            }
        }
    }
}

// Llamamos a la función iniciarSala() para que aparezca toda la reprentación gráfica 
// de la página cuando el usuario la carga por primera vez
iniciarSala();