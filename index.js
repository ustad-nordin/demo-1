// Opdracht: Random Generator Quotes
// - Maak een lijst van quotes, gebruik dus een array
// - Maak een random getallen generator
// - Maak een referentie naar een html element, om de quote te tonen
// - Voeg een button om na een click een willekeurig quote te tonen




// Maak een array van quotes
const quotes = [
    "Het maakt niet uit hoe langzaam je gaat, zolang je maar niet stopt.", 
    "Er zijn geen binnenwegen richting beter.", 
    "Wees de verandering die je in de wereld wil zien gebeuren.", 
    "Houd altijd in gedachten dat je eigen voornemen tot slagen belangrijker is dan wat dan ook.",
    "Je mist honderd procent van de kansen die je nooit grijpt.",
    "Het echte gevaar ligt voor de meesten onder ons niet in het feit dat we te hoog reiken en missen, maar dat we te laag reiken en ons doel bereiken.",
    "De beste tijd om een boom te planten was 20 jaar geleden. De tweede beste tijd is nu.",
    "Je kunt nooit een oceaan oversteken, als je niet het lef hebt om de kust uit het zicht te verliezen.",
    "De man die meester is over zijn gedachten kan alles hebben en doen wat hij wil hebben en doen.",
    "Geluk is niet iets kant en klaar's. Het ontstaat vanuit je eigen daden."
];

// Declareer positie met initiele waarde 0
let position = 0;

// random generator constants
const MIN = 0;
const MAX = quotes.length-1;

// 
const button = document.querySelector(".btn-quote");
button.addEventListener("click", onRandomQuotes);
let output = document.querySelector(".title");

// genereert een willekeurig getal
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive() {
    const min = Math.ceil(MIN);
    const max = Math.floor(MAX);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function onRandomQuotes() {
   const random = getRandomIntInclusive();
   
   // output.innerHTML = quotes[random]; // <-- kan ook!
   output.textContent = quotes[random];
}

// niets bijzonders
function onFetch() {
    position++;
    
    // fetch data from api
    fetch(`https://jsonplaceholder.typicode.com/users/${position}`)
    .then(response => response.json())
    .then(json => output.innerHTML = JSON.stringify(json))
}




