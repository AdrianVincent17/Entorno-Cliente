const tablero = ["", "", "", "", "", "", "", "", ""];
let turnoUsuario = true; // true = usuario, false = CPU
let juegoTerminado = false;

const msgEstado = document.getElementById("msgEstado");
const btnReiniciar = document.getElementById("btnReiniciar");

// Seleccionar todas las celdas
for (let i = 0; i < 9; i++) {
  const celda = document.getElementById("celda" + i);
  celda.addEventListener("click", () => seleccionarCelda(i));
}

// Botón reiniciar
btnReiniciar.addEventListener("click", reiniciarJuego);

// Función para seleccionar una celda
function seleccionarCelda(index) {
  if (!turnoUsuario || juegoTerminado || tablero[index] !== "") return;

  tablero[index] = "X";
  document.getElementById("celda" + index).textContent = "X";

  comprobarVictoria();

  if (!juegoTerminado) {
    turnoUsuario = false;
    setTimeout(turnoCPU, 500); // CPU juega después de 0.5s
  }
}

// Función para el turno de la CPU
function turnoCPU() {
  let index;
  do {
    index = Math.floor(Math.random() * 9);
  } while (tablero[index] !== "");

  tablero[index] = "O";
  document.getElementById("celda" + index).textContent = "O";

  comprobarVictoria();
  turnoUsuario = true;
}

// Función para comprobar victoria o empate
function comprobarVictoria() {
  const combinaciones = [
    [0,1,2], [3,4,5], [6,7,8], // filas
    [0,3,6], [1,4,7], [2,5,8], // columnas
    [0,4,8], [2,4,6]           // diagonales
  ];

  for (let combo of combinaciones) {
    const [a,b,c] = combo;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      juegoTerminado = true;
      msgEstado.textContent = tablero[a] === "X" ? "¡Has ganado!" : "Has perdido";
      desactivarTablero();
      return;
    }
  }

  if (!tablero.includes("")) {
    juegoTerminado = true;
    msgEstado.textContent = "¡Empate!";
  }
}

// Desactiva todas las celdas
function desactivarTablero() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("celda" + i).disabled = true;
  }
}

// Reiniciar juego
function reiniciarJuego() {
  for (let i = 0; i < 9; i++) {
    tablero[i] = "";
    const celda = document.getElementById("celda" + i);
    celda.textContent = "";
    celda.disabled = false;
  }
  turnoUsuario = true;
  juegoTerminado = false;
  msgEstado.textContent = "Pulsa una celda para jugar";
}