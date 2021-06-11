const quotes = [
  {
    quote: "Studies serve for delight, for ornament and for ability.",
    author: "Sir Francis Bacon",
  },
  {
    quote: "Having nothing, nothing can he lose",
    author: "William Shakespeare",
  },
  {
    quote:
      "You never really understand a person until you consider things from his point of view – until you climb into his skin and walk around in it.",
    author: "Harper Lee",
  },
  {
    quote: "If? There is no if. There is only what is. What was? What will be.",
    author: "Nafisa Haji",
  },
  {
    quote:
      "Tis education forms the common mind; just as the twig is bent, the tree’s inclined.",
    author: "Alexander Pope",
  },
  {
    quote:
      "A ratio of failures is built into the process of writing. The wastebasket has evolved for a reason.",
    author: "Margaret Atwood",
  },
  {
    quote: "When eating an elephant, take one bite at a time.",
    author: "Creighton Abrams",
  },
  {
    quote: "The road to Hell is paved with adverbs.",
    author: "Stephen King",
  },
  {
    quote: "You do stuff, and then it’s done.",
    author: "Lisa Margreet Payne",
  },
  {
    quote:
      "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    author: "Stephen King",
  },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
