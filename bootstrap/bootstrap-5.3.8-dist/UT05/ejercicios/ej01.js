const btnClick = document.getElementById('btnClick');
const txtClics = document.getElementById('txtClics');
const zonaRaton = document.getElementById('zonaRaton');
const txtEntrada = document.getElementById('txtEntrada');
const txtTecla = document.getElementById("txtTecla");
const btnReset = document.getElementById('btnReset');

// estados

let contador = 0;

// eventos clics

btnClick.addEventListener("click", function () {
    contador++;
    txtClics.textContent = "Clics: " + contador;
});

// evento raton

// funcion reutilizable para eventos del raton

function gestionarRaton(event) {
    if (event.type === "mouseover") {
        zonaRaton.textContent = "Raton dentro";

    } else if (event.type === "mouseout") {
        zonaRaton.textContent = "Raton fuera";
    }
}

    // asignacion de eventos del raton

    zonaRaton.addEventListener("mouseover", gestionarRaton);
    zonaRaton.addEventListener("mouseout", gestionarRaton);

    // evento teclado
    txtEntrada.addEventListener("keydown", function (event) {
        txtTecla.textContent = "Ultima tecla: " + event.key;
    });

    // reiniciar

    btnReset.addEventListener("click", function () {
        contador = 0;
        txtClics.textContent = "Clics 0";
        zonaRaton.textContent = "Raton Fuera";

        txtEntrada.value = "";
        txtTecla.textContent = "Ultima tecla: (ninguna)";

    });
