function displayQuote(response) {
  new Typewriter('.quote', {
  strings: response.data.answer,
  autoStart: true,
  delay: 100,
  cursor:"🤍"
});
}

function generateQuote(event) {
    event.preventDefault();
    let keyWord = input.value
    let key = "a843167aoe08cc08teb23657f974ea65"
    let prompt = `Write motivational quote, that lasts 1 to top 2 senteces. Take into considertion emotion/feeling/mood, which is: ${keyWord}`
    let context = "You are a great AI, that specialise in writing unique, smart, uplifting motivational quotes according to people moods and feelings, who almost never repeats quotes. "
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`
    let quote = document.querySelector(".quote")
    quote.innerHTML = "⏳"
    axios.get(url).then(displayQuote)
}

let submit = document.querySelector("form")
submit.addEventListener("submit", generateQuote);