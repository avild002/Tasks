import { task,list } from "./task.js";
import { listTask } from "./list.js";


export function createTask(taskName,priorityTask) {
    
    var index = 0; 
    // Creo un objeto y lo agrego a un array
    list.push(new task(taskName,priorityTask));
    alert("Se ha creado la tarea correctamente..!!");
    index = list.length - 1; 
    listTask(list,index);

}

//TODO -  ya funciona el orderList solo falta revisar como pintar en index.html las tareas por la prioridad. 
function orderList (list, index){
    if (list.length >= 1) {
        list.sort((a, b) => b.getPriority() - a.getPriority()); 
    }
}
