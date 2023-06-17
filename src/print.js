export function printTask(list) {
    if (list.length > 0) {
       console.log(list.length);
       console.log(list);
 
       list.forEach((task) => {
          showTask(task);
          console.log(task.name, task.priority, task.state);
       });
 
    }
 
 }
 
 function showTask(task) {
    const listTask = document.getElementById("list");
    const div = document.createElement("div");
    div.setAttribute("id", "div_lista_tarea");
    div.innerHTML = `
         <div id="print" class ="container py-2 p-3 mb-2 bg-light text-dark">
             <strong> Tarea: </strong> <input type="text" value = ${task.name} max="10" disabled>
             <strong> Prioridad: </strong> <input type="number" value = ${task.priority} maxlength ="1" disabled> 
             <strong> Estado:  </strong> <input type="text" value = ${task.state} max="30" disabled> 
         </div>
         </div>`;
    listTask.appendChild(div);
 
 }
 