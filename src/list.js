
// TODO - Tengo que revisar como pintar los aobjetos del array sin usar los 
export function listTask (sortList) {
    const listTask = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="container py-2 card text-center mb-8">
        <div class ="container py-2 ">
            <strong>Tarea :</strong> <input type="text" value = ${sortList[0].name} disabled>
            <strong>prioridad :</strong> <input type="text" value = ${sortList[0].priority} disabled> 
            <strong>Estado :</strong> <input class="form-check-input" type="checkbox" value=""> ${sortList[0].state}
        <div><br>
        <button type="button" class="btn btn-info">Editar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
    </div>`;
    listTask.appendChild(element);

}