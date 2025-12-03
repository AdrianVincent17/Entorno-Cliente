// ----- VARIABLES GLOBALES -----

const filas = 3;
const numeros = 5;
let conta = 1;
let actual = 1;

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


//creamos un array de numeros y lo llenamos de tantos numeros como le indiquemos 
let arrayNums = [];

for (let i = 1; i <= filas * numeros; i++) {
    arrayNums.push(i);
}

console.log(arrayNums);

// Función que genera un nuevo número aleatorio que no haya salido aún (onclick del botón 'Generar número')
function generarNumero() {



    if (arrayNums.length === 0) {
        let aceptar = confirm("El bingo ha terminado desea volver a empezar?");

        if (aceptar) {
            iniciar();
        } else {
            document.getElementById("mensaje").innerHTML = `Juego finalizado`;
        }
    } else {

        let aleatorio = Math.floor(Math.random() * arrayNums.length);

        //esta variable sera la del numero aleatorio (osea el valor);
        actual = arrayNums[aleatorio];

        if (conta == 1) {
            document.getElementById("mensaje").innerHTML = `Ha salido ${conta} numero`;
        } else {
            document.getElementById("mensaje").innerHTML = `Han salido ${conta} numeros`;
        }

        //cambia el fondo a gris
        if (actual !== 0) {
            document.getElementById("num-"+actual).classList.add("anteriores");
        }


        //esta clase sera la del boton con el valor del numero que salga en ese momento 
        //y se le aplicara la clase 
        document.getElementById("num-" + actual).classList.add("ultimo");


        //esta es la parte en la que sale el numero 
        document.getElementById("ultimaBola").innerHTML = arrayNums[aleatorio];

        //esta funcion borra el numero que sale osea la posicion del array con la funcion splice 
        arrayNums.splice(aleatorio, 1);


        console.log(arrayNums);

        //aumentamos el contador y mostramos por pantalla

        conta++;

    }

}

function iniciar() {

    // restablece los parametros como estaban antes 

    document.getElementById("mensaje").innerHTML = `Pulsa "Generar número" para sacar una bola.`;
    document.getElementById("ultimaBola").innerHTML = "-";
    conta = 1;
    actual = 0;


    for (let i = 1; i <= filas * numeros; i++) {
        arrayNums.push(i);
    }


    for (let i = 1; i <= filas * numeros; i++) {

        document.getElementById("num-" + actual).classList.remove("anteriores");
        document.getElementById("num-" + actual).classList.add("numero");
    }

}

// Llamamos a la función dibujarTablero() una vez para que el tablero aparezca en la página cuando el usuario la carga por primera vez
dibujarTablero();
