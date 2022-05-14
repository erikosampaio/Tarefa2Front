// Função para criar tabela
function formulario() {
    let vinculo = document.getElementById("vinculo").value;
    let autor = document.getElementById("autor").value;
    let issn = document.getElementById("issn").value;
    let editora = document.getElementById("editora").value;
    let titulo = document.getElementById("titulo").value;
    let edicao = document.getElementById("edicao").value;
    let ano = document.getElementById("ano").value;

    var frutas = [vinculo, titulo, autor, edicao, issn, ano, editora];

    document.getElementById("tab_vinculo").innerHTML = frutas[0];
    document.getElementById("tab_titulo").innerHTML = frutas[1];
    document.getElementById("tab_autor").innerHTML = frutas[2];
    document.getElementById("tab_edicao").innerHTML = frutas[3];
    document.getElementById("tab_issn").innerHTML = frutas[4];
    document.getElementById("tab_ano").innerHTML = frutas[5];
    document.getElementById("tab_editora").innerHTML = frutas[6];
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



//Função para validar campos obrigatórios

// Vinculo, Titulo, Autor



// Ano
if (document.querySelector("#ano" < 1900 && "#ano" > 2019)) {
    let
}