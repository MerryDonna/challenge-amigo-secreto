//variables
let listaAmigo=[];


//funciones
function agregarAmigo() {

    validarNombre();

}

function validarNombre() {

    if (obtenerNombre() == '') {
        alert("Registre un nombre");
    }
    else{
        asignarNombre();
        alert("nombre agregado");
        limpiarCelda();

    }

    function obtenerNombre(){

        let nombreAmigo = document.getElementById('amigo').value;
        return nombreAmigo;
    
     }

function asignarNombre(){
        
    let agregarnNombre = document.querySelector('#listaAmigos');
    agregarnNombre.innerHTML = obtenerNombre();
    console.log(obtenerNombre());
 }
 

 function limpiarCelda(){

    let limpiarCelda = document.getElementById('amigo').value ="";
    //limpiarCelda.innerHTML = "";
    console.log(`Este es valor de la celda limpiada:${limpiarCelda}`);
    
 }

}
