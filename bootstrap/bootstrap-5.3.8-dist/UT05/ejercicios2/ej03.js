// capturamos los elementos del DOM

const formulario=document.getElementById("formulario");
const inputNombre=document.getElementById("nombre");
const selectNacionalidad=document.getElementById("nacionalidad");
const textareaDescripcion=document.getElementById("descripcion");
const contador=document.getElementById("contador");
const chkTerminos=document.getElementById("chkTerminos");
const btnEnviar=document.getElementById("btnEnviar");

// parrafos donde mostraremos mensajes de error

const errorNombre=document.getElementById("errorNombre");
const errorNacionalidad=document.getElementById("errorNacionalidad");
const errorDescripcion=document.getElementById("errorDescripcion");
const errorTerminos=document.getElementById("errorTerminos");

// constante: numero maximo de caracteres en la descripcion
const MAX=100;

// ---------------------------------------------------------
// --- Boton ENVIAR deshabilitado hasta aceptar terminos ---
// ---------------------------------------------------------

function actualizarBoton(){
    btnEnviar.disabled=!chkTerminos.checked;
};

// evento "change": se dispara cuando marcamos/desmarcamos el checkbox

chkTerminos.addEventListener("change",function(){
    actualizarBoton();

    if(chkTerminos.checked){
        ocultarError(chkTerminos, errorTerminos);
    }
});

// estado inicial al cargar la pagina 
actualizarBoton();

// ---------------------------------------------------------------
// --- contador de caracteres en el textarea (0/100 al inicio) ---
// ---------------------------------------------------------------

// Mostramos cuantos caracteres lleva escritos el usuario

function actualizarContador(){
    const texto=textareaDescripcion.value;

    contador.textContent=texto.length +"/"+ MAX;
}

// evento "input": se dispara mientras el usuario escribe o borra

textareaDescripcion.addEventListener("input",function(){
    actualizarContador();

    // validamos en vivo: si escribe algo, ocultamos error
    if(textareaDescripcion.value.trim()!==""){
        ocultarError(textareaDescripcion, errorDescripcion);
    }
});

// contador inicial al cargar la pagina (debe mostrar 0/100)

actualizarContador();

// ------------------------------------------------------------------------
// --- Funciones auxiliares (helpers de UI para mostar/ocultar errores) ---
// ------------------------------------------------------------------------

// muestra un error: pinta el campo y muestra el mensaje

function mostrarError(campo, elementoError, texto){
    campo.classList.add("campo-error");
    if(texto){
        elementoError.classList.remove("oculto");
        elementoError.textContent=texto;
    }
}

// oculta un error: quita borde rojo y oculta el mensaje

function ocultarError(campo, elementoError){
    campo.classList.remove("campo-error");
    elementoError.classList.add("oculto");
}

// ------------------------------------------------------
// --- Funciones de validacion (devuelven true/false) ---
// ------------------------------------------------------

/**
 * Cada funcion comprueba un campo y devuelve:
 * true si el campo es valido
 * false si el campo tiene error(y se muestra el mensaje)
 */

function validarNombre(){

    const valor=inputNombre.value.trim();

    if(valor===""){
        mostrarError(inputNombre, errorNombre, "El campo es obligatorio");
        return false;
    }else if(valor.length<3){
        mostrarError(inputNombre, errorNombre, "El nombre debe tener al menos 3 caracteres");
        return false;
    }

    ocultarError(inputNombre, errorNombre);
    return true;
}

function validarNacionalidad(){
    
    // si value esta vacio es que el usuario no ha elegido opcion
    if(selectNacionalidad.value===""){
        mostrarError(selectNacionalidad, errorNacionalidad, "Selecciona una nacionalidad");
        return false;
    }

    ocultarError(selectNacionalidad, errorNacionalidad);
    return true;
}

function validarDescripcion(){

    const valor=textareaDescripcion.value.trim();

    if(valor===""){
        mostrarError(textareaDescripcion, errorDescripcion, "La descripcion es obligatoria");
        return false;
    }
    ocultarError(textareaDescripcion, errorDescripcion);
    return true;
}

function validarTerminos(){

    if(!chkTerminos.checked){
        errorTerminos.classList.remove("oculto");
        errorTerminos.textContent="Debes aceptar los terminos";
        return false;
    }

    errorTerminos.classList.add("oculto");
    return true;
}       


// ------------------------------------------ 
// --- validacion al enviar el formulario ---
// ------------------------------------------

// cuando el usuario pulsa "Enviar", comprobamos TODOS los campos
// y mostramos todos los errores a la vez

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    // validamos campos y guardamos resultados
    const okNombre=validarNombre();
    const okNacionalidad=validarNacionalidad();
    const okDescripcion=validarDescripcion();
    const okTerminos=validarTerminos();

    // si todo esta correcto, "enviamos (simulamos con alert)"

    if(okNombre && okNacionalidad && okDescripcion &&okTerminos){
        alert("Solicitud enviada correctamente");

        // reiniciamos el formulario
        formulario.reset();

        // recalculamos estado del boton y contador
        actualizarBoton();
        actualizarContador();

        // limpiamos estilos/mensajes de error por si quedaron visibles
        ocultarError(inputNombre, errorNombre);
        ocultarError(selectNacionalidad, errorNacionalidad);
        ocultarError(textareaDescripcion, errorDescripcion);
        errorTerminos.classList.add("oculto");
    }
});


// --------------------------------------------------------
// --- validacion "en vivo" (mejora la usabilidad) --------
// --------------------------------------------------------

// - blur: valida cuando el usuario sale del campo
// - change: calida cuando el usuario cambia una opcion del select

inputNombre.addEventListener("blur", validarNombre);
selectNacionalidad.addEventListener("change", validarNacionalidad);
chkTerminos.addEventListener("change",validarTerminos);
textareaDescripcion.addEventListener("blur", validarDescripcion);