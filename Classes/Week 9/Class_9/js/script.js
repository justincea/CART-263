"use strict";

/*****************

Justin Cea
Class 9 - Tarot Reading

*************/
let tarot;
function setup() {}
function mousePressed() {
  loadJSON("data/tarot_interpretations.json", tarotLoaded);
}
function tarotLoaded(data) {
  tarot = data.tarot_interpretations; // We only want the actual cards
  makePrediction();
}
function makePrediction() {
  let card = random(tarot); // Choose a random card
  let cardName = card.name; // Get the name
  let fortune = random(card.fortune_telling); // Choose a random fortune
  let prediction = `You have chosen ${cardName}! ${fortune}!`; // Make a prediction string
  console.log(prediction); // Say it
}
