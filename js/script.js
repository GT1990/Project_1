/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
 * @name quotes[]
 * This is an array of quote objects containing the quote and source with optionals such as citation, year and tags.
 * @type {Array} quotes
 */
const quotes = [
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    tags: ["American", "Politician"],
  },
  {
    quote: "Those that know, do. Those that understand, teach.",
    source: "Aristotle",
    tags: ["Greek", "Philosopher"],
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes ",
    citation: "The Adventures of Sherlock Holmes",
    year: "1929",
  },
  {
    quote:
      "He who is not courageous enough to take risks will accomplish nothing in life.",
    source: "Muhammad Ali",
    tags: ["American", "Boxer"],
  },
  {
    quote: "May the Force be with you.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars",
    year: "1977",
    tags: ["Movie", "Science Fiction"],
  },
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    source: "Dorothy",
    citation: "The Wizard of Oz",
    year: "1939",
  },
];
// end quotes[];

/**
 * @name getRandomQuote()
 * This function stores a random number from 0 to one number less than the length of the quotes array. Then returns the quote object at the random numbers index.
 * @type {function} getRandomQuote
 * @returns {Object} quotes : A random quote object containing quote, source, citation, year, and tags.
 */
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // console.log(
  //   `Random Number: ${randomNumber}. Random Quote: `,
  //   quotes[randomNumber]
  // );
  return quotes[randomNumber];
}
// end getRandomQuote();

/**
 * @name randomBackgroundColor()
 * Extra Credit: This function randomly selects a six digit hex color and changes the body element background color.
 */
function randomBackgroundColor() {
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  function createRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return color;
  }
  document.body.style.backgroundColor = createRandomColor();
}
// end randomBackgroundColor

/**
 * @name timer
 * Extra Credit: Automatically refreshes the quote every 10 seconds
 */
var timer = setInterval(printQuote, 10000);

/**
 * @name printQuote()
 * This function calls the randomQuoteObject recieving a random quote object then creates the HTML required to print the quote. Finally changing the inner HTML of the #quote-box
 */
function printQuote() {
  const randomQuoteObject = getRandomQuote();
  let quoteHTML = `<p class="quote">${randomQuoteObject.quote}</p><p class="source">${randomQuoteObject.source}`;
  if ("citation" in randomQuoteObject) {
    quoteHTML += `<span class="citation">${randomQuoteObject.citation}</span>`;
  }
  if ("year" in randomQuoteObject) {
    quoteHTML += `<span class="year">${randomQuoteObject.year}</span>`;
  }
  if ("tags" in randomQuoteObject) {
    quoteHTML += `<span class="tags">${randomQuoteObject.tags.join(
      ", "
    )}</span>`;
  }
  quoteHTML += "</p>";
  document.getElementById("quote-box").innerHTML = quoteHTML;
  randomBackgroundColor(); // Extra Credit
}
// end printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
