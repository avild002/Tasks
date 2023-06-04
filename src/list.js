
// TODO - ya se pintan las tareas del array sin ordenar por prioridad
export function listTask (list,index) {
        console.log("Index en list  =>  " + index);
        const listTask = document.getElementById("task-list");
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="container py-2 text-center mb-8" id="lista">
        <div class ="container py-2 p-3 mb-2 bg-light text-dark">
            <strong> Tarea:  </strong> <input type="text"  id="task_+${index}"  value = ${list[index].name} disabled>
            <strong> Prioridad: </strong> <input type="number" id="prio_+${index}"  value = ${list[index].priority} min ="1" max="5" maxlength ="1" disabled> 
            <strong> Estado: </strong>
            <select id="status_+${index}" name="${index}"  disabled>
               <option value="Sin completar"> Sin completar </option>
               <option value="Completado"> Completado </option>
            </select>
        </div>
        
        <br>
            <button type="button" id="${index}" name ="Editar" class="btn btn-info">Editar</button>
            <button type="button" id="delete_+${index}" name = "Eliminar" class="btn btn-danger" disabled >Eliminar</button>
        <br><br>
        </div>
        </div>`;
        listTask.appendChild(element);

}