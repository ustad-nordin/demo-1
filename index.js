
// Maak een array van auto merken
const merken = ["Mercedes", "Volkswagen", "Audi", "Toyota"];

// Declareer positie met initiele waarde 0
let position = 0;

// 
const button = document.getElementsByClassName("testbutton")[0];
button.addEventListener("click", onFetch);
let output = document.getElementsByClassName("title")[0];

function onClick() {
    if(position == merken.length)
        position = 0;
    output.innerHTML = merken[position];
    position++;
}

function onFetch() {
    position++;
    
    // fetch data from api
    fetch(`https://jsonplaceholder.typicode.com/users/${position}`)
    .then(response => response.json())
    .then(json => output.innerHTML = JSON.stringify(json))
}
