const firstHeader = document.getElementById("header-ele")
const container = document.getElementById("root")

const fetchPromise = fetch("https://cat-fact.herokuapp.com");
console.log(fetchPromise);

fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request...");