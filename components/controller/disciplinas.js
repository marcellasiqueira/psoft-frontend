function initDisciplinas() {
    console.log("iniciou disciplinas");

    let disciplinasmock = [];
    requisicaoGET('/subjects/').then(data => {
        let array = [];
            disciplinasmock = data;
            disciplinasmock.forEach(disciplina => {
                const comentario = requisicaoGET(`/comments/subject/${disciplina.id}`).then(data => {
                    disciplina.comments = data;
                });
                array.push(comentario);
            });
            Promise.all(array).then(() => {
                atualizaTabela();
            });
    });

    function atualizouTexto(text) {
        let inputValue = document.getElementById("campo-disciplinas").value;
        console.log(isNaN(inputValue));
        let resultado = {};
        if (isNaN(inputValue) || inputValue === "") {
            resultado = disciplinasmock.filter(disciplina => disciplina.name.toLowerCase().includes(inputValue));
        } else {
            inputValue = parseInt(inputValue);
            resultado = disciplinasmock.filter(disciplina => disciplina.id === inputValue);
        }
        console.log(typeof resultado);
        console.log("atualizou", resultado);
        atualizaTabela(resultado);
    }

    function atualizaTabela(disciplinasFiltradas) {
        const tabela = document.getElementById("tabela-disciplinas");

        let disciplinas = disciplinasFiltradas;
        if (disciplinas === undefined) {
            disciplinas = disciplinasmock;
        }

        let tbBody = "";
        disciplinas.forEach(disciplina => {
            tbBody += `<tr><td><a onclick="navigate('disciplina/${disciplina.id}')">${disciplina.name}</a></td> <td>${disciplina.likes.length}</td> <td>${disciplina.comments.length}</td></tr>`
        });
        tabela.innerHTML = tbBody;
    }

    document.getElementById("campo-disciplinas").addEventListener("keyup", atualizouTexto);
}

