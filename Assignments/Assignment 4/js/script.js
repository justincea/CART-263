"use strict";

/********************************************************************

Justin Cea
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup() {
  $.getJSON("data/data.json")
    .done(dataLoaded)
    .fail(dataNotLoaded);
  $(document).on("click", mousePressed);
}

function dataLoaded(data) {
  console.log(data);
  let randomCondiment = getRandomArrayElement(data.condiments);
  console.log(randomCondiment);
  //
  let verb = "is";
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
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
  //
  let randomCat = getRandomArrayElement(data.cats);
  console.log(randomCat);
  //
  let randomRoom = getRandomArrayElement(data.rooms);
  console.log(randomRoom);
  //
  let randomSausage = getRandomArrayElement(data.sausages);
  console.log(randomSausage);
  //
  let randomAdverb = getRandomArrayElement(data.adverbs);
  console.log(randomAdverb);
  //
  let randomDescription = `${randomCondiment} and ${randomSausage} ${verb} ${randomAdverb} like ${determiners} ${randomCat} ${randomRoom}`;
  $("body").text(randomDescription);
}

function dataNotLoaded(request, text, error) {
  console.error("you ain't doin it right, periodt");
}

function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function mousePressed() {
  $.getJSON("data/data.json", dataLoaded);

  console.log("mouseIsPressed");
}
