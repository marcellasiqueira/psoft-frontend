function initDisciplina(idDaDisciplina) {
    console.log("iniciou disciplina", idDaDisciplina);

    let disciplina = {};
    let funcaoBotao = "";
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
        
        const botaoAdicionar = document.getElementById('adicionar-comentario');
        botaoAdicionar.addEventListener('click', adicionaComentario);

        const email = localStorage.getItem('email');
        const botao = document.getElementById("like-dislike");

        if (disciplina.likes.includes(email)) {
            botao.addEventListener('click', removeLike);
            funcaoBotao = "like";
        } else {
            botao.addEventListener('click', like);
            funcaoBotao = "dislike";
        }
        inverteEstilo(botao);
        atualizaListaComentarios();

    });

    function inverteBotao(funcaoAntiga, funcaoNova) {
        const botao = document.getElementById('like-dislike');
        botao.removeEventListener('click', funcaoAntiga);
        botao.addEventListener('click', funcaoNova);
        inverteEstilo(botao);
    }

    function inverteEstilo(botao) {
        if (funcaoBotao === "dislike") {
            botao.style.backgroundColor = '#096cad';
            botao.innerHTML = 'Eu curto essa disciplina!';
            funcaoBotao = 'like';
        } else {
            botao.style.backgroundColor = 'red';
            botao.innerHTML = 'Eu não curto essa disciplina!';
            funcaoBotao = 'dislike';
        }
    }

    function objetoLike() {
        const emailUser = localStorage.getItem("email");
        
        const likeObj = {
            id: idDaDisciplina,
            email: emailUser
        };

        return likeObj;
    }
    
    function like() {
        const likeObj = objetoLike();
        
        requisicaoPUT('/subjects/like/', likeObj).then(data => {
            disciplina = { ...disciplina, ...data };
            inverteBotao(like, removeLike);
        });
    }

    function removeLike() {
        const likeObj = objetoLike();

        requisicaoDELETEBody('/subjects/like/', likeObj).then(data => {
            disciplina = { ...disciplina, ...data };
            inverteBotao(removeLike, like);
        });
    }

    function adicionaComentario() {
        const comentario = document.getElementById('comments').value;
        const email = localStorage.getItem('email');

        const objetoComentario = {
            text: comentario,
            userEmail: email,
            subjectReference: idDaDisciplina,
        }

        requisicaoPOST('/comments/create/', objetoComentario).then(data => {
            console.log(data);
            disciplina.comments.push(data);
            console.log(disciplina);
            atualizaListaComentarios();
        });
    }

    function atualizaListaComentarios() {
        const lista = document.getElementById("comentarios");
        const email = localStorage.getItem('email');
        let listaBody = '';
        disciplina.comments.
            filter(comentario => !comentario.deleted)
            .forEach(comentario => {
                listaBody += `<p>${comentario.userEmail}</p> <p>${comentario.text}`;
                if (comentario.userEmail === email) {
                    listaBody += `<button type="button" id="comentario-${comentario.id}">Excluir Comentário</button>`
                }
                listaBody += "</p>";
            });
        lista.innerHTML = listaBody;

        disciplina.comments
            .filter(comentario => !comentario.deleted)
            .forEach(comentario => {
                const comentarioAtual = document.getElementById(`comentario-${comentario.id}`);
                comentarioAtual.addEventListener('click', removeComentario);
            });
    }

    function removeComentario(event) {
        const idComentario = event.target.id.split("-")[1];
        disciplina.comments.forEach(comentario => {
            if (comentario.id == idComentario) {
                comentario.deleted = true;
                requisicaoPUT('/', comentario).then(comentarioAtualizado => {
                    comentario = comentarioAtualizado;
                });
            }
        });
        atualizaListaComentarios();
    }
}