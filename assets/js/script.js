let tareaInput = document.querySelector('#tarea_input');
let agregar = document.querySelector('#agregar');
let total = document.querySelector('#total');
let realizadas = document.querySelector('#realizadas');
let cuerpoTabla = document.querySelector('#cuerpo_tabla');
let contarTareas = 0;
let contarRealizadas = 0;

const tareas = [];

function renderTareas() {
    let html = '';
    for (let tarea of tareas) {
        html += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type='checkbox' onclick='checkClick()'></td>
            <td><button id='btnBorrar' onclick='borrar(${tarea.id})'>Borrar Tarea</button></td>
        </tr>
    `;
    }
    cuerpoTabla.innerHTML = html;   
}

function totalTareas () {
    contarTareas = tareas.length;
    total.innerHTML = contarTareas;
}

function checkClick () {
    // let checkBox = document.getElementById("myCheck");
    // let text = document.getElementById("text");
    if (realizadas.checked == true) {
        contarRealizadas = contarRealizadas + 1;
        realizadas.innerHTML = contarRealizadas;
        // text.style.display = "block";
    } else {
        // text.style.display = "none";
        contarRealizadas = contarRealizadas - 1;
        realizadas.innerHTML = contarRealizadas;
    }
}

agregar.addEventListener('click', function () {
    // console.log('click en agregar');
    // console.log(campoIinput.value)
    if (tareaInput.value === '') {
        alert('Está tratando de ingresar una tarea vacía, por favor corriga ese detalle')
    } else {

        let nueva_tarea = tareaInput.value;
        tareas.push({
            id: Date.now(),
            nombre: nueva_tarea
        });
        tareaInput.value = '';

        renderTareas();
        totalTareas();
    
    }
})

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    // console.log(id, index)

    renderTareas();
    totalTareas();
}