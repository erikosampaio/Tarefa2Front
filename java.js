function salvar() {
    let vinculo = document.querySelector("#vinculo").value;
    let autor = document.querySelector("#autor").value;
    let issn = document.querySelector("#issn").value;
    let editora = document.querySelector("#editora").value;
    let titulo = document.querySelector("#titulo").value;
    let edicao = document.querySelector("#edicao").value;
    let ano = document.querySelector("#ano").value;

    console.log('Deu certo');

    
}


//Funções para cronômetro
function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0
            document.querySelector("#vinculo").disabled = true
            document.querySelector("#autor").disabled = true
            document.querySelector("#issn").disabled = true
            document.querySelector("#editora").disabled = true
            document.querySelector("#titulo").disabled = true
            document.querySelector("#edicao").disabled = true
            document.querySelector("#ano").disabled = true
        }

    }, 1000);
}

window.onload = function () {

    var duration = (60 * 60) - 1; // Conversão para segundos
    var display = document.querySelector("#timer"); // Elemento para exibir o timer

    startTimer(duration, display); //Inicia a função
}
