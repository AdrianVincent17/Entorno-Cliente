function panel1() {
    const fechaAct = document.getElementById('fecha');
    const horaAct = document.getElementById('hora');

    const fecha = new Date();

    fechaAct.textContent = fecha.toLocaleDateString();
    horaAct.textContent = fecha.toLocaleTimeString();

    setTimeout(panel1, 1000);

}
panel1();

function panel2() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    const lenguaje = navigator.lenguage;
    const online = navigator.onLine;

    const anchito = document.getElementById('ancho');
    const altito = document.getElementById('alto');
    const leng = document.getElementById('lenguaje');
    const conect = document.getElementById('online');

    anchito.textContent = ancho;
    altito.textContent = alto;
    leng.textContent = navigator.language;

    if (online) {
        conect.textContent = 'Conectado';
    } else {
        conect.textContent = 'Desconectado';
    }


}
panel2();
onresize = panel2;


// PANEL 3

const CLAVE_URL = "url";
const ultimapagina = document.getElementById('ultima');
ultimapagina.textContent = obtener();

function ir() {
    const inputurl = document.getElementById('inputurl').value;
    let url;

    if (inputurl != "") {
        if (inputurl.startsWith('http://') || inputurl.startsWith('https://')) {
            url = inputurl;
        } else {
            url = "https://" + inputurl;
        }
        localStorage.setItem(CLAVE_URL, url);
        location.href = url;

    }
    document.getElementById('inputurl').value = "";
}

function atras() {
    history.back();
}

function adelante() {
    history.forward();
}

function google() {
    location.href = 'https://google.com';
    localStorage.setItem(CLAVE_URL, "https://google.com");
    ultimapagina.textContent = obtener();
}

function obtener() {
    return localStorage.getItem(CLAVE_URL);
}

const panelrojo = document.getElementById("panel-cuenta-atras");
const conta = document.getElementById('contador');


segundos = 0;
intervalo = null;

function disminuircontador() {

    segundos=(segundos-0.01).toFixed(2);
    conta.textContent = segundos;

    if (segundos == 0) {
        clearInterval(intervalo);
        intervalo = null;
        panelrojo.style.backgroundColor = "red";
    }
}

function iniciar() {
    const inputconta = document.getElementById('cuenta').value;
    segundos=inputconta;
    conta.textContent=segundos;

    panelrojo.style.backgroundColor="white";

    if(inputconta<=0){
        conta.textContent="Debe ser mayor que 0";
    }else{
        if(intervalo==null){
            intervalo=setInterval(disminuircontador,10);
            document.getElementById('cuenta').value="";        }
    }

}