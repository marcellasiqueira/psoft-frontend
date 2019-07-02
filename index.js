(function(window, document, undefined) {

    const routes = {
        '/': {
            templateUrl: './components/view/home.html',
            initFunction: initHome,
        },
        '/about' : {
            templateUrl: './components/view/about.html',
            initFunction: function() { },
        },
        '/signup': {
            templateUrl: './components/view/signup.html',
            initFunction: initSignUp,
        },
    };

    const routes_token = {
        '/disciplinas': {
            templateUrl: './components/view/disciplinas.html',
            initFunction: initDisciplinas,
        },
        '/disciplina': {
            templateUrl: './components/view/disciplina.html',
            initFunction: initDisciplina,
        },
    };

    const router = () => {
        const content = document.getElementById("eita");
        const path = window.location.hash.slice(1);
        
        const routePath = "/" + path.split("/")[1];
        const params = path.split("/")[2];

        let currentRoute = routes[routePath];

        if (currentRoute === undefined && localStorage.getItem("token") != undefined) {
            currentRoute = routes_token[routePath];
        } else if (currentRoute === undefined) {
            window.location.hash = "/";
            currentRoute = routes["/"];
        }

        const currentPage = currentRoute.templateUrl;

        fetch(currentPage).then(res => {
            res.text().then(inner => {
                content.innerHTML = inner;
                currentRoute.initFunction(params);
            });
        });
    }
    
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    
})(window, document, undefined);

function navigate(nextScreen) {
    nextScreen = nextScreen ? nextScreen : '';
    window.location.hash = `/${nextScreen}`;
}