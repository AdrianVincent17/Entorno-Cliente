// capturamos los elementos del DOM

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const errorNombre = document.getElementById("errorNombre");
const chkTerminos = document.getElementById("terminos");
const btnEnviar = document.getElementById("btnEnviar");


// devuelve true si es valido y false si no lo es

function validarNombre() {

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        // marcamos el campo rojo y mostramos el mensaje
        inputNombre.classList.add("campo-error");
        errorNombre.classList.remove("oculto");
        errorNombre.textContent="Introduce tu nombre";
        return false;
    }

    // si esta Bien, quitamos el estilo error y ocultamos el mensaje
    errorNombre.classList.add("oculto");
    inputNombre.classList.remove("campo-error");
    return true;
}

// activacion / desactivacion del boton

/**
 * El boton solo se activa si:
 *  - el nombre es valido
 *  - los terminos estan aceptados
 */

function actualizarBoton(){
    const nombreOk=validarNombre();
    btnEnviar.disabled=!(chkTerminos.checked && nombreOk);
}

// Eventos para validacion en tiempo real
inputNombre.addEventListener("input",actualizarBoton);
chkTerminos.addEventListener("change",actualizarBoton);

// estado inicial al cargar la pagina
actualizarBoton();

// Envio del formulario

formulario.addEventListener("submit",(event)=>{
    event.preventDefault(); //Evita que la pagina se recargue

    // por seguridad, comprobamos antes de enviar
    actualizarBoton();

    // si el boton esta deshabilitado no hacemos nada
    if(!btnEnviar.disabled){
        alert("Incidencia enviada correctamente");

        // Reset del formulario y del estado visual
        formulario.reset();
        inputNombre.classList.remove("campo-error");
        errorNombre.classList.add("oculto");
        btnEnviar.disabled=true;
    }
})
