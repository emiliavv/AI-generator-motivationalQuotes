function generateQuote(event) {
    event.preventDefault();
    let quote = document.querySelector(".quote")
    new Typewriter('.quote', {
  strings: "Hello",
  autoStart: true,
  delay: 200,
  cursor:"🤍"
});
}

let submit = document.querySelector("form")
submit.addEventListener("submit", generateQuote);