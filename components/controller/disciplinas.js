function initDisciplinas() {
    
}
    const disciplinasmock = [{
        id: 1,
        name: "Projeto de Software",
        likes: ["júlio", "iann", "douglas"],
        comments: [{
            text: "sistema mal feito",
            userEmail: "julinho123@gmail.com",
            calendar: new Date()
        }, {
            text: "fiz o projeto sozinho",
            userEmail: "inhamimimi@gmail.com",
            calendar: new Date()
        }]
    }, {
        id: 2,
        name: "Introdução a Computação",
        likes: ["douglas", "alessandra", "giovana", "jose"],
        comments: [{
            text: "aprendi muito",
            userEmail: "tiodouglas@gmail.com",
            calendar: new Date()
        }]
    }];

    atualizaTabela();

    function atualizouTexto(text) {
        let inputValue = document.getElementById("campo-disciplinas").value;
        console.log(isNaN(inputValue));
        let resultado = {};
        if (isNaN(inputValue)) {
            resultado = disciplinasmock.filter(disciplina => disciplina.name.toLowerCase().includes(inputValue));
        } else {
            inputValue = parseInt(inputValue);
            resultado = disciplinasmock.filter(disciplina => disciplina.id.match(inputValue));
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
            tbBody += `<tr><td><a onclick="navigate('disciplina/${disciplina.id}')">${disciplina.name}</td> <td>${disciplina.likes.length}</td> <td>${disciplina.comments.length}</td></tr>`
        });
        
        tabela.innerHTML = tbBody;
    }

    document.getElementById("campo-disciplinas").addEventListener("keyup", atualizouTexto);


