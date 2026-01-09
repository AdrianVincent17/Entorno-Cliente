// ----- VARIABLES GLOBALES -----
let conta=0;


// ----- FUNCIONES -----


/**
 * Función dibujarTablero()
 * Esta función se encarga de crear y mostrar en pantalla los números del 1 al 90, organizados en 9 filas:
 *      Fila 1:  1 al 10
 *      Fila 2:  11 al 20
 *      ...
 *      Fila 9:  81 al 90
 * Cada número se mostrará dentro de un <span> con la clase "numero", y cada fila estará dentro de un <div> con la clase "fila".
*/
function dibujarTablero() {
    // 1. Buscamos en el documento el elemento con id="tablero". Aquí es donde vamos a "pintar" todos los números.
    let tablero = document.getElementById("tablero");

    // 2. Borramos cualquier contenido anterior del tablero, por si esta función se vuelve a llamar más adelante.
    tablero.innerHTML = "";

    // 3. Empezamos por el número 1.
    let numeroActual = 1;
    const filas=9;
    const numeros=10;

    // 4. Queremos crear 9 filas. Cada fila tendrá hasta 10 números.
    for (let fila = 0; fila < filas; fila++) {

        // Creamos un <div> para la fila y le ponemos la clase "fila"
        let divFila = document.createElement("div");
        divFila.className = "fila";

        // Dentro de cada fila, intentamos colocar 10 números
        for (let i = 0; i < numeros; i++) {

            // Creamos un <span> para mostrar el número
            let spanNumero = document.createElement("span");

            // Le asignamos la clase "numero" (el estilo vendrá del CSS)
            spanNumero.className = "numero";

            // Le damos un id único, por ejemplo: "num-1", "num-2", ..., "num-90".
            // Esto será útil más adelante para cambiar el color desde JavaScript.
            spanNumero.id = "num-" + numeroActual;

            // El texto que verá el usuario: el propio número
            spanNumero.textContent = numeroActual;

            // Añadimos el <span> dentro del <div> de la fila
            divFila.appendChild(spanNumero);

            // Pasamos al siguiente número
            numeroActual++;
        }

        // Cuando terminamos de rellenar la fila, la añadimos dentro del <div id="tablero">
        tablero.appendChild(divFila);
    }
}

// Función que genera un nuevo número aleatorio que no haya salido aún (onclick del botón 'Generar número')
function generarNumero() {
    conta++;
    let array=[];
    for(i=0; i<filas*numeros; i++){
        array+=array[i];
    }

    let naleatorio=Math.floor(Math.random()*Array.length+1);

}

 let array=[];
    for(i=0; i<(filas*numeros); i++){
        array+=array[i];
    }

// Llamamos a la función dibujarTablero() una vez para que el tablero aparezca en la página cuando el usuario la carga por primera vez
dibujarTablero();

console.log(array[naleatorio]);
