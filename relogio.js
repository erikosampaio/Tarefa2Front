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
            return true;
        }

    }, 1000);
}

window.onload = function () {

    var duration = (60 * 60) - 1; // Conversão para segundos
    var display = document.querySelector("#timer"); // Elemento para exibir o timer

    startTimer(duration, display); //Inicia a função
}