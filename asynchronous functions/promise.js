//promises
//fetching data
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    resolve(response.json()); // Resolve with data if response is ok
                } else {
                    reject("Failed to fetch data"); // Reject if there was an issue
                }
            })
            .catch(error => reject("Network error: " + error)); // Catch network errors
    });
}

fetchData("https://api.example.com/data")
    .then(data => {
        console.log("Data received:", data); // Handle successful response
    })
    .catch(error => {
        console.error(error); // Handle any error that occurs
    });
//chaining  promises
fetchData("https://api.example.com/data")
    .then(data => {
        console.log("Data received:", data);
        return fetchData("https://api.example.com/other-data"); // Returning a new Promise
    })
    .then(otherData => {
        console.log("Other data received:", otherData);
    })
    .catch(error => {
        console.error("Error:", error);
    });
//