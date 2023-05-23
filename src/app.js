import { list } from "./task.js";
import { createTask } from './create.js';
import { deleteTask } from './delete.js';
import { editTask, updateTask } from './edit.js';
import { markCompleted } from './mark.js';



document.getElementById("task-form").addEventListener("submit", function (e) {
      
      // obtengo los valores del fomrulario
      const name = document.getElementById("fnameTask").value
      const priority = document.getElementById("priority").value
      
      // invoco la función crear.
      createTask(name,priority);
      document.getElementById("fnameTask").value = "";
      document.getElementById("priority").value = ""; 
      e.preventDefault();
    
});

document.getElementById("task-list").addEventListener("click", (e) => {

      deleteTask(e.target,list);
      e.preventDefault();

});


document.getElementById("task-list").addEventListener("click", (e) => {

      editTask(e.target);
      e.preventDefault();

});

document.getElementById("task-list").addEventListener("click", (e) => {

      updateTask(e.target,list);
      e.preventDefault();

});


document.getElementById("task-list").addEventListener("click", (e) => {
  markCompleted(e.target, list);

});