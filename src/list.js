
// TODO - Tengo que revisar como pintar los aobjetos del array sin usar los 
export function listTask (orderedTaskList,index) {
    const listTask = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="container py-2 text-center mb-8">
        <div class ="container py-2 p-3 mb-2 bg-light text-dark">
            <strong>Tarea :</strong> <input type="text" value = ${orderedTaskList[index].name} disabled>
            <strong>prioridad :</strong> <input type="text" value = ${orderedTaskList[index].priority} disabled> 
            <strong>Estado :</strong> <input class="form-check-input" type="checkbox" value=""> ${orderedTaskList[index].state}
        <div><br>
        <button type="button" id= ${index} class="btn btn-info">Editar</button>
        <button type="button" id= ${index} class="btn btn-danger">Eliminar</button>
    </div>`;
    listTask.appendChild(element);

}