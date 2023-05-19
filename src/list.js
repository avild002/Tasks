
// TODO - Tengo que revisar como pintar los aobjetos del array sin usar los 
export function listTask (list,index) {
    console.log("Index en list  =>  " + index);
    const listTask = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="container py-2 text-center mb-8">
        <div class ="container py-2 p-3 mb-2 bg-light text-dark">
            <strong>Tarea :</strong> <input type="text" value = ${list[index].name} disabled>
            <strong>prioridad :</strong> <input type="text" value = ${list[index].priority} disabled> 
            <strong>Estado :</strong> <input class="form-check-input" type="checkbox" value=""> ${list[index].state}
        <div><br>
        <button type="button" id= ${index} name ="Editar" class="btn btn-info">Editar</button>
        <button type="button" id= ${index} name = "Eliminar" class="btn btn-danger">Eliminar</button>
    </div>`;
    listTask.appendChild(element);

}