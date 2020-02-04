"use strict";

/********************************************************************
Activity - Eat Up
Justin Cea
*********************************************************************/
let $chest;
let $coin;

$(document).ready(setup);

function setup() {
  $chest = $("#chest");
  $chest.droppable({
    drop: onDrop
  });

  $coin = $("#coin");
  $coin.draggable();
}

function onDrop(event, ui) {
  console.log("Dropped");
  ui.draggable.remove();
}
