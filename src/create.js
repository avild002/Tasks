import { task,list } from "./task.js";
import { listTask } from "./list.js";


export function createTask(taskName,priorityTask) {
    
    var index = 0; 
    // Creo un objeto y lo agrego a un array
    list.push(new task(taskName,priorityTask));
    showMessage();
    index = list.length - 1; 
    //orderList(list,index);
    listTask(list,index);
    console.log(list);
    
}

//TODO -  ya funciona el orderList solo falta revisar como pintar en index.html las tareas por la prioridad. 
function orderList (list, index){
    if (list.length >= 1) {
        list.sort((a, b) => b.getPriority() - a.getPriority()); 
    }
    

}

// TODO -  Falta incluir un temporizador al alert.
function showMessage(){
    const mesageOk = document.getElementById("message");
    const element = document.createElement("div");
    element.innerHTML = `<div class="alert alert-success d-flex align-items-center " role="alert">
    <div> Se ha creado la tarea correctamente.</div></div>`
    mesageOk.appendChild(element);
    
} 
