let tareaInput = document.querySelector('#tarea_input');
let agregar = document.querySelector('#agregar');
let total = document.querySelector('#total');
let realizadas = document.querySelector('#realizadas');
let html = '';

const tareas = [];





agregar.addEventListener('click', function () {
    console.log('click en agregar');
    // console.log(campoIinput.value)
    if (tareaInput.value === '') {
        alert('Está tratando de ingresar una tarea vacía, por favor corriga ese detalle')
    } else {
    
        let nueva_tarea = tareaInput.value;
        tareas.push({
            id: Date.now(),
            nombre: nueva_tarea
        })
        console.log('la nueva tarea es ', nueva_tarea);

        campoInput = '';

    }
    total.value++
    total.innerHTML
})