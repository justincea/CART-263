"use strict";

/********************************************************************
Project 1
Justin Cea
*********************************************************************/
let $chest;
let $coin;
let $coin2;
let $coin3;
let $coin4;

let $revertingcoin;
let $revertingcoin2;

let random;
let message = [
  "Why are all the coins out of the chest?!",
  "Put the coins back where you found them",
  "Are you trying to steal the coins?",
  "How does it feel to have these coins?",
  "How do you feel?",
  "Have you finished putting them away?",
  "What are you doing Sisyphus?",
  "I thought you wanted to collect these coins?",
  "Don't you want to be wealthy?"
];

let coinSFX = new Audio("assets/sounds/coinSound.mp3");

$(document).ready(setup);

function setup() {
  $chest = $("#chest");
  $chest.droppable({
    drop: onDrop
  });
  $revertingcoin = $("#revertingcoin");
  $revertingcoin.draggable({
    revert: "valid"
  });

  $revertingcoin2 = $("#revertingcoin2");
  $revertingcoin2.draggable({
    revert: "valid"
  });
  $coin = $("#coin");
  $coin.draggable();

  $coin2 = $("#coin2");
  $coin2.draggable();

  $coin3 = $("#droppablecoin3");
  $coin3.draggable();

  $coin4 = $("#droppablecoin4");
  $coin4.draggable();
}

function onDrop(event, ui) {
  console.log("Dropped");
  $droppablecoin.remove();

  $("#dialogues").text(message[random]);
  random = Math.floor(Math.random() * message.length);
}
