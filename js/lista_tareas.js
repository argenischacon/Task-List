function addTaskToList(){
    let input = document.getElementById("nueva_tarea")
    let newTaskText = input.value
    input.value = ""

    if(newTaskText === ""){
        alert("El campo no puede estar vacio")
        return
    }

    // Crear elemento en la lista
    let newTask = document.createElement("li")
    newTask.textContent = newTaskText + " "
    
    //Crear boton para eliminar la tarea
    let newbtn = document.createElement("button")
    newbtn.textContent = "x"
    newbtn.onclick = function(){newTask.remove()}

    // Agregar el boton eliminar al elemento de la lista
    newTask.appendChild(newbtn)

    //Obtener el elemento de la lista
    let list = document.getElementById("list")
    
    // Agregar nueva tarea a la lista
    list.appendChild(newTask)
    

    }