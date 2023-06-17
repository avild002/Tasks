
export function deleteTask(element, list, index) {
  if (element.name === "Eliminar") {
     list.splice(index, 1);
     console.log(list);
     const div_update = document.getElementById(`update_+${index}`);
     div_update.remove();
     element.parentElement.parentElement.remove();

  }

}