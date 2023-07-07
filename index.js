"use strict";
let play = document.querySelector("#play");
play.addEventListener("click", jugar);
let timer = 0;
let contador = 0;
let max = 3;

iniciar();




function iniciar(){
    timer += 10;
    document.getElementById('cuenta').innerHTML = "Reloj: " + timer;
    $('.card').load("./preguntas/inicio.txt");

}
function jugar(){
    contador = elegirPregunta();
    $('.card').load("./preguntas/cargando.txt");

    setTimeout(() => {
        $('.card').load("./preguntas/p_"+ contador  +".txt");
        $('.resp_1').load("./respuestas/r_" + contador + "/r_1.txt");
        $('.resp_2').load("./respuestas/r_" + contador + "/r_2.txt");
        $('.resp_3').load("./respuestas/r_" + contador + "/r_3.txt");

        let ganador = document.querySelector(".v");
        ganador.addEventListener("click", ganar);
        let perdedor = document.querySelector(".f");
        perdedor.addEventListener("click", perder);

        function ganar() {
            alert("GANASTE");
        }
        function perder() {
            alert("PERDISTE");
        }
        cuentaRegresiva() ;
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

