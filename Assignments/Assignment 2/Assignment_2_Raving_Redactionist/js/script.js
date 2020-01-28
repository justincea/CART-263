"use strict";

/********************************************************************
Activity 1 - Class 3
Justin Cea
*********************************************************************/
let $spans;
const INTERVAL_LENGTH = 500;
const PROBABILITY = 0.1;

$(document).ready(setup);

function setup() {
  setInterval(update, INTERVAL_LENGTH);
  $spans = $("spans");
  $("span").on("click", spanClicked);
  console.log("clicked");
}

function update() {
  console.log("Update");
  $("span").each(updateSpan);
}

function updateSpan() {
  console.log("Updating Span");
  let n = Math.random();
  if (n <= PROBABILITY) {
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

function spanClicked() {
  $(this).removeClass("revealed");
  $(this).addClass("redacted");
}
