let inputMinutos = document.querySelector(".minutos");
let inputSegundos = document.querySelector(".segundos");

let btnIniciar= document.querySelector(".btnIniciar");

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
        verificarStatus();
    }
}


//botão para iniciar o temporizador/descanso
btnIniciar.addEventListener("click", () => {
    temporizador();
})