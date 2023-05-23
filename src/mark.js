
export function markCompleted (element, list) {
    
    if (element.checked) {
        var indexEliminar = element.id;
        console.log("Completado.."); 
        document.getElementById("label").style.color = "white";
        document.getElementById("label").style.background = "green";
        document.getElementById("label").innerHTML = "completado";
        
    } else {
      
        console.log("Sin completar..!");   
        document.getElementById("label").removeAttribute("style"); 
        document.getElementById("label").innerHTML = " Sin completar " 
    }

}
