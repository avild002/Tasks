//import { task } from "./src/task.js";
import { createTask } from './create.js';


document
  .getElementById("task-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtengo los valores del formulario
    const name = document.getElementById("fnameTask").value
    const priority = document.getElementById("priority").value
    
    // invoco la función crear.
    createTask(name,priority);
    
  });