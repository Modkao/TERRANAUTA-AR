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

function interactuar(evento, objeto, imagen){


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

    objeto.style.display = "none"



    basuraRestante--;

botella

    // esconder terranauta arriba
    terranautaIdle.style.display =
    "none";



    // mostrar terranauta accion
   terranautaAction.style.display = "block";

terranautaAction.src = imagen;

terranautaAction.style.left =
evento.clientX + "px";

terranautaAction.style.top =
evento.clientY + "px";

terranautaAction.style.transform =
"translate(-50%, -50%)";
    // FINAL

    if(basuraRestante <= 0){

        setTimeout(()=>{

            objeto.style.display = "none";


            terranautaAction.style.display =
            "none";



            terranautaIdle.style.display =
            "block";



            terranautaIdle.src =
            "mcfinal.png";



            terranautaIdle.style.top =
            "50%";



            terranautaIdle.style.left =
            "50%";



            terranautaIdle.style.transform =
            "translate(-50%, -50%)";


        },4000);

    }

}





// ======================
// EVENTOS
// ======================

// ======================
// EVENTOS
// ======================

botella.addEventListener(

    "click",

    (evento)=>{

       interactuar(
            evento,
            botella,
            "mcbotella.png"
        );

    }

);




bolsa.addEventListener(

    "click",

    (evento)=>{

        interactuar(
            evento,
            bolsa,
            "mcbolsas.png"
        );

    }

);




lata.addEventListener(

    "click",

    (evento)=>{

        interactuar(
            evento,
            lata,
            "mclata.png"
        );

    }

);




papel.addEventListener(

    "click",

    (evento)=>{

        interactuar(
            evento,
            papel,
            "mcpapel.png"
        );

    }

);
