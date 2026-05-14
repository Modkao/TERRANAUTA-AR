// ======================
// CAMARA
// ======================

const camera =
document.getElementById("camera");


navigator.mediaDevices.getUserMedia({

    video:{
        facingMode:"environment"
    },

    audio:false

})

.then((stream)=>{

    camera.srcObject = stream;

})

.catch((error)=>{

    console.log(error);

});





// ======================
// TERRANAUTA
// ======================

const terranautaIdle =
document.getElementById("terranautaIdle");


const terranautaAction =
document.getElementById("terranautaAction");





// ======================
// BASURA
// ======================

const botella =
document.getElementById("botella");


const bolsa =
document.getElementById("bolsa");


const lata =
document.getElementById("lata");


const papel =
document.getElementById("papel");





// ======================
// VARIABLES
// ======================

let basuraAnterior = null;

let juegoIniciado = false;

let basuraRestante = 4;


// ======================
// INICIO
// ======================

document.body.addEventListener(

    "click",

    iniciarJuego

);




function iniciarJuego(){

    // evitar repetir
    if(juegoIniciado){

        return;

    }


    // cambiar estado
    juegoIniciado = true;


    // cambiar imagen
    terranautaIdle.src =
    "mcapuntando.png";


    // activar basura despues
    setTimeout(()=>{

        juegoIniciado = "activo";


        document
        .querySelectorAll(".trash")

        .forEach((objeto)=>{

            objeto.style.pointerEvents =
            "auto";

        });

    },100);

}



// ======================
// INTERACCION
// ======================

function interactuar(objeto){


    if(juegoIniciado !== "activo"){

    return;

}

    // desaparecer basura anterior
    if(
        basuraAnterior &&
        basuraAnterior !== objeto
    ){

        basuraAnterior.style.display =
        "none";

    }



    basuraAnterior = objeto;



    basuraRestante--;



    // esconder terranauta arriba
    terranautaIdle.style.display =
    "none";



    // mostrar terranauta accion
    terranautaAction.style.display =
    "block";



    // mover terranauta
    terranautaAction.style.left =
    objeto.offsetLeft + "px";



    terranautaAction.style.top =
    (objeto.offsetTop - 150) + "px";




    // FINAL

    if(basuraRestante <= 0){

        setTimeout(()=>{

            objeto.style.display = "none";


            terranautaAction.style.display =
            "none";



            terranautaIdle.style.display =
            "block";



            terranautaIdle.src =
            "terranauta.png";



            terranautaIdle.style.top =
            "50%";



            terranautaIdle.style.left =
            "50%";



            terranautaIdle.style.transform =
            "translate(-50%, -50%)";


        },2000);

    }

}





// ======================
// EVENTOS
// ======================

botella.addEventListener(

    "click",

    ()=>{

        interactuar(botella);

    }

);




bolsa.addEventListener(

    "click",

    ()=>{

        interactuar(bolsa);

    }

);




lata.addEventListener(

    "click",

    ()=>{

        interactuar(lata);

    }

);




papel.addEventListener(

    "click",

    ()=>{

        interactuar(papel);

    }

);