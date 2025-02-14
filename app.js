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
    listaAmigo.push(obtenerNombre());
    //console.log(nombreAmigo);

    let lista ="";
   
    for (let nombres = 0; nombres < listaAmigo.length; nombres++) {

        lista += `<li>${listaAmigo[nombres]}</li>`;
        
        //agregarnNombre.innerHTML += `<li>${listaAmigo[nombres]}</li>`;

        console.log(`Array:${listaAmigo[nombres]}`)
        //console.log(nombres);

    }
    console.log(lista);
    agregarnNombre.innerHTML =lista;
        
    
    

    
   // agregarnNombre.innerHTML = obtenerNombre();
    //console.log(obtenerNombre());

    //agregarnNombre.innerHTML = arrayNombre();
    //console.log(arrayNombre());
 }


 function limpiarCelda(){

    let limpiarCelda = document.getElementById('amigo').value ="";
    

 }


 function arrayNombre(){

    // let nombres = [];
    // nombres.push(obtenerNombre);
    // console.log(nombres);


    // for (let array of listaAmigo) {
    //     console.log(array)
    // }

    //return listaAmigo
 }


}
