let forma = document.querySelector('#forma');
let nuevaTarea = document.querySelector('#nuevaTarea');
let totalTareas = document.querySelector('#totalTareas');
let realizadas = document.querySelector('#realizadas');
let listaDeTareas = document.querySelector('#listaDeTareas');


const tareas = [
    {
        id: 1,
        nombre: 'Ir al mercado',
        // hecho: false,
    },
    {
        id: 2,
        nombre: 'Estudiar',
        // hecho: false,
    },
    {
        id: 3,
        nombre: 'Pasear al perro',
        // hecho: false,
    }
];

renderTareas();

function renderTareas() {
    listaDeTareas.innerHTML = '';
    tareas.forEach((tarea) => {
        const isChecked = tarea.hecho ? 'checked' : '';
        listaDeTareas.innerHTML += `<tr id=${tarea.id}>
            <td>
                ${tarea.id}
            </td>
            <td>
                ${tarea.nombre}
            </td>
            <td>
                <input class='check' type='checkbox' ${isChecked} data-id='${tarea.id}'>
            </td>
            <td>
                <button onclick='borrar(${tarea.id})'>Borrar Tarea</button>
            </td>
        </tr>
        `;
    });

    totalTareas.innerHTML = tareas.length;
    realizadas.innerHTML = getCheckedCount();
}

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nuevaTarea.value.trim() !== '') {
        let tareaParaAgregar = nuevaTarea.value.trim();
        tareas.push({
            id: Date.now(),
            nombre: tareaParaAgregar,
            hecho: false,
        });
        renderTareas();
        nuevaTarea.value = '';
    } else {
        alert('Está tratando de ingresar una tarea vacía. Por favor corrija ese detalle')
    }
});

function borrar(id) {
    let indexTarea = tareas.findIndex((tarea) => tarea.id == id);
    if(indexTarea !== -1) {
        tareas.splice(indexTarea, 1)
    };
    renderTareas();
};

listaDeTareas.addEventListener('change', (e) => {
    if(e.target.classList.contains("check")) {
        let tareaId = e.target.dataset.id;
        toggleTareaHecho(tareaId);
        renderTareas();
    }
});

function toggleTareaHecho(id) {
    const tarea = tareas.find((tarea) => tarea.id == id);
    if (tarea) {
        tarea.hecho = !tarea.hecho;
    }
}

function getCheckedCount() {
    let contador = 0;
    const checkboxes = document.querySelectorAll('.check');
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked) {
            contador++;
        }
    });
    console.log(contador);
    return contador;
}

renderTareas();
