
export function editTask(element) {
        
    if (element.name === "Editar") {
        // habilitar cajas de texto 
        var indexTask = element.id; 
        console.log("Valor de index en editar:   "); 
        console.log(indexTask); 
        activeInput(indexTask);
        const btnEdit = document.getElementById(`${indexTask}`); 
        btnEdit.disabled = true;   
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
        console.log("Nuevo nombre "+ newNameTask); 
        console.log("Nueva prio "+ newPrioTask); 
        list[indexBtn].setName(newNameTask);
        list[indexBtn].setPriority(newPrioTask);
        console.log(list);
        alert("Se han actualizado los campos correctamente..!!"); 
        element.style.display = "none";
        const btnEdit = document.getElementById(`${indexBtn}`); 
        btnEdit.disabled = false;   
        inactivateInput(indexBtn); 
    
    }
  
}

function activeInput (index) {

    const nameTask = document.getElementById(`task_+${index}`);
    nameTask.disabled = false;  
    const prioTask = document.getElementById(`prio_+${index}`);
    prioTask.disabled = false; 

}

function createBtn (indexTask) {

    const btn = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
        <button type="button" id="${indexTask}" name ="update" class="btn btn-secondary">Update</button>
    `;
    btn.appendChild(element);

}

function inactivateInput (indexBtn) {

    const nameTask = document.getElementById(`task_+${indexBtn}`);
    nameTask.disabled = true;  
    const prioTask = document.getElementById(`prio_+${indexBtn}`);
    prioTask.disabled = true; 

}