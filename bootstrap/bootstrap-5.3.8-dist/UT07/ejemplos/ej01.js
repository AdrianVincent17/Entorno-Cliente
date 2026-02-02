const btn = document.getElementById("btnCargar");
const tbody = document.getElementById("tablaAlumnos");

btn.addEventListener("click", () => {

    fetch("alumnos.json")

        .then(respuesta => respuesta.json())
        .then(alumnos => {

            tbody.innerHTML = "";

            alumnos.forEach(alumno => {

                const tr = document.createElement("tr");

                tr.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.curso}</td>`;

                tbody.appendChild(tr);
            });
        });
});