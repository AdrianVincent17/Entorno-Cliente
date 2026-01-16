
// obtenemos las variables del DOM

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const selectProvincia = document.getElementById("selectProvincia");
const codigoPostal = document.getElementById("codigoPostal");
const inputContraseña = document.getElementById("inputContraseña");
const inputDescripcion=document.getElementById("inputDescripcion");
const contador=document.getElementById("contador");
const chkTerminos = document.getElementById("chkTerminos");
const btnEnviar = document.getElementById("btnEnviar");

// obtenemos los campos de error

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorProvincia = document.getElementById("errorProvincia");
const errorPostal = document.getElementById("errorPostal");
const errorContraseña = document.getElementById("errorContraseña");
const errorDescripcion=document.getElementById("errorDescripcion");

const errorTerminos = document.getElementById("errorTerminos");


function mostrarError(input, error, texto) {

    input.classList.add("campo-error");
    if (texto) {
        error.classList.remove("oculto");
        error.textContent = texto;
    }

}

function ocultarError(input, error) {
    input.classList.remove("campo-error");
    error.classList.add("oculto");
}

const nombreRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
function validarNombre() {

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        mostrarError(inputNombre, errorNombre, "El campo es obligaotorio");
        return false;
    } else if (nombre.length < 6) {
        mostrarError(inputNombre, errorNombre, "El nombre debe tener al menos 6 caracteres");
        return false;

    } else if (!nombreRegex.test(nombre)) {
        mostrarError(inputNombre, errorNombre, "El nombre debe ser solo letras");
        return false;
    }

    ocultarError(inputNombre, errorNombre);
    return true;
}


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validarEmail() {
    const email = inputEmail.value.trim();

    if (email === "") {
        mostrarError(inputEmail, errorEmail, "El campo no puede estar vacio");
        return false;
    } else if (!emailRegex.test(email)) {
        mostrarError(inputEmail, errorEmail, "Debe tener un formato valido");
        return false;
    }

    ocultarError(inputEmail, errorEmail);
    return true;
}

function validarProvincia() {

    const provincia = selectProvincia.value;

    if (provincia === "") {
        mostrarError(selectProvincia, errorProvincia, "Debes seleccionar alguna opcion");
        return false;
    }

    ocultarError(selectProvincia, errorProvincia);
    return true;
}

const postalRegex = /^\d{5}$/;
function validarPostal() {

    const cPostal = codigoPostal.value.trim();

    if (cPostal === "") {
        mostrarError(codigoPostal, errorPostal, "Este campo es obligatorio");
        return false;
    } else if (!postalRegex.test(cPostal)) {
        mostrarError(codigoPostal, errorPostal, "Debe tener al menos 5 digitos");
        return false;
    }

    ocultarError(codigoPostal, errorPostal);
    return true;
}

const minusRegex=/[a-z]/;
const mayusRegex=/[A-Z]/;
const numsRegex=/[0-9]/;

function validarContraseña() {

    const contraseña = inputContraseña.value.trim();

    if (contraseña === "") {
        mostrarError(inputContraseña, errorContraseña, "La contraseña no puede estar vacia");
        return false;
    } else if (contraseña.length < 8) {
        mostrarError(inputContraseña, errorContraseña, "La contraseña no puede tener menos de 8 carateres");
        return false;
    } else if (!minusRegex.test(contraseña)) {
        mostrarError(inputContraseña, errorContraseña, "La contraseña tiene que tener minusculas");
        return false;
    }else if (!mayusRegex.test(contraseña)) {
        mostrarError(inputContraseña, errorContraseña, "La contraseña tiene que tener mayusculas");
        return false;
    }else if (!numsRegex.test(contraseña)) {
        mostrarError(inputContraseña, errorContraseña, "La contraseña tiene que tener numeros");
        return false;
    }

    ocultarError(inputContraseña, errorContraseña);
    return true;
}

function validarDescripcion(){
    
    const descripcion=inputDescripcion.value;

    if(descripcion===""){
        mostrarError(inputDescripcion,errorDescripcion,"El campo es obligatorio");
        return false;
    }

    ocultarError(inputDescripcion,errorDescripcion);
    return true;
}

function validarTerminos() {

    const terminos = chkTerminos.checked;

    if (!terminos) {
        errorTerminos.classList.remove("oculto");
        errorTerminos.textContent = "Debes aceptar los terminos";
        return false;
    }

    errorTerminos.classList.add("oculto");
    errorTerminos.textContent = "";
    return true;
}

function actualizarBoton() {

    btnEnviar.disabled = !(chkTerminos.checked && validarNombre() && validarContraseña()&& validarEmail()&& validarProvincia() && validarPostal() && validarDescripcion());

}

actualizarBoton();

function actualizarContador(){
    const descripcion=inputDescripcion.value;

    contador.textContent=descripcion.length +"/100";
}


actualizarContador();


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombreOK = validarNombre();
    const emailOK = validarEmail();
    const provinciaOK = validarProvincia();
    const codigoPostalOK = validarPostal();
    const contraseñaOK = validarContraseña();
    const terminosOK = validarTerminos();

    if (nombreOK && emailOK && provinciaOK && codigoPostalOK && contraseñaOK && terminosOK) {
        alert("Formulario enviado correctamente");

        formulario.reset();
        actualizarBoton();
        actualizarContador();

        ocultarError(inputNombre, errorNombre);
        ocultarError(inputContraseña, errorContraseña);
        ocultarError(inputEmail, errorEmail);
        ocultarError(codigoPostal, errorPostal);
        ocultarError(selectProvincia, errorProvincia);
        errorTerminos.classList.add("oculto");
        errorTerminos.textContent = "";
    }
});


inputNombre.addEventListener("blur", validarNombre);
inputNombre.addEventListener("input", function(){
    actualizarBoton();
});
inputEmail.addEventListener("blur", validarEmail);
inputEmail.addEventListener("input", function(){
    actualizarBoton();
});
selectProvincia.addEventListener("change", validarProvincia);
selectProvincia.addEventListener("change", function(){
    actualizarBoton();
});
codigoPostal.addEventListener("blur", validarPostal);
codigoPostal.addEventListener("input", function(){
    actualizarBoton();
});
inputContraseña.addEventListener("blur", validarContraseña);
inputContraseña.addEventListener("input", function(){
    actualizarBoton();
});
chkTerminos.addEventListener("change", validarTerminos);
chkTerminos.addEventListener("change", function () {
    actualizarBoton();
});
inputDescripcion.addEventListener("blur",validarDescripcion);
inputDescripcion.addEventListener("input",function(){
    actualizarBoton();
    actualizarContador();

});

