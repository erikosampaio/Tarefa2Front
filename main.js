class Formulario {

    constructor() {
        this.id = 1;
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
        let tbody = document.querySelector('#tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayFormularios.length; i++) {
            let tr = tbody.insertRow();

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

            tr.setAttribute('ondblclick', "formulario.deletar(" + this.arrayFormularios[i].id + ")");

            this.limpaCampos();
        }
    }

    adicionar(formulario) {
        this.arrayFormularios.push(formulario);
        this.id++;
    }

    validaCampos(formulario) {

        let msg = '';

        let ano = document.querySelector('#ano').value;

        if (ano != '') {
            if (ano < 1900 || ano > 2019) {
                msg += '- Ano válido: 1900 a 2019.\n\n';
            }
        }

        if (formulario.vinculo == '') {
            msg += '- Vínculo obrigatório!\n\n';
        }

        if (formulario.autor == '') {
            msg += '- Autor obrigatório!\n\n';
        }

        if (formulario.titulo == '') {
            msg += '- Título obrigatório!\n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }

    lerDados() {
        let formulario = {}

        formulario.id = this.id;
        formulario.vinculo = document.querySelector('#vinculo').value;
        formulario.autor = document.querySelector('#autor').value;
        formulario.issn = document.querySelector('#issn').value;
        formulario.editora = document.querySelector('#editora').value;
        formulario.titulo = document.querySelector('#titulo').value;
        formulario.edicao = document.querySelector('#edicao').value;
        formulario.ano = document.querySelector('#ano').value;

        return formulario
    }

    limpaCampos() {

        document.querySelector('#vinculo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#issn').value = '';
        document.querySelector('#editora').value = '';
        document.querySelector('#titulo').value = '';
        document.querySelector('#edicao').value = '';
        document.querySelector('#ano').value = '';
    }

    deletar(id) {

        if(startTimer) {
            return alert('impossível deletar solitações já feitas!')
        }        
        let tbody = document.querySelector('#tbody');

        for (let i = 0; i < this.arrayFormularios.length; i++) {
            if (id == this.arrayFormularios[i].id) {
                this.arrayFormularios.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }
}


var formulario = new Formulario();