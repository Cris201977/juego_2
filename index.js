"use strict";

let timer = 0;
let contador = 0;
let max = 3;

iniciar();


function iniciar(){
    let play = document.querySelector("#play");
    play.addEventListener("click", jugar);
    timer += 20;
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
    if(timer !=0){
    $('.card').load("./preguntas/p_" + contador + ".txt");
    $('.resp_1').load("./respuestas/r_" + contador + "/r_1.txt");
    $('.resp_2').load("./respuestas/r_" + contador + "/r_2.txt");
    $('.resp_3').load("./respuestas/r_" + contador + "/r_3.txt");
    responder();

    }
}
function responder(){
    let juego = document.querySelector("#juego");
    juego.addEventListener("click", r);

    function r() {
        alert("HOOOOO");
    }
    let ganador = document.querySelector("#v");
    ganador.addEventListener("click", ganar);
    let perdedor1 = document.querySelector("#f");
    let perdedor2 = document.querySelector("#f_");
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

