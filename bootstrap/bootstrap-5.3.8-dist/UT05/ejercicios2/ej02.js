// Capturamos los elementos del DOM

const email = document.getElementById("inputEmail");
const btnEnviar = document.getElementById("btnEnviar");
const errorEmail = document.getElementById("errorEmail");

// validacion del email

function validarEmail() {

    const correo = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\n@]+\.[^\s@]+$/;
    
    if (correo === "") {
        email.classList.add("campo-error");
        errorEmail.classList.remove("oculto");
        errorEmail.textContent = "El email es obligatorio";
        return false;
    } else if (!emailRegex.test(correo)){
        email.classList.add("campo-error");
        errorEmail.classList.remove("oculto");
        errorEmail.textContent = "El formato de email no es correcto";
        return false;
    }

    email.classList.remove("campo-error");
    errorEmail.classList.add("oculto");
    return true;

}

// activacion del boton

function actualizarBoton(){
    btnEnviar.disabled=!validarEmail();
}

// eventos

// blur->validamos cuando el usuario sale del campo (clic fuera o TAB)

inputEmail.addEventListener("blur",actualizarBoton);

// input->si el alumno corrige el email, ocultamos el error mientras escribe

inputEmail.addEventListener("input",function(){
    if(emailRegex.test(email.value.trim())){
        email.classList.remove("campo-error");
        errorEmail.classList.add("oculto");
    }
    btnEnviar.disabled=true;
});

formulario.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(validarEmail()){
        alert("Formulario enviado correctamente");
        formulario.reset();
        email.classList.remove("campo-error");
        errorEmail.classList.add("oculto");
        btnEnviar.disabled=true;
    }

});

