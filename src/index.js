function generateQuote(event) {
    let quote = document.querySelector(".quote");
    new Typewriter('.quote', {
  strings: "Hello",
  autoStart: true,
  delay: 200,
  cursor:"🤍"
});
}

let button = document.querySelector("button");
button.addEventListener("click", generateQuote);