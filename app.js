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
    }

function asignarNombre(){
        
    let agregarnNombre = document.querySelector('#listaAmigos');
    agregarnNombre.innerHTML = obtenerNombre();
    console.log(obtenerNombre());
 }
 
 function obtenerNombre(){

    let nombreAmigo = document.getElementById('amigo').value;
    return nombreAmigo;

 }

}
