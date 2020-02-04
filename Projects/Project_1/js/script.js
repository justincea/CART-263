"use strict";

/********************************************************************
Project 1
Justin Cea
*********************************************************************/
let $chest;
let $droppablecoin;
let $revertingcoin;

let coinSFX = new Audio("assets/sounds/coinSound.mp3");

$(document).ready(setup);

function setup() {
  $chest = $("#chest");
  $chest.droppable({
    drop: onDrop
  });
  $droppablecoin = $("#droppablecoin");
  $droppablecoin.draggable();

  $revertingcoin = $("#revertingcoin");
  $revertingcoin.draggable({
    revert: "valid"
  });
}

function onDrop() {
  console.log("Dropped");
  $droppablecoin.remove();
}
function revertingcoinDrop() {
  $revertingcoin.draggable();
}
