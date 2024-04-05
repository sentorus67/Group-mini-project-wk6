const requestUrl = 'https://www.loc.gov/search/?fo=json';

function getApi() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            consolog.log(data);
        })
}