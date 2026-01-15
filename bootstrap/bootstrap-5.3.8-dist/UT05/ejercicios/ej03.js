

const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');
const inputnombre = document.getElementById('nombre');
const inputcurso = document.getElementById('curso');
const chkcondiciones = document.getElementById('aceptar');


function limpiarEstadosVisuales() {

    //mensaje
    mensaje.classList.add("oculto");
    mensaje.classList.remove("error", "correcto");
    mensaje.textContent = "";

    inputnombre.classList.remove('campo-error');
    inputcurso.classList.remove('campo-error');

}

function mostrarerror(texto) {

    mensaje.textContent = texto;
    mensaje.classList.remove('oculto', 'correcto');
    mensaje.classList.add('error');
}

function mostrarcorrecto(texto) {

    mensaje.textContent = texto;
    mensaje.classList.remove('oculto', 'error');
    mensaje.classList.add('correcto');
}



formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarEstadosVisuales();

    const nombre = inputnombre.value.trim();
    const curso = inputcurso.value.trim();
    const acepta = chkcondiciones.checked;


    //nombre
    if (nombre === "" ) {
        inputnombre.classList.add("campo-error");
        mostrarerror("El nombre no puede estar vacio");
    } else if (nombre.length < 3) {
        inputnombre.classList.add("campo-error");
        mostrarerror("El nombre debe tener mas de 3 caracteres");
    }
    
    //curso
    else if (curso === "") {
        inputcurso.classList.add("campo-error");
        mostrarerror("El curso no puede estar vacio");
    }
    else if (!acepta) {
        mostrarerror( "primero debes aceptar las condiciones");
    } else {
        mostrarcorrecto(`inscripcion correcta ${nombre} ( ${curso} )`);
    }



});