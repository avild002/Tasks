
export function editTask(element) {
        
    if (element.name === "Editar") {
        // habilitar cajas de texto 
        var indexTask = element.id; 
        console.log("Valor de index en editar:   "); 
        console.log(indexTask); 
        activeInput(indexTask);
        document.getElementById(`${indexTask}`).disabled = true; 
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
        document.getElementById(`${indexBtn}`).disabled = false; 
        inactivateInput(indexBtn); 
    
    }
  
}

function activeInput (index) {

    document.getElementById(`task_+${index}`).disabled = false;
    document.getElementById(`prio_+${index}`).disabled = false;
    document.getElementById(`status_+${index}`).disabled = false;

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

    document.getElementById(`task_+${indexBtn}`).disabled = true;
    document.getElementById(`prio_+${indexBtn}`).disabled = true;
    document.getElementById(`status_+${indexBtn}`).disabled = true;

}