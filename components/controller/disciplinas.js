function initDisciplinas() {
    
}
const disciplinasmock = [{
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
}]
localStorage.setItem("token")
const tabela = document.getElementById("tabela-disciplinas");

disciplinasmock.forEach(disciplina => {
    tabela.innerHTML = tabela.innerHTML + 
            `<tr><td>${disciplina.name}</td> <td>${disciplina.likes.length}</td> <td>${disciplina.comments.length}</td></tr>`
})
