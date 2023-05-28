
export function deleteTask(element,list) {
  if (element.name === "Eliminar") {
        list.splice(element.id, 1);
          console.log(list);
          element.parentElement.parentElement.remove();
          
        }

}
