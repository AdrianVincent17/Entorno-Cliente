

//añadimos las variables

let segundos = 0;
let intervalo;

const contador = document.getElementById('temporizador');
const lista = document.getElementById('lista');

function aumentacontador() {

    segundos = segundos + 0.01;

    contador.innerHTML = segundos.toFixed(2);

    if (segundos >= 3) {
        segundos = 3;
        contador.innerHTML = "3.00";
        detener();
    }
}


function iniciar() {
    
    document.body.style.backgroundColor="white";
    segundos = 0;
    clearInterval(intervalo);
    intervalo = setInterval(aumentacontador, 10);

}

intentos = 1;
function detener() {

    clearInterval(intervalo);

    let nuevoelemento = document.createElement("li");

    if (segundos >= 3) {
        document.body.style.backgroundColor="yellow";
        nuevoelemento.textContent = `Intento: ${intentos} FALLO no paraste a tiempo`;
    } else {
        nuevoelemento.textContent = `Intento: ${intentos} ${segundos.toFixed(2)} segundos`;
    }

     let botonborrar = document.createElement("button");

        botonborrar.textContent = "X";
        botonborrar.className = "boton-borrar";
        botonborrar.onclick = function () {
            lista.removeChild(nuevoelemento);
        }

    if (intervalo != null) {

       intentos++;

        nuevoelemento.appendChild(botonborrar);

        lista.appendChild(nuevoelemento);
    }

    intervalo=null;

    if(intentos>5){
        let retirate= confirm("no crees que ya llevas muchos intentos?");
        if(retirate){
            intentos=0;
            lista.innerHTML="";
        }else{
            alert("juego terminado");
            
        }
    }
}