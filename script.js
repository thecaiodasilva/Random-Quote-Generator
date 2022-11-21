let quote = document.getElementById("quote"); //citação
let author = document.getElementById("author"); //autor
let btn = document.getElementById("btn"); //butão que vai gerar uma nova citação e autor

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);