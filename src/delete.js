
export function deleteTask(element,list,index) {
  if (element.name === "Eliminar") {
    //console.log(index);
    var a = document.getElementsByClassName("btn btn-secondary");
          a.style.display = "none";  
        //document.getElementById(`${index}`).disabled = true; 
        list.splice(index, 1);
          console.log(list);
          //element.parentElement.parentElement.remove();
          
        }

}

