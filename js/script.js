/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
 * @name quotes[]
 * This is an array of quote objects containing the quote, source, citation, year and info.
 * @type {Array} quotes
 */
const quotes = [
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    citation:
      "Benjamin Franklin Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/benjamin_franklin_383997",
    year: "January 17, 1706 - April 17, 1790",
    info: "American - Politician",
  },
  {
    quote: "Those that know, do. Those that understand, teach.",
    source: "Aristotle",
    citation:
      "Aristotle Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/aristotle_378331",
    year: "384 BC - 322 BC",
    info: "Greek - Philosopher",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation:
      "Mahatma Gandhi Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/mahatma_gandhi_109075",
    year: "October 2, 1869 - January 30, 1948",
    info: "Indian - Leader",
  },
  {
    quote: "What would life be if we had no courage to attempt anything?",
    source: "Vincent Van Gogh",
    citation:
      "Vincent Van Gogh Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/vincent_van_gogh_150781",
    year: "March 30, 1853 - July 29, 1890",
    info: "Dutch - Painter",
  },
  {
    quote:
      "He who is not courageous enough to take risks will accomplish nothing in life.",
    source: "Muhammad Ali",
    citation:
      "Muhammad Ali Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/muhammad_ali_148633",
    year: "January 17, 1942 - June 3, 2016",
    info: "American - Boxer",
  },
  {
    quote:
      "If I have seen further than others, it is by standing upon the shoulders of giants.",
    source: "Isaac Newton",
    citation:
      "Isaac Newton Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/isaac_newton_135885",
    year: "December 25, 1642 - March 20, 1727",
    info: "English - Mathematician",
  },
  {
    quote: "Quality means doing it right when no one is looking.",
    source: "Henry Ford",
    citation:
      "Henry Ford Quotes. (n.d.). BrainyQuote.com. Retrieved October 18, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/henry_ford_106096",
    year: "July 30, 1863 - April 7, 1947",
    info: "American - Businessman",
  },
];
// end quotes[];

/**
 * @name getRandomQuote()
 * This function stores a random number from 0 to one number less than the length of the quotes array. Then returns the quote object at the random numbers index.
 * @type {function} getRandomQuote
 * @returns {Object} quotes : A random quote object containing quote, source, citation, year, and info.
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
  if (randomQuoteObject.citation !== "") {
    quoteHTML += `<span class="citation">${randomQuoteObject.citation}</span>`;
  }
  if (randomQuoteObject.year !== "") {
    quoteHTML += `<span class="year">${randomQuoteObject.year}</span>`;
  }
  if (randomQuoteObject.info !== "") {
    quoteHTML += `<span class="info">${randomQuoteObject.info}</span>`;
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
