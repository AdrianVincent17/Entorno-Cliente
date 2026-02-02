/* ==========================================================================
   Test interactivo (Kahoot UT6)
   PLANTILLA - Este archivo NO incluye solución. 
   Debes programar TODA la funcionalidad en JavaScript.

   ==========================================================================
   1) ELEMENTOS DEL HTML QUE VAS A NECESITAR (IDs)
   ----------------------------------------------------------
   Contadores:
   - #infoPregunta  -> aquí mostrarás "Pregunta X/Y"
   - #infoPuntos    -> aquí mostrarás "Puntuación: X"

   Zona de juego:
   - #txtPregunta   -> aquí mostrarás el texto de la pregunta
   - #respuestas    -> aquí crearás los botones de respuesta (dinámicamente)

   Feedback:
   - #feedback      -> contenedor del feedback (por defecto oculto)
   - #txtFeedback   -> texto del feedback

   Botones:
   - #btnReiniciar  -> reinicia el test
   - #btnSiguiente  -> pasa a la siguiente pregunta / muestra resultado final

   Estado:
   - #txtEstado     -> texto tipo "Estado: ..."

   ===========================================================================
   2) CLASES DEL CSS QUE VAS A USAR DESDE JS (classList)
   ---------------------------------------------------------------------------
   Botones:
   - .btn           -> clase base (ponla a TODOS los botones que crees)
   - .btn-principal -> ya está en el botón "Siguiente" en el HTML
   - .btn-reiniciar -> ya está en el botón "Reiniciar" en el HTML

   Estados de respuesta (añadir/quitar a botones de respuesta):
   - .correcta      -> para marcar la respuesta correcta
   - .incorrecta    -> para marcar la respuesta elegida incorrecta

   Feedback (añadir a #feedback):
   - .ok            -> muestra el feedback en verde
   - .bad           -> muestra el feedback en rojo
   Nota: #feedback tiene la clase "feedback" por defecto (no la quites).

   =====================================================================================================================
   3) PISTAS DE IMPLEMENTACIÓN 
   ---------------------------------------------------------------------------------------------------------------------
   - Debes crear los botones de respuesta con createElement("button") y añadirles la clase "btn".
   - Cada botón de respuesta debe tener un addEventListener("click", ...)
   - Para saber qué opción se ha pulsado, usa event.target y un bucle for recorriendo los botones creados en #respuestas.
   ====================================================================================================================== */


/* ========================================================
   BANCO DE PREGUNTAS
   - text: enunciado de la pregunta
   - opciones: array con 3 opciones de respuesta
   - indiceCorrecta: índice de la opción correcta (0, 1, 2)
   - explicacion: explicación breve para el feedback
   ======================================================== */
const preguntas = [
  {
    text: "¿Qué es el DOM?",
    opciones: ["Un lenguaje de programación para la web", "Una representación en forma de objetos del documento HTML", "Un tipo de hoja de estilo"],
    indiceCorrecta: 1,
    explicacion: "El DOM representa el HTML como objetos que JavaScript puede leer y modificar."
  },
  {
    text: "¿Qué devuelve querySelectorAll()?",
    opciones: [
      "Un único elemento",
      "Un NodeList con todos los elementos que coinciden",
      "Un HTMLCollection con todos los elementos que coinciden"
    ],
    indiceCorrecta: 1,
    explicacion: "querySelectorAll() devuelve un NodeList con todas las coincidencias."
  },
  {
    text: "¿Qué propiedad usarías para cambiar solo texto (sin interpretar HTML)?",
    opciones: [
      "innerHTML",
      "textContent",
      "style"
    ],
    indiceCorrecta: 1,
    explicacion: "textContent cambia texto literal. innerHTML interpreta etiquetas."
  },
  {
    text: "¿Qué evento es el más típico en un botón?",
    opciones: [
      "submit",
      "click",
      "mouseover"
    ],
    indiceCorrecta: 1,
    explicacion: "click se dispara al pulsar el botón."
  },
  {
    text: "¿Qué hace classList.toggle('oculto')?",
    opciones: [
      "Borra todas las clases",
      "Añade la clase si no está y la quita si está",
      "Cambia el texto a 'oculto'"
    ],
    indiceCorrecta: 1,
    explicacion: "toggle alterna la presencia de una clase en el elemento."
  }
];

/* ==========================================================
   A PARTIR DE AQUÍ: TU CÓDIGO
   - Implementa la lógica completa del test:
     * mostrar preguntas
     * gestionar clics
     * marcar correcta/incorrecta
     * actualizar contadores
     * pasar de pregunta / finalizar
     * reiniciar
   ========================================================== */