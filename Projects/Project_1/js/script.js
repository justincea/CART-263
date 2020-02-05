"use strict";

/********************************************************************
Project 1
Justin Cea

Lucky Sisyphus, he's given the chance to become wealthy, but with his greediness,
one coin is never enough. 
*********************************************************************/
//Declared variable for the chest and coins.
let $chest;
let $coin;
let $coin2;
let $coin3;
let $coin4;
let $coin5;

let $revertingcoin;
let $revertingcoin2;

let random;
//An Array with random messages stored in them, called by ZeusMessages
let message = [
  "Why are all the coins out from the chest?!",
  "Put the coins back where you found them",
  "Are you trying to steal the coins?",
  "How does it feel to have these coins?",
  "Have you finished collecting the coins?",
  "Doing great, Sisyphus...",
  "I thought you wanted to collect these coins?",
  "Don't you want to be wealthy?",
  "Keep going, you're almost done...",
  "You'll be mad RICH with all dem coins boyo!"
];
// Stores Music
let coinSFX = new Audio("assets/sounds/coinSound.mp3");

$(document).ready(setup);
//function setup
function setup() {
  $chest = $("#chest"); //link the chest by calling its id from the index.html
  $chest.droppable({
    //allows chest to have a droppable property
    drop: onDrop
  });
  $revertingcoin = $("#revertingcoin"); //links the reverting coin by calling its id from the index.html
  $revertingcoin.draggable({
    //Declares it as a draggable object
    revert: "valid" //Revert command won't allow the object to drop within the chest
  });

  $revertingcoin2 = $("#revertingcoin2"); //link the reverting coin by calling its id from the index.html
  $revertingcoin2.draggable({
    //Declares it as a draggable object
    revert: "valid" //Revert command won't allow the object to drop within the chest
  });
  ////links the droppable coins to its proper class from the index.html
  $coin = $(".coin");
  $coin.draggable(); //Declares it as a draggable object

  $coin2 = $(".coin2");
  $coin2.draggable(); //Declares it as a draggable object

  $coin3 = $(".coin3");
  $coin3.draggable(); //Declares it as a draggable object

  $coin4 = $(".coin4");
  $coin4.draggable(); //Declares it as a draggable object

  $coin5 = $(".coin5");
  $coin5.draggable(); //Declares it as a draggable object
}
//function onDrop
//
//This function checks if objects(coins) are being dropped in the chest.
// if objects are dropped into chest, it projects messages to the user.
function onDrop(event, ui) {
  console.log("Dropped");

  $coin.draggable();
  $coin2.draggable();
  $coin3.draggable();
  $coin4.draggable();
  $coin5.draggable();

  $("#dialogues").text(message[random]);
  random = Math.floor(Math.random() * message.length);
  //After objects (coins) are placed on/in box, they are removed.
  if ($(ui.draggable).hasClass("coin") === true) {
    $(ui.draggable).remove();
  }
  if ($(ui.draggable).hasClass("coin2") === true) {
    $(ui.draggable).remove();
  }
  if ($(ui.draggable).hasClass("coin3") === true) {
    $(ui.draggable).remove();
  }
  if ($(ui.draggable).hasClass("coin4") === true) {
    $(ui.draggable).remove();
  }
  if ($(ui.draggable).hasClass("coin5") === true) {
    $(ui.draggable).remove();
  }
  //Plays Coin Sound FX after each drop.
  coinSFX.play();
}
