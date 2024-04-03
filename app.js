let IdCounter = 0;
let input = document.querySelector('input[type="text"]'); //accedemos al input que necesitamos editar

//boton +
//capturamos el evento con una variable que le ponemos evento como nombre 
userInput.addEventListener('submit', (evento) => {
  evento.preventDefault(); 
  addTask();
})

let addTask = () => {
  IdCounter++;

  let newValue = input.value; //guradamos el valor del input en la variable de newValue y esa la usamos en vez de tarea 1

  list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
      <label> 
        <input type="checkbox">
        ${newValue}
      </label>
      <img src="img/eliminar.png" class="close-btn">
    </div>`//el += es para que se vayan agregando una debajo de la otra
  
  input.value = ''; //para que se borre lo que tengamos en el input y podamos ir agregando nuevas tareas
  updateStats();
}

list.addEventListener('click', (evento) => {
  /* console.log(evento); */ //al hacer esto teniendo el click como evento vamos a mostrar en consola un objeto extenso, vamos a srcElement y al abrirlo vamos a nodeName y ahi nos da un nombre y con eso haremos las preguntas

  if (evento.srcElement.nodeName == 'INPUT') {
    updateStats();
  } else if (evento.srcElement.nodeName == 'IMG') {
    /* console.log(evento); *///para obtener el id del elemento hacemos lo mismo de lo del objeto extenso pero esta vez no buscamos nodeName sino parentNode y de ahi buscamos id
    deleteTask(evento.srcElement.parentNode.id);
  }
});

let updateStats = () => {
  //para el numero de tareas pendientes
  let element = list.querySelectorAll('div');  //usamos el .length para obtener la longitud de la lista
  //para el numero de tareas completadas
  let checkbox = list.querySelectorAll('input[type="checkbox"]:checked'); //todos los que esten seleccionados
  stats.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</p>`;
}

let deleteTask = (id) => {
  let taskToDelete = document.getElementById(id); //accedemos al id
  list.removeChild(taskToDelete); //eliminamos la tarea
  updateStats(); //actualizamos las stats
}

