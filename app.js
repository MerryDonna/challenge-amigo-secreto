//variables
let nombreAmigo=[];
let validarnombre = document.getElementById("amigo");


//funciones
function agregarAmigo() {    

    validarNombre();

    

}

function validarNombre() {
    
    if (validarnombre.value == '') {
        alert("Registre un nombre");
    }
    else{

        alert("nombre agregado");
    }
   

        
    
}
