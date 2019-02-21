// Generates random number and returns the object at the array index of the generated number
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNum];
}

// Generates random number from 0 to array length, sets the number at that index to a hex value, and sets the background property of the body to that hex color
function getRandomBgColor() {
  let colors = ["00c2d1", "ffae19", "002344", "008000", "808080", "e600e6", "33ccff"];
  let colorNum = Math.floor(Math.random() * colors.length);
  let color = "#" + colors[colorNum];
  document.getElementById("main").style.background = color;
}

// Sets "quote-box" div to the completed string
function print(quoteToPrint) {
  var div = document.getElementById("quote-box");
  div.innerHTML = quoteToPrint;
}

// Brings in a quote from the getRandomQuote() function
// Adds the properties of the quote object to a string, if they exist, and calls print() to print out the completed string
// Calls getRandomBgColor to change the background color
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let quoteToPrint = '<h1 class="quote">' + randomQuote.quote + '</h1> <p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    quoteToPrint += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    quoteToPrint += '<span class="year">' + randomQuote.year + "</span>";
  }
  if (randomQuote.tag) {
    quoteToPrint += '<span class="tag">' + randomQuote.tag + "</span>";
  }
  quoteToPrint += "</p>";
  print(quoteToPrint);
  getRandomBgColor();
}

// Automatically changes the quote and background color after 20 seconds
setInterval(printQuote, 20000);

// Do not change line below
document.getElementById('loadQuote').addEventListener("click", printQuote, false);