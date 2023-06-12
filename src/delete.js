
export function deleteTask(element,list,index) {
    if (element.name === "Eliminar") {
      const div_update = document.getElementById(`update_+${index}`);
      div_update.remove(); 
      list.splice(index, 1);
      console.log(list);
      element.parentElement.parentElement.remove();
          
    }

}

