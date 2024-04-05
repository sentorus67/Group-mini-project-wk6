const requestUrl = 'https://www.loc.gov/search/?fo=json';
const searchInput = document.getElementById('search');

const formSubmitHandler = function (event) {
    event.preventDefault();

    const search = searchInput.value();

    if (!search) {
        alert("Please enter something to search.");
        return; // Stop further execution if the input is empty
    }

    // Continue with the search process
    getInfoFromSearch(search);

    searchInput.value = ""; // Clear the input field after search
}



function getApi() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            consolog.log(data);
        })


}