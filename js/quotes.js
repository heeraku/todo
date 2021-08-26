const quotes = [
  {
    quote : "You can learn a little from victory, you can learn everything from defeat.",
    author : "Christy Mathewson", 
  },
  {
    quote : "Age is no guarantee of maturity.",
    author : "Lawana Blackwell", 
  },
  {
    quote : "A friend to all is a friend to none.", 
    author : "Aristotle", 
  },
  {
    quote : "Those who do not want to imitate anything, produce nothing.",
    author : "Salvador Dali", 
  },
  {
    quote : "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
    author : "Winston Churchill", 
  },
  {
    quote : "Well done is better than well said.", 
    author : "Benjamin Franklin", 
  },
  {
    quote : "Excellence is the best deterrent to racism or sexism.", 
    author : "Oprah Winfrey", 
  },
  {
    quote : "Predicting rain doesn’t count. Building arks does.", 
    author : "Warren Buffett", 
  },
  {
    quote : "Happy people plan actions, they don’t plan results.", 
    author : "Dennis Waitley", 
  },
  {
    quote : "Action is the foundational key to all success.", 
    author : "Pablo Picasso", 
  }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;