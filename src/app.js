import { list } from "./task.js";
import { createTask } from './create.js';
import { deleteTask } from './delete.js';
import { editTask } from './edit.js';


document
  .getElementById("task-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtengo los valores del fomrulario
    const name = document.getElementById("fnameTask").value
    const priority = document.getElementById("priority").value
    
    // invoco la función crear.
    createTask(name,priority);
    document.getElementById("fnameTask").value = "";
    document.getElementById("priority").value = ""; 
    
});

document.getElementById("task-list").addEventListener("click", (e) => {
  deleteTask(e.target,list);
  e.preventDefault();
});


document.getElementById("task-list").addEventListener("click", (e) => {
  editTask(e.target);
  e.preventDefault();
});