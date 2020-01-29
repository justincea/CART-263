"use strict";

/********************************************************************
Activity - Eat Up
Justin Cea
*********************************************************************/
let $mouth;
let $fly;

$(document).ready(setup);

function setup() {
  $mouth = $("#mouth");
  $mouth.droppable({
    drop: onDrop
  });

  $fly = $("#fly");
  $fly.draggable();
}

function onDrop(event, ui) {
  console.log("Dropped");
  ui.draggable.remove();

  setInterval(chew, 250);
}

function chew() {
  if ($mouth.attr("src") === "assets/images/mouth_open.png") {
    $mouth.attr("src", "assets/images/mouth_closed.png");
  } else {
    $mouth.attr("src", "assets/images/mouth_open.png");
  }
}
