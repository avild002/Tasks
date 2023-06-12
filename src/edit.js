import { deleteTask } from './delete.js';
import { list } from './task.js';

export function editTask(element) {
        
    if (element.name === "Editar") {
        // habilitar cajas de texto 
        var indexTask = element.id; 
        console.log("Valor de index en editar:   "); 
        console.log(indexTask); 
        activeInput(indexTask);
        document.getElementById(`${indexTask}`).disabled = true; 
        status(indexTask);
        createBtn(indexTask);
        
    }

}

export function updateTask(element, list) {
  
    if (element.name === "update") {
        var indexBtn = element.id;
        console.log("Update"); 
        console.log(indexBtn); 
        const newNameTask = document.getElementById(`task_+${indexBtn}`).value;
        const newPrioTask = document.getElementById(`prio_+${indexBtn}`).value;
        const newState    = document.getElementById(`status_+${indexBtn}`).value;  
        console.log("Nuevo nombre "+ newNameTask); 
        console.log("Nueva prio "+ newPrioTask); 
        list[indexBtn].setName(newNameTask);
        list[indexBtn].setPriority(newPrioTask);
        list[indexBtn].setState(newState);
        console.log(list);
        alert("Se han actualizado los campos correctamente..!!"); 
        element.style.display = "none";
        document.getElementById(`${indexBtn}`).disabled = false; 
        inactivateInput(indexBtn); 
        document.getElementById(`delete_+${indexBtn}`).disabled = true; 
    
    }
  
}

function activeInput (index) {

    document.getElementById(`task_+${index}`).disabled = false;
    document.getElementById(`prio_+${index}`).disabled = false;
    document.getElementById(`status_+${index}`).disabled = false;

}

function createBtn (indexTask) {

    const btn = document.getElementById("task-list");
    const div = document.createElement("div");
    div.setAttribute("id",`update_+${indexTask}`); 
    div.setAttribute("name","div_update"); 
    const button = document.createElement("button");
    button.textContent = "Update";
    button.setAttribute("id",`${indexTask}`); 
    button.setAttribute("name","update"); 
    button.setAttribute("class","btn btn-secondary"); 
    div.appendChild(button);
    btn.appendChild(div);

}

function inactivateInput (indexBtn) {

    document.getElementById(`task_+${indexBtn}`).disabled = true;
    document.getElementById(`prio_+${indexBtn}`).disabled = true;
    document.getElementById(`status_+${indexBtn}`).disabled = true;

}

// TODO - Falta ajustar el btb update cuando elimino un task
function status(indexTask){
    
    document.getElementById(`status_+${indexTask}`).addEventListener("click", (e) => {
        var newState = document.getElementById(`status_+${indexTask}`).value;  
        console.log (newState); 
        
        if (newState === "Completado") {
            document.getElementById(`delete_+${indexTask}`).disabled = false; 
            indiceTask(indexTask,list);
            
        } else {
            document.getElementById(`delete_+${indexTask}`).disabled = true; 
            
        }
          
    });
        
}

function indiceTask(indexTask){

    document.getElementById("task-list").addEventListener("click", (e) => {
      console.log("index en edit :  " + indexTask)
      deleteTask(e.target,list, indexTask);
      e.preventDefault();

    });

}
