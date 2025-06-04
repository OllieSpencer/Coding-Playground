// Define the index to keep track of the current option
let currentIndex = 0;

// Function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

// Function for network error message
const sent1 = [
  "Ashed",
  "On one",
  "Let's link",
];

// Function to cycle through the network error messages
const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");

  // Set the text based on the current index in the options array
  paragraph.innerText = sent1[currentIndex];

  // Increment the index, and reset it if it reaches the end of the array
  currentIndex = (currentIndex + 1) % sent1.length;
}
buttonRetry.addEventListener("click", changeResultsError);
// End of network error function

document.getElementById("subject").addEventListener("change", dropdownFunction);

function dropdownFunction() {
  const x = document.getElementById("subject").value;
  const subjectContent = document.getElementById("subject-content");

  // Clear content if 'Select a slime' is selected
  if (x === "Select a slime") {
    subjectContent.innerHTML = '';  // Clear the content when 'Select a slime' is selected
  } else if (x === "waheed") {
    subjectContent.innerHTML = "<img src='https://cdn.glitch.global/c18721b2-6c9b-412b-9e5f-8acb99043630/waheed.jpg?v=1742188022270' alt='Waheed' />";
  } else if (x === "bobby") {
    subjectContent.innerHTML = "<img src='https://cdn.glitch.global/c18721b2-6c9b-412b-9e5f-8acb99043630/2A591A09-75E4-40DD-85A4-F1355E1C8BBA.JPG?v=1742187265104' alt='Bobby' />";
  } else if (x === "felicé") {
    subjectContent.innerHTML = "<img src='https://cdn.glitch.global/c18721b2-6c9b-412b-9e5f-8acb99043630/7BFA0DC2-D3DD-4447-A643-C6E49E699D13.JPG?v=1742188196845' alt='Felicé' />";
  } else if (x === "pk") {
    subjectContent.innerHTML = "<img src='https://cdn.glitch.global/c18721b2-6c9b-412b-9e5f-8acb99043630/000004.JPG?v=1742188652414' alt='PK' />";
  } else if (x === "geverson") {
    subjectContent.innerHTML = "<img src='https://cdn.glitch.global/c18721b2-6c9b-412b-9e5f-8acb99043630/IMG_8575.PNG?v=1742188981502' alt='Geverson' />";
  }
}

// Start of haiku function
// Lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "red dogs",
  "chicken breast",
  "head torch?",
  "newman",
  "joodle",
  "george",
  "ollie's never caught a thing",
  "chunc eats fish out the bay",
  "alibaba rods",
];
const sevenSyllables = [
  "ollie where's the bell gone?",
  "there's some eshays on the pier",
  "and now we wait",
  "how sweet it is boys",
  "fuckin toads",
];

// Code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
// End of haiku function

// Start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");

// Search function constants
// Play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "aren't here to fuck spiders",
  "allow it",
  "australian chalk",
  "beers at state",
  "barrister needed asap",
  "bulk billed legal advice",
  "clinic in progress",
  "caught a snapper at the groyne",
  "children not allowed",
  "delete a mouse pillow",
  "declans please",
  "don't use all the white",
  "easy money",
  "emotional bean moment",
  "freaks clean it up",
];

// Search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );

  // Clear existing words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }

  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// End search function code

// Start of code for poem

const subjects =
  "baddies, thugs, street kids, tourists, fishermen, I".split(
    ","
  ),
  verbs =
    "stoop, smoke cigs, drink beers, scoff tapas, avoid cops, find spots, submerge, make friends".split(
      ","
    ),
  objects =
    "at the epic seafood place down by the pier, at the nude beach, at Marta's house, at the tobacconist, at the greengrocer, at the super fun bar in that plaza, at the main beach, in the back alleys".split(
      ","
    );

// Set up the counter
let counter = 0;

// A function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // Create the line
  const line = document.createElement("div");
  if (indent === true) {
    // Indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);

  // Get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}

// Add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}

// Remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}

// Implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // If the second or fourth line, add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);