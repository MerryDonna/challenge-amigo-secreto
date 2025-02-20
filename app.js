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
}
    function obtenerNombre(){

        let nombreAmigo = document.getElementById('amigo').value;
        
        return nombreAmigo;

     }

function asignarNombre(){

    let agregarnNombre = document.querySelector('#listaAmigos');    
    listaAmigo.push(obtenerNombre());
    
    let lista ="";
   
    for (let nombres = 0; nombres < listaAmigo.length; nombres++) {

        lista += `<li>${listaAmigo[nombres]}</li>`;           

    }
    
    agregarnNombre.innerHTML =lista;
    
 }


 function limpiarCelda(){

    let limpiarCelda = document.getElementById('amigo').value ="";
    

 }


 function sortearAmigo(){

    let sorteo = Math.floor(Math.random()*listaAmigo.length);
    
    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = `El ganador es: ${listaAmigo[sorteo]}`;


 }

 function activarButton(){

    let button = document.getElementsByClassName("button-add");
    button.disabled = true;
 }



