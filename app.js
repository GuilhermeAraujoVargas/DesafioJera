let inputMinutos = document.querySelector(".minutos");
let inputSegundos = document.querySelector(".segundos");

let btnIniciar= document.querySelector(".btnIniciar");

//variável para controle e contagem do pomodoro/descanso
let contadorPomodoro = 1;

let audio = document.querySelector(".alarme");

function verificarStatus() {
    ++contadorPomodoro;
    clearInterval(tempoVar);
    btnIniciar.style.display = "block";
    if (inputMinutos.value == 0 && inputSegundos.value == 0 && contadorPomodoro % 2 == 0) {
        inputMinutos.value = 5;
        inputMinutos.innerHTML = inputMinutos.value;
        inputSegundos.innerHTML = inputSegundos.value;
    } else if (inputMinutos.value == 0 && inputSegundos.value == 0 && contadorPomodoro % 2 != 0) {
        inputMinutos.value = 25;
        inputMinutos.innerHTML = inputMinutos.value;
        inputSegundos.innerHTML = inputSegundos.value;
    }
}

//função para realizar o cronômetro regressivo
function temporizador() {
    if (inputMinutos.value > 0 && inputSegundos.value == 0) {
        inputMinutos.value--;
        inputSegundos.value = 59;
        inputMinutos.innerHTML = inputMinutos.value;
        inputSegundos.innerHTML = inputSegundos.value;
    } else if (inputMinutos.value >= 0 && inputSegundos.value > 0) {
        inputSegundos.value--;
        inputSegundos.innerHTML = inputSegundos.value;  
    } else if (inputMinutos.value == 0 && inputSegundos.value == 0) {
        audio.play();
        verificarStatus();
    }
}

//variável para controlar o temporizador e descanso em relação a sua progressão: se vai parar ou continuar
let tempoVar;

//botão para iniciar o temporizador/descanso
btnIniciar.addEventListener("click", () => {
    temporizador();
    tempoVar = setInterval("temporizador()", 1000);
    btnIniciar.style.display = "none";
})