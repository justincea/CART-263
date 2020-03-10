"use strict";

/********************************************************************

Justin Cea
Assignment 4 - Condiments Cacophony

Chooses random words from local JSON data to fill out a sentence
describing a condiment in an exaggerated way (adverbs) based on cats, rooms and sausages.

Uses:

Corpora
https://github.com/dariusk/corporaelow!

*********************************************************************/

$(document).ready(setup);
// The first thing we need to do is load the data we're going
// to use to get random words.
//
// For that we use jQuery's .getJSON() function, which we give
// the location of the file, and a function to call when the data
// is available...
function setup() {
  $.getJSON("data/data.json")
    .done(dataLoaded)
    .fail(dataNotLoaded);
  // Resets the whole page when mouse is pressed.
  $(document).on("click", mousePressed);
}
// dataLoaded (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function dataLoaded(data) {
  console.log(data);
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let randomCondiment = getRandomArrayElement(data.condiments);
  console.log(randomCondiment);
  // Assumes the condiment is singular
  let verb = "is";
  // Checks if the last latter of the condiment end with an 's'
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
    // If so, assume it's plural (this is a flawed assumption)
    verb = "are";
  }
  console.log(verb);

  let determiners = "a";
  if (
    randomCondiment.charAt(0) === "A" ||
    randomCondiment.charAt(0) === "E" ||
    randomCondiment.charAt(0) === "I" ||
    randomCondiment.charAt(0) === "O" ||
    randomCondiment.charAt(0) === "U"
  ) {
    determiners = "an";

    console.log(randomCondiment.charAt(0));
  }
  //Same thing for the cat
  let randomCat = getRandomArrayElement(data.cats);
  console.log(randomCat);
  //Again for the Room
  let randomRoom = getRandomArrayElement(data.rooms);
  console.log(randomRoom);
  //Again for the sausage
  let randomSausage = getRandomArrayElement(data.sausages);
  console.log(randomSausage);
  //Finally, the Adverb
  let randomAdverb = getRandomArrayElement(data.adverbs);
  console.log(randomAdverb);
  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
  let randomDescription = `${randomCondiment} and ${randomSausage} ${verb} ${randomAdverb} like ${determiners} ${randomCat} ${randomRoom}`;
  //Assigning the description to the text ather than the actual page
  $("body").text(randomDescription);
}

// dataNotLoaded()
//
// Checks if the JSON does not load for some reason.
// Reports the error to the console.
function dataNotLoaded(request, text, error) {
  console.error("you ain't doin it right, periodt!");
}
// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
// mousePressed
//
// Loads data using $.getJSON
function mousePressed() {
  $.getJSON("data/data.json", dataLoaded);

  console.log("mouseIsPressed");
}
