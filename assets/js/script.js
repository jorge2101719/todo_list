let tareaInput = document.querySelector('#tarea_input');
let agregar = document.querySelector('#agregar');
let total = document.querySelector('#total');
let realizadas = document.querySelector('#realizadas');
let cuerpoTabla = document.querySelector('#cuerpo_tabla');
let contarTareas = 0;
let contarRealizadas = 0;

const tareas = [];

agregar.addEventListener('click', function () {
    console.log('click en agregar');
    // console.log(campoIinput.value)
    while (tareaInput.value === '') {
        alert('Está tratando de ingresar una tarea vacía, por favor corriga ese detalle')
    }

    let nueva_tarea = tareaInput.value;
    tareas.push({
        id: Date.now(),
        nombre: nueva_tarea
    });
    tareaInput.value = '';

    let html = ''

    for (let tarea of tareas) {
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td><button id='btnBorrar'>Borrar Tarea</button></td>
            </tr>
        `;
    }

    cuerpoTabla.innerHTML = html;

    contarTareas = tareas.length;
    total.innerHTML = contarTareas;
    total.innerHTML
})