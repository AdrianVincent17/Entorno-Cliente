const mensaje=document.getElementById("mensaje");
const btnTexto=document.getElementById("btnTexto");
const btnColor=document.getElementById("btnColor");
const btnOcultar=document.getElementById("btnOcultar");

btnTexto.addEventListener("click", ()=>{
    mensaje.textContent="Texto cambiado desde JavaScript mediante el DOM";
});

btnColor.addEventListener("click", ()=>{
    mensaje.classList.toggle("azul");
});

btnOcultar.addEventListener("click", ()=>{
    mensaje.classList.toggle("oculto");
});

if(mensaje.classList.contains("oculto")){

}

