// obtener elementos del DOM

const formulario = document.getElementById("formulario");
const inputPass1 = document.getElementById('pass1');
const inputPass2 = document.getElementById('pass2');
const chkConfirmar = document.getElementById('chkConfirmar');
const btnEnviar = document.getElementById('btnEnviar');

// elementos de error

const errorPass1 = document.getElementById('errorPass1');
const errorPass2 = document.getElementById('errorPass2');
const errorConfirmar = document.getElementById('errorConfirmar');



function validarContraseña1() {

    const pass1 = inputPass1.value.trim();

    if (pass1 === "") {
        inputPass1.classList.add("campo-error");
        errorPass1.classList.remove("oculto");
        errorPass1.textContent = "Este campo es obligatorio";
        return false;
    } else if (pass1.length < 6) {
        inputPass1.classList.add("campo-error");
        errorPass1.classList.remove("oculto");
        errorPass1.textContent = "Debe tener al menos 6 caracteres";
        return false;
    }

    inputPass1.classList.remove("campo-error");
    errorPass1.classList.add("oculto");
    return true;
}

function validarContraseña2() {

    const pass2 = inputPass2.value.trim();
    if (pass2 === "") {
        inputPass2.classList.add("campo-error");
        errorPass2.classList.remove("oculto");
        errorPass2.textContent = "Repite la contraseña";
        return false;
    } else if (pass2 !== inputPass1.value.trim()) {
        inputPass2.classList.add("campo-error");
        errorPass2.classList.remove("oculto");
        errorPass2.textContent = "Las contraseñas no coinciden";
        return false;
    }

    inputPass2.classList.remove("campo-error");
    errorPass2.classList.add("oculto");
    return true;
}

function validarConfirmar() {

    if (!chkConfirmar.checked) {
        errorConfirmar.classList.remove("oculto");
        errorConfirmar.textContent = "Debes confirmar el cambio";
        return false;
    }

    errorConfirmar.classList.add("oculto");
    return true;
}

function actualizarBoton() {
    btnEnviar.disabled = !chkConfirmar.checked;
}

chkConfirmar.addEventListener("change", function () {
    actualizarBoton();

    if (chkConfirmar.checked) {
        chkConfirmar.classList.remove("campo-error");
        errorConfirmar.classList.add("oculto");
    }
});


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // validamos campos y guardamos resultados
    const okPass1 = validarContraseña1();
    const okPass2 = validarContraseña2();
    const okConfirmar = validarConfirmar();

    // si todo esta correcto, "enviamos (simulamos con alert)"

    if (okPass1 && okPass2 && okConfirmar) {
        alert("Contraseña cambiada correctamente");

        // reiniciamos el formulario
        formulario.reset();

        // recalculamos estado del boton
        actualizarBoton();


        // limpiamos estilos/mensajes de error por si quedaron visibles
        inputPass1.classList.remove("campo-error");
        errorPass1.classList.add("oculto");
        inputPass2.classList.remove("campo-error");
        errorPass2.classList.add("oculto");

        errorConfirmar.classList.add("oculto");
    }
});

actualizarBoton();

// validaciones en tiempo real

inputPass1.addEventListener("blur", validarContraseña1);
inputPass2.addEventListener("blur", validarContraseña2);
chkConfirmar.addEventListener("change",validarConfirmar);