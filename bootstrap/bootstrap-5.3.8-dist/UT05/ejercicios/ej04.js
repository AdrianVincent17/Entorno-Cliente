
const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');
const inputnombre = document.getElementById('nombre');
const inputcurso = document.getElementById('curso');
const chkcondiciones = document.getElementById('aceptar');
const inputemail=document.getElementById('email');
const inputtelefono=document.getElementById('telefono');

const emailreg=/^[^\s@]+@[^\n@]+\.[^\s@]+$/;
const telefonoreg=/^[6789]\d{8}$/;

mensajes=[];

function limpiarEstadosVisuales() {
    //mensaje
    mensaje.classList.add("oculto");
    mensaje.classList.remove("error", "correcto");
    mensaje.textContent = "";

    inputnombre.classList.remove('campo-error');
    inputcurso.classList.remove('campo-error');

}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarEstadosVisuales();

    const nombre = inputnombre.value.trim();
    const curso = inputcurso.value.trim();
    const acepta = chkcondiciones.checked;
    const correo= inputemail.value.trim();
    const tel=inputtelefono.value.trim();




    if (nombre == "" ) {
        inputnombre.classList.add("campo-error");
        mensajes.push("El nombre no puede estar vacio");
    } else if (nombre.lengh < 3) {
        inputnombre.classList.add("campo-error");
        mensajes.push("El nombre debe tener mas de 3 caracteres");
    }
    
    //curso
    if (curso == "") {
        inputcurso.classList.add("campo-error");
        mensajes.push("El curso no puede estar vacio");
    } else if (!acepta) {
        mensajes.push("primero debes aceptar las condiciones");
    }

    //email
    if(correo===""){
        inputemail.classList.add('campo-error');
        mensajes.push('El email es obligatorio');

    }else if(!emailreg.text(correo)){
        inputemail.classList.add('campo-error');
        mensajes.push('El email no tiene un formato valido');
    }

    //telefono

     if(tel===""){
        inputtelefono.classList.add("campo-error");
        mensajes.push("El telefono es obligatorio");
     }else if(!telefonoreg.test(tel)){
        inputtelefono.classList.add("campo-error");
        mensajes.push("El telefono tiene que tener al menos 9 digitos y empeza por 6,7,8 o 9")
     }

     else {
        mensajes.push("inscripcion correcta " + nombre + "(" + curso + ")");
    }
});