// ----- VARIABLES GLOBALES -----

//array con los numero que aun no han salido (el bombo)

let bombo=[];

//Ultimo numero generado (null al inicio);
let ultimoNumero=null;

//-------Objetos del DOM-----

const ultimaBola= document.getElementById("ultimaBola");
const mensaje=document.getElementById("mensaje");


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
    for (let fila = 0; fila < 9; fila++) {

        // Creamos un <div> para la fila y le ponemos la clase "fila"
        let divFila = document.createElement("div");
        divFila.className = "fila";
  
        for (let i = 0; i < 10; i++) {

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

function nuevoBingo(){

    bombo=[]; //vaciamos el bombo
    ultimoNumero=null;

    //Rellenamos el bombo con los numeros del 1 al 90
    for(let i=1; i<=90; i++){
        bombo.push(i);
    }

    //Dibujamos el tablero con los 90 numeros
    dibujarTablero();

    const todos=document.getElementsByClassName("numero");
    for(let i=0; i<=todos.length; i++){
        todos[i].classList.remove("ultimo");
        todos[i].classList.remove("anteriores");
    }

    //Actualizamos la interfaz de texto
    ultimaBola.textContent="-";
    mensaje.textContent='Pulsa "Generar numero" para sacar una bola';

}

// Función que genera un nuevo número aleatorio que no haya salido aún (onclick del botón 'Generar número')
function generarNumero() {

    if(bombo.length===0){
        const jugarOtraVez=confirm("Ya han salido todos los numeros (1 al 90). \n¿Quieres jugar otra vez?");

        if(jugarOtraVez){
            nuevoBingo();
        }else{
            mensaje.textContent="Juego Finalizado. Ya han salido todos los numeros";
        }

    }else{
        //aqui ya sabemos que bombo.length es mayor que 0

        const indice=Math.floor(Math.random()*bombo.length);
        const numero=bombo[indice];

        //Eliminamos el numero del bombo para que no pueda rapetirse
        bombo.splice(indice, 1);

        //Actualizamos los estilos
        //a) El anterior ultimo numero se vuelve gris

        if(ultimoNumero!==null){
            let anterior=document.getElementById("num-"+ultimoNumero);
            anterior.classList.remove("ultimo");
            anterior.classList.add("anteriores");
        }

        //b)el nuevo numero se vuelve verde
        document.getElementById("num-"+ numero).classList.add("ultimo");

        //actualizamos el ultimo numero
        ultimoNumero=numero;
        ultimaBola.textContent=numero;

        //mesaje informativo
        mensaje.textContent="Han salido "+ (90-bombo.length)+ " numeros";
    }

}

// Llamamos a la función dibujarTablero() una vez para que el tablero aparezca en la página cuando el usuario la carga por primera vez
dibujarTablero();
