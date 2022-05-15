class Formulario {

    constructor() {
        this.arraySolicitacao = [];
    }

    salvar() {
        let formulario = this.lerDados();

        if (this.validaCampos(formulario)) {
            this.adicionar(formulario);
        }

        console.log(this.arraySolicitacao);
    }

    adicionar(formulario) {
        this.arraySolicitacao.push(formulario);
    }

    lerDados() {
        let formulario = {}

        formulario.vinculo = document.getElementById('vinculo').value;
        formulario.autor = document.getElementById("autor").value;
        formulario.issn = document.getElementById("issn").value;
        formulario.editora = document.getElementById("editora").value;
        formulario.titulo = document.getElementById("titulo").value;
        formulario.edicao = document.getElementById("edicao").value;
        formulario.ano = document.getElementById("ano").value;

        return formulario;
    }

    validaCampos() {
        let msg = '';

        if (formulario.vinculo == '') {
            msg += '- Informe o vínculo \n';
        }

        if (formulario.autor == '') {
            msg += '- Informe o vínculo \n';
        }

        if (formulario.titulo == '') {
            msg += '- Informe o vínculo \n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }
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
