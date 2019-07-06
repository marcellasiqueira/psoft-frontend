function initDisciplina(idDaDisciplina) {
    console.log("iniciou disciplina", idDaDisciplina);

    let disciplina = {};
    const disciplinaGET = requisicaoGET(`/subjects/${idDaDisciplina}`).then(data => {
       console.log('data', data);
        
       disciplina = { ...data, ...disciplina };
       console.log('disciplina', disciplina);
    });

    const comentariosGET = requisicaoGET(`/comments/subject/${idDaDisciplina}`).then(data => {
        disciplina.comments = data;
    });

    Promise.all([disciplinaGET, comentariosGET]).then(() => {
        const header = document.getElementById('nome-disciplina');
        header.innerHTML = disciplina.name;

        // const likes = document.getElementById('likes');
        // likes.innerHTML = disciplina.likes;

        // const comments = document.getElementById('comentarios');
        // let tbBody = "";
        // disciplinas.forEach(disciplina => {
        //     tbBody += `<td>${comments.}</td> <td>${disciplina.comments.length}</td></tr>`
        // });
        // comments.innerHTML = tbBody;
    })


}