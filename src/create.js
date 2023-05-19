import { task,list } from "./task.js";
import { listTask } from "./list.js";


export function createTask(taskName,priorityTask) {
    
    var index = 0; 
    // Creo un objeto y lo agrego a un array
    list.push(new task(taskName,priorityTask));
    showMessage();
    index = list.length - 1; 
    listTask(list,index);
    //orderList(list,index);
    
}

// TODO - No me está organizando el array de objetos por prioridad.  
function orderList (list,index){
    //const sortList = list.sort((a,b) => a.getPriority() > b.getPriority() ? 1 : -1); 
    //listTask(sortList,index)
}

// TODO -  Falta incluir un temporizador al alert.
function showMessage(){
    const mesageOk = document.getElementById("message");
    const element = document.createElement("div");
    element.innerHTML = `<div class="alert alert-success d-flex align-items-center " role="alert">
    <div> Se ha creado la tarea correctamente.</div></div>`
    mesageOk.appendChild(element);
    
} 
