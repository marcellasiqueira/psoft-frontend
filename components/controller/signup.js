function initSignUp() {
    
    console.log("iniciou sign up");
    
    function signup() {
    
        console.log("cadastro");
    
        // pega o valor de cada elemento passado
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
        const cpass = document.getElementById("cpass").value;
    
        // verifica se login é válido
        if (fnameIsValid(fname) && lnameIsValid(lname) && emailIsValid(email) && passIsValid(pass) && cpassIsValid(cpass, pass)) {
            const loginObj = {
                firstName: fname,
                lastName: lname,
                email: email,
                password: pass,
            };
    
            // requisição 
            console.log(loginObj);
            requisicaoPOST('/students/signup', loginObj).then(data => {
                if (data !== undefined) {
                    localStorage.setItem('token', "Bearer " + data.token);
                    console.log(data);
                    navigate('disciplinas');
                }
            });
        }
        
        
    }
}