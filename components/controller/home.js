function initHome() {
    console.log("iniciou home");

    function login() {

        console.log("faz login");
    
        // pega o valor de cada elemento passado
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
    
        // verifica se login é válido
        if (fnameIsValid(fname) && lnameIsValid(lname) && emailIsValid(email) && passIsValid(pass)) {
            const loginObj = {
                firstName: fname,
                lastName: lname,
                email: email,
                password: pass,
            };
    
            // requisição 
            console.log(loginObj);
            requisicaoPOST('/auth/login', loginObj).then(data => {
                if (data !== undefined) {
                    localStorage.setItem('token', "Bearer " + data.token);
                    navigate('disciplinas');
                }
            });
        }
    }

    const botao = document.getElementById("login");
    botao.addEventListener('click', login);
}

