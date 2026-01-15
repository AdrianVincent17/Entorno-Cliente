

const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

const inputNombre = document.getElementById('nombre');
const inputCurso = document.getElementById('curso');
const inputEmail = document.getElementById('email');
const inputTelefono = document.getElementById('telefono');
const chkCondiciones = document.getElementById('aceptar');






function limpiarEstadosVisuales() {


    //mensaje
    mensaje.classList.add("oculto");
    mensaje.classList.remove("error", "correcto");
    mensaje.textContent = "";
    

    //campos
    inputNombre.classList.remove("campo-error");
    inputCurso.classList.remove("campo-error");
    inputEmail.classList.remove("campo-error");
    inputTelefono.classList.remove("campo-error");
}

formulario.addEventListener("submit", function (event) {

    event.preventDefault();
    limpiarEstadosVisuales();

    let mensajes = [];

    const nombre = inputNombre.value.trim();
    const curso = inputCurso.value.trim();
    const email = inputEmail.value.trim();
    const telefono = inputTelefono.value.trim();
    const acepta = chkCondiciones.checked;

    if (nombre === "") {
        inputNombre.classList.add("campo-error");
        mensajes.push("El nombre no puede estar vacio");
    } else if (nombre.length < 3) {
        inputNombre.classList.add("campo-error");
        mensajes.push("El nombre debe tener mas de 3 caracteres");
    }

    //curso
    if (curso === "") {
        inputCurso.classList.add("campo-error");
        mensajes.push("El curso no puede estar vacio");
    }
    const emailRegex = /^[^\s@]+@[^\n@]+\.[^\s@]+$/;

    //email
    if (email === "") {
        inputEmail.classList.add('campo-error');
        mensajes.push('El email es obligatorio');
    } else if (!emailRegex.test(email)) {
        inputEmail.classList.add('campo-error');
        mensajes.push('El email no tiene un formato valido');
    }

    //telefono

    const telefonoRegex = /^[6789]\d{8}$/;

    if (telefono === "") {
        inputTelefono.classList.add("campo-error");
        mensajes.push("El telefono es obligatorio");
    } else if (!telefonoRegex.test(telefono)) {
        inputTelefono.classList.add("campo-error");
        mensajes.push("El telefono tiene que tener 9 digitos y empeza por 6,7,8 o 9")
    }

    //checkbox

    if (!acepta) {
        mensajes.push("Debes aceptar las condiciones para continuar");
    }

    if (mensajes.length != 0) {
        //si se ha registrado algun error
        mensaje.innerHTML = mensajes.join("<br>");
        mensaje.classList.add("error");
        mensaje.classList.remove("oculto", "correcto");
    } else {
        // si todo esta bien 
        mensaje.classList.remove("oculto", "error")
        mensaje.classList.add("correcto");
        mensajes.push("inscripcion correcta " + nombre + "(" + curso + ")");
        mensaje.textContent=mensajes;
    }
});