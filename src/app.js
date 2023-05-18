//import { task } from "./src/task.js";
import { createTask } from './src/create.js';


document
  .getElementById("task-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtengo los valores del fomrulario
    const name = document.getElementById("fnameTask").value
    const priority = document.getElementById("priority").value
      
    // invoco la función crear. 
    createTask(name,priority);

  });