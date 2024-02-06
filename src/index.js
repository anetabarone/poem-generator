function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e27ce42b4a8d3b5ob7fdcdeff5d0a94t";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to write a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include a title. Sign the poem with 'She Codes AI' inside a <strong> element at the end of the poem and not at the beginning.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Generating a poem...}`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
