
// TODO - Falta eliminar el objeto del array - 
// Solo lo elimina a nivel visual.
export function deleteTask(element) {
        if (element.name === "Eliminar") {
          element.parentElement.parentElement.remove();
        }
}
