/*
-------------------------------
          PANEL 1
-------------------------------
*/
const fechaAct = document.getElementById("fecha-actual");

function panel1() {
  const horaAct = document.getElementById("hora-actual");

  let fecha = new Date();

  fechaAct.textContent = fecha.toLocaleDateString();

  horaAct.textContent = fecha.toLocaleTimeString();

  setTimeout(panel1, 1000);
}
panel1();

/*
-------------------------------
          PANEL 2
-------------------------------
*/
const anchoVentana = document.getElementById("ancho-ventana");
const altoVentana = document.getElementById("alto-ventana");
const lenguaje = document.getElementById("lenguaje-navegador");
const estado = document.getElementById("estado-internet");

function panel2() {
  let ancho = innerWidth;
  let alto = innerHeight;

  lenguaje.textContent = navigator.language;

  anchoVentana.textContent = ancho;
  altoVentana.textContent = alto;

  if (estado) {
    estado.textContent = "Conectado";
  } else {
    estado.textContent = "Sin conexión";
  }
}

panel2();
onresize = panel2;

/*
-------------------------------
          PANEL 3
-------------------------------
*/
const CLAVE_URL = "url";
const ultima = document.getElementById("ultPagVisitada");
ultima.textContent = obtener();

function irUrl() {
  const inputUrl = document.getElementById("input-url").value;
  let url;

  if (inputUrl != "") {
    if (inputUrl.startsWith("http://") || inputUrl.startsWith("https://")) {
      url = inputUrl;
    } else {
      url = "https://" + inputUrl;
    }
    location.href = url;
    localStorage.setItem(CLAVE_URL, url);
  }

  document.getElementById("input-url").value = "";
}

function irAtras() {
  history.back();
}

function irAlante() {
  history.forward();
}

function google() {
  location.href = "https://google.es";
  localStorage.setItem(CLAVE_URL, "https://google.es");
  ultima.textContent = obtener();
}

function obtener() {
  return localStorage.getItem(CLAVE_URL);
}

/*
-------------------------------
          PANEL 4
-------------------------------
*/
let segundos = 0;
let intervalo = null;

const panel4 = document.getElementById("panel-cuenta-atras");
const display = document.getElementById("display-cuenta");

function disminuirContador() {
  segundos--;
  document.getElementById("display-cuenta").innerText = segundos;

  if (segundos == 0) {
    clearInterval(intervalo);
    intervalo = null;
    panel4.style.backgroundColor = "red";
  }
}

// continúa el temporizador (solo si está detenido)
function continuar() {
  let input = document.getElementById("input-cuenta").value;
  segundos = input;
  display.textContent = segundos;

  panel4.style.backgroundColor = "white";

  if (input <= 0) {
    display.textContent = "Debe ser mayor que 0";
  } else {
    if (intervalo == null) {
      intervalo = setInterval(disminuirContador, 1000);
    }
  }
}
