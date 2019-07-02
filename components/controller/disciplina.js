function initDisciplina(idDisciplina) {
    
    console.log("iniciou disciplina", idDisciplina);

    const disciplinamock = {
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
    };

    console.log(mockDisciplina);

    const header = document.getElementById('nome-disciplina');
    header.innerHTML = disciplinamock.name;


}