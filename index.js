(function(window, document, undefined) {

    const routes = {
        '/': './components/view/home.html',
        '/about' : './components/view/about.html',
        '/signup': './components/view/signup.html',
    }

    const routes_token = {
        '/disciplinas': './components/view/disciplinas.html'
    }

    const router = () => {
        const content = document.getElementById("eita");
        const path = window.location.hash.slice(1);
        let currentPage = routes[path];

        if (currentPage === undefined && localStorage.getItem("token") != undefined) {
            currentPage = routes_token[path];
        } else if (currentPage === undefined) {
            window.location.hash = "/";
            currentPage = routes["/"];
        }

        fetch(currentPage).then(res => {
            res.text().then(inner => {
                content.innerHTML = inner;
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