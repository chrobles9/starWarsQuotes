/*******************************************
 * @author Carlos Robles
 * @summary Star Wars Random Quote Generator
 * Created Jan 25 2021
 *******************************************/

// Quote data
const quoteData = [
  {
    quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    source: "Leia Organa",
    citation: "A New Hope",
    year: 1977
  },
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader",
    citation: "A New Hope",
    year: 1977
  },
  {
    quote: "The Force will be with you. Always.",
    source: "Obi-Wan Kenobi",
    citation: "A New Hope",
    year: 1977
  },
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "Now, young Skywalker, you will die.",
    source: "Emperor Palpatine",
    citation: "Return of the Jedi",
    year: 1983
  },
  {
    quote:
      "I'll never turn to the dark side. You've failed, your highness. I am a Jedi, like my father before me.",
    source: "Luke Skywalker",
    citation: "Return of the Jedi",
    year: 1983
  },
  {
    quote:
    "WAGRRRRWWGAHH." ,
    source: "Chewbacca"
  },
  {
    quote:
      "I’m one with the Force. The Force is with me.",
    source: " Chirrut Îmwe",
    citation: "Rogue One: A Star Wars Story",
    year: 2016
  },
  {
    quote:
      "Chewie, we’re home.",
    source: "Han Solo",
    citation: "The Force Awakens",
    year: 2015
  },
  {
    quote:
      "I am no Jedi.",
    source: "Ahsoka Tano",
    citation: "Star Wars Rebels",
    year: 2016
  },
  {
    quote:
      "Never get between a Mandalorian and a weapons package",
    source: "Sabine Wren",
    citation: "Star Wars Rebels"
  },
  {
    quote:
      "Remember, my dear Obi-Wan. I’ve loved you always. I always will.",
    source: "Duchess Satine Kryze",
    citation: "Star Wars: The Clone Wars",
    year: 2011
  },
];

// DONE: dynamic year in footer 
function getFooterYear(){
  let copyYear = new Date().getFullYear();
  return document.getElementById('copyYear').innerHTML = `&copy; ${copyYear}`;
}

// Get a random quote from data
function getQuote() {
  // Use math random function in combination with the length of the array of objects to pick a random number and return that quote
  let randomNum = Math.floor(Math.random() * quoteData.length);
  return quoteData[randomNum];
}

// DONE: load new quotes dynamically
function loadQuote() {
  // gets random quote object data and store it in variable
  let randomQuote = getQuote();
  let quoteHTML = `<p class="quote">"${randomQuote.quote}"</p>`;

  // Source check
  if ("source" in randomQuote) {
    quoteHTML += `<p class= "source">-<span class = "sourcePerson">${randomQuote.source}</span>, `;
  } else {
    quoteHTML += '<p class= "source">-<span class = "sourcePerson">Unknown Source</span>, ';
  }
  // Citation check
  if ("citation" in randomQuote) {
    quoteHTML += `<span class = "citation">${randomQuote.citation}</span>, `;
  } else {
    quoteHTML += '<span class = "citation">Unknown Citation</span>, ';
  }
  // Year check and close paragraph tag
  if ("year" in randomQuote) {
    quoteHTML += `<span class = "year">${randomQuote.year}</span></p>`;
  } else {
    quoteHTML += '<span class = "year">Unknown Year</span></p>';
  }

  return (document.getElementById("quoteOutput").innerHTML = quoteHTML);
}


// Set current copywrite year in footer 
  getFooterYear();

// DONE: Make button work with event listeners
document
  .getElementById("loadQuoteBtn")
  .addEventListener("click", loadQuote, false);
