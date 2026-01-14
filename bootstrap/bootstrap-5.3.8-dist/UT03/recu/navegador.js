// ======================
// PLANTILLA navegador.js 
// ======================


// -------------------------------
// Panel INFORMACIÓN DEL NAVEGADOR
// -------------------------------

const CLAVE_URL = "url";
const ancho = document.getElementById('anchoVentana');
const alto = document.getElementById('altoVentana');
const idioma = document.getElementById('idiomaNavegador');
const estado = document.getElementById('estadoConexion');
const ultima = document.getElementById('ultimaUrl');
let url;


// ----------------------------
// Panel HISTORIAL Y NAVEGACIÓN 
// ----------------------------

ultima.textContent = actualizarUltimaUrl();

    let online = navigator.onLine;

idioma.innerHTML = navigator.language;

if (online) {
    estado.textContent = "Conectado"
} else {
    estado.textContent = "Desconectado";
}


function redimensionar() {



    let anchito = window.innerWidth;
    let altito = window.innerHeight;

    ancho.textContent = anchito;
    alto.textContent = altito;
}
redimensionar();
onresize = redimensionar;

function actualizarUltimaUrl(url) {
    return localStorage.getItem(CLAVE_URL);
}

function irAUrl() {

    const inputurl = document.getElementById("inputUrl").value.trim();

    if (inputurl.startsWith("http://") || inputurl.startWith("https://")) {
        url = inputurl;

    } else {
        url = "https://" + inputurl;
    }

    localStorage.setItem(CLAVE_URL, url);
    ultima.textContent = actualizarUltimaUrl();
    location.href = url;
}

function irAtras() {
    history.back();
}

function irAdelante() {
    history.forward();
}

function irAGoogle() {
    localStorage.setItem(CLAVE_URL, "https://google.com");
    ultima.textContent = actualizarUltimaUrl();
    location.href = "https://google.com";


}

actualizarUltimaUrl();


