import { task } from "./task.js";
import { listTask } from "./list.js";


export function createTask(taskName,priorityTask) {
    //creo un arreglo para guardar los objetos.
    const list = [];
    // Creo un objeto y lo agrego a un array
    list.push(new task(taskName,priorityTask));
    showMessage();
    orderList(list);

}

// TODO - No me está organizando el array de objetos por prioridad.  
function orderList (list){
    const sortList = list.sort((a,b) => a[0].getPriority() > b[1].getPriority() ? 1 : -1); 
    listTask(sortList)
}
// TODO -  Falta incluir un temporizador al alert.
function showMessage(){
    const mesageOk = document.getElementById("message");
    const element = document.createElement("div");
    element.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
    <div> Se ha creado la tarea correctamente.</div></div>`
    mesageOk.appendChild(element);
    
} 
