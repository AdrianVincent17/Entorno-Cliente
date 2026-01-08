
const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

function limpiarEstadosVisuales(){
    //mensaje
    mensaje.classList.add("oculto");
    mensaje.classList.remove("error","correcto");
    mensaje.textContent="";

    
}





formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarEstadosVisuales();
    const nombre = document.getElementById('nombre').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const aceptar = document.getElementById('aceptar').checked;

    if(nombre.lengh<3){
        nombre.classList.add("campo-error");
        mensaje.textContent= "El nombre debe tener mas de 3 caracteres";
    }else if(nombre==""){
        nombre.classList.add("campo-error");
        mensaje.textContent= "El nombre no puede estar vacio";
    }else if(curso==""){
        curso.classList.add("campo-error");
        mensaje.textContent="El curso no puede estar vacio";
    }else if (!aceptar) {
        mensaje.textContent="primero debes aceptar las condiciones";
    } else {
        mensaje.textContent="inscripcion correcta" + nombre +"("+curso+")";
    }


});