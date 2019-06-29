(function(window, document, undefined) {

    const routes = {
        '/': './components/view/home.html',
        '/sapato': 'SAPATO',
    }

    const router = () => {
        const content = document.getElementById("eita");
        const path = window.location.hash.slice(1);
        const currentPage = routes[path];

        content.innerHTML = `<object style="width: 100vw; height: 100vh" type="text/html" data="${currentPage}" ></object>`;
    }
    
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    
})(window, document, undefined);