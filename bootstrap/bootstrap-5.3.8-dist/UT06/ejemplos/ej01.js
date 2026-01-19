function modificarContenido(){
    let titulo = document.getElementById("titulo");
    titulo.textContent="Contenido Modificado";

    let primerparrafo=document.querySelector(".texto");
    primerparrafo.textContent="Este es el primer parrafo";

    let parrafos=document.querySelectorAll(".texto");

    parrafos.forEach(function(p){
        p.textContent="Texto modificado";
       
    })
}