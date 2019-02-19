// Console test
//require('./quoteList');

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Variable used later for quote string generation
let quoteToPrint = " ";

// Generates random number and returns the object at the array index
function getRandomQuote(quotes) {
  let randomNum = Math.floor(Math.random() * (quotes.length + 1));
  return quotes[randomNum];
}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  quoteToPrint += "<h1>" + randomQuote.quote + "</h1> - " + randomQuote.source;
  if (randomQuote.citation) {
    quoteToPrint += "<br>- " + randomQuote.citation;
  }
  else if (randomQuote.year) {
    quoteToPrint += "<br>- " + randomQuote.year;
  }
  return quoteToPrint;
}
document.write(printQuote());



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.