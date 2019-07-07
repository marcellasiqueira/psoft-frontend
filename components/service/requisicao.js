const BASE_URL = 'https://classifica-cc.herokuapp.com/api/v1';

const default_header = { 
    Authorization: localStorage.getItem('token'),
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin':'*'

}

function requisicaoGET(endpoint) {
    return fetch(BASE_URL + endpoint, {
        headers: default_header,
        method: "GET",
    }).then(res => {
        return res.json().then(data => {
            return data;
        })
    });
}

function requisicaoPOST(endpoint, object) {
    return fetch(BASE_URL + endpoint, {
        headers: default_header,
        method: "POST",
        body: JSON.stringify(object),
    }).then(res => {
        return res.json().then(data => {
            return data;
        })
    });
}

function requisicaoPUT(endpoint, object) {
    return fetch(BASE_URL + endpoint, {
        headers: default_header,
        method: "PUT",
        body: JSON.stringify(object),
    }).then(res => {
        return res.json().then(data => {
            return data;
        })
    });
}

function requisicaoDELETE(endpoint) {
    return fetch(BASE_URL + endpoint, {
        headers: default_header,
        method: "DELETE",
    }).then(res => {
        return res.json().then(data => {
            return data;
        })
    });
}

function requisicaoDELETEBody(endpoint, object) {
    return fetch(BASE_URL + endpoint, {
        headers: default_header,
        method: "DELETE",
        body: JSON.stringify(object),
    }).then(res => {
        return res.json().then(data => {
            return data;
        })
    });
}
