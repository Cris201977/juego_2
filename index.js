"use strict";

let timer = 0;
let contador = 0;
let max = 3;
let tiempo =20;
iniciar();


function iniciar(){
    timer += tiempo;
    let play = document.querySelector("#play");
    play.addEventListener("click", jugar);
    play.disabled = false;
    document.getElementById('cuenta').innerHTML = "Reloj: " + timer;
    $('.card').load("./preguntas/inicio.txt");

}
function jugar(){

    contador = elegirPregunta();
    $('.card').load("./preguntas/cargando.txt");
    setTimeout(() => {
       cuentaRegresiva();
       darOpciones();

    }, "3000");
}

function elegirPregunta() {
    return Math.floor(Math.random() * max)+1;
}

function cuentaRegresiva() {
    document.getElementById('cuenta').innerHTML = "Reloj: " + timer;
    if (timer == 0) {
        $('.card').load("./mensajes/tiempo.txt");
        limpiarRespuestas();
        setTimeout(()=>{
        iniciar();
    }, 2000);
    } else {
        timer -= 1;
        setTimeout("cuentaRegresiva()", 1000);
    }
}

function limpiarRespuestas(){
    $('.resp_1').load("./respuestas/r.txt");
    $('.resp_2').load("./respuestas/r.txt");
    $('.resp_3').load("./respuestas/r.txt");
}

function darOpciones(){
    play.disabled = true;
    if(timer !=0){
    $('.card').load("./preguntas/p_" + contador + ".txt");
    $('.resp_1').load("./respuestas/r_" + contador + "/r_1.txt");
    $('.resp_2').load("./respuestas/r_" + contador + "/r_2.txt");
    $('.resp_3').load("./respuestas/r_" + contador + "/r_3.txt");


    responder();

    }
}
function responder(){

    let ganador = document.getElementById("#v");
    let perdedor1 = document.getElementById("#f");
    let perdedor2 = document.getElementById("#f-");

    ganador.addEventListener("click", ganar);
    perdedor1.addEventListener("click", perder);
    perdedor2.addEventListener("click", perder);

    function ganar() {
        alert("GANASTE");
        timer == 0;
    }
    function perder() {
        alert("PERDISTE");
        timer == 0;
    }
}



