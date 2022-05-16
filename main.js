class Formulario {

    constructor() {
        this.arrayFormularios = [];
    }

    salvar() {
        let formulario = this.lerDados();

        if (this.validaCampos(formulario)) {
            this.adicionar(formulario);
        }

        this.listaTabela();
    }

    listaTabela() {
        let tboby = document.querySelector('#tboby');
        tboby.innerText = '';

        for (let i = 0; i < this.arrayFormularios.length; i++) {
            let tr = tboby.insertRow();

            let td_vinculo = tr.insertCell();
            let td_titulo = tr.insertCell();
            let td_autor = tr.insertCell();
            let td_edicao = tr.insertCell();
            let td_issn = tr.insertCell();
            let td_ano = tr.insertCell();
            let td_editora = tr.insertCell();

            td_vinculo.innerText = this.arrayFormularios[i].vinculo;
            td_autor.innerText = this.arrayFormularios[i].autor;
            td_issn.innerText = this.arrayFormularios[i].issn;
            td_editora.innerText = this.arrayFormularios[i].editora;
            td_titulo.innerText = this.arrayFormularios[i].titulo;
            td_edicao.innerText = this.arrayFormularios[i].edicao;
            td_ano.innerText = this.arrayFormularios[i].ano;

            td_edicao.classList.add('center');
            td_issn.classList.add('center');
            td_ano.classList.add('center');
            
        }
    }

    adicionar(formulario) {
        this.arrayFormularios.push(formulario);
    }

    validaCampos(formulario) {

        let msg = '';

        let ano = document.querySelector('#ano').value;

        if (ano != '') {
            if (ano < 1900 || ano > 2019) {
                msg += '- Ano inválido!\n';
            }
        }

        if (formulario.vinculo == '') {
            msg += '- Informe um vínculo!\n';
        }

        if (formulario.autor == '') {
            msg += '- Informe o nome do autor!\n';
        }

        if (formulario.titulo == '') {
            msg += '- Informe o título!\n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }

    lerDados() {
        let formulario = {}

        formulario.vinculo = document.querySelector('#vinculo').value;
        formulario.autor = document.querySelector('#autor').value;
        formulario.issn = document.querySelector('#issn').value;
        formulario.editora = document.querySelector('#editora').value;
        formulario.titulo = document.querySelector('#titulo').value;
        formulario.edicao = document.querySelector('#edicao').value;
        formulario.ano = document.querySelector('#ano').value;

        return formulario
    }

    excluir() {
        alert('Item deletado')
    }
}


var formulario = new Formulario();