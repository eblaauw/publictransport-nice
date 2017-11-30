import config from '../config';

function craftEndPointUrl(method, param) {
    return config.domain + method + param;
}


function nsFetch(method, param) {
    const API_ENDPOINT = craftEndPointUrl(method, param);
    const credentials = 'Basic ' + btoa(config.auth.username + ':' + config.auth.password);
    console.log(credentials);
    const requestOptions = {
        headers: {
            'Authorization': credentials
        }
    };

    return fetch(API_ENDPOINT, requestOptions)
        .then(data => {
            if (data.ok) {
                console.log(data);
                return '';
            }
            return Promise.reject(new Error('Network response was not ok'));
        })
}

export {
    nsFetch,
};
