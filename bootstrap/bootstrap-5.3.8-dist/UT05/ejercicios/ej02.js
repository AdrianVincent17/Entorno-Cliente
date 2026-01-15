
const formulario = document.getElementById('formulario');


const mensaje = document.getElementById('mensaje');



formulario.addEventListener("submit", function (event) {
    
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const curso = document.getElementById('curso').value;
    const aceptar = document.getElementById('aceptar').checked;

    if (!aceptar) {
        mensaje.textContent = "primero debes aceptar las condiciones";
    } else {
        if(nombre==""){
            mensaje.textContent="El nombre no debe estar vacio";
        }else if(curso==""){
            mensaje.textContent="El curso no debe estar vacio";
        }else{
             mensaje.textContent = `Nombre: ${nombre} | curso: ${curso} | condiciones aceptadas`;
        }
       
    }


});