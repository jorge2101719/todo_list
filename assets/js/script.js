let tareaInput = document.querySelector('#tarea_input');
let agregar = document.querySelector('#agregar');
let total = document.querySelector('#total');
let realizadas = document.querySelector('#realizadas');
let cuerpoTabla = document.querySelector('#cuerpo_tabla');
let contarTareas = 0;
let contarRealizadas = 0;
let tablaTareas = document.querySelector('#tabla_tareas')
//  let estadoTarea = false

const tareas = [
    {
        id: 16,
        nombre: 'Ir al mercado',
        estado: false,
    },
    {
        id: 60,
        nombre: 'Estudiar',
        estado: false,
    },
    {
        id: 24,
        nombre: 'Pasear al perro',
        estado: false,
    }
];

renderTareas();
totalTareas();


function renderTareas() {
    let html = '';
    for (let tarea of tareas) {
        html += `
            <tr id=${tarea.id}>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td><input onclick='checkClick(${tarea.id})' type='checkbox' id='${tarea.id}' name='tyc'></td>
                <td><button onclick='borrar(${tarea.id})' id='btnBorrar'>Borrar Tarea</button></td>
            </tr>
        `;
    }
    cuerpoTabla.innerHTML = html;   
}

function checkClick (id) {
    let indexTarea = tareas.findIndex((tarea) => tarea.id == id);
    let tareaCliqueada = tareas.find((tarea) => tarea.id == id);

    tareas[indexTarea] = {
        id: tareaCliqueada.id,
        nombre: tareaCliqueada.nombre,
        estado: tareaCliqueada.estado == true ? false : true,
    }

    tareasHechas();
}

function totalTareas () {
    contarTareas = tareas.length;
    total.innerHTML = contarTareas;
}

function tareasHechas () {
    let tareasRealizadas = tareas.filter((tarea) => tarea.estado === true);
    contarRealizadas = tareasRealizadas.length;
    realizadas.innerHTML = contarRealizadas;
    
}

agregar.addEventListener('click', function () {
    if (tareaInput.value === '') {
        alert('Está tratando de ingresar una tarea vacía, por favor corriga ese detalle')
    } else {
        let nueva_tarea = tareaInput.value;
        estadoNuevaTarea = false;
        console.log('el estado de la nueva tarea  es ',estadoNuevaTarea)
        tareas.push({
            id: Date.now(),
            nombre: nueva_tarea,
            estado: estadoNuevaTarea,
        });

        tareaInput.value = '';

        renderTareas();
        totalTareas();

        tareasHechas();
    }
})

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);

    renderTareas();
    totalTareas();

    tareasHechas();
}

