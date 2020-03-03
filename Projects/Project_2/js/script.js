"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

if (annyang) {
  var commands = {
    "I want to watch peppa pig": function() {
      peppaPig();
    },
    "I want to watch elsa": function() {
      elsa();
    },
    "I want to watch minnie mouse": function() {
      minnieMouse();
    },
    "I want to watch mickey mouse": function() {
      mickeyMouse();
    },
    "I want to watch spiderman": function() {
      spiderman();
    },
    "I want to watch masha": function() {
      masha();
    },
    "I want to watch spongebob": function() {
      spongebob();
    },
    "I want to watch johnny": function() {
      johnny();
    },
    "I want to watch my little pony": function() {
      pony();
    }
  };
  annyang.addCommands(commands);

  annyang.start();
}

function setup() {}
$("#egg").click(function() {
  console.log("image is clicked");
});
function peppaPig() {
  console.log("peppa");
  $("img").remove();
  $('<img id="peppa" src="assets/images/peppa_pig.png">').appendTo("h1");
}
function elsa() {
  $("img").remove();
  $('<img id= "elsa" src="assets/images/elsa.png">').appendTo("h1");
  console.log("elsa");
}
function mickeyMouse() {
  $("img").remove();
  $('<img id= "mM" src="assets/images/mickey_mouse.jpg">').appendTo("h3");
  console.log("mickey");
}
function minnieMouse() {
  $("img").remove();
  $('<img id="mMe" src="assets/images/minnie_mouse.png">').appendTo("h4");
  console.log("minnie");
}
function spiderman() {
  $("img").remove();
  $('<img id="spiderman" src="assets/images/spiderman.gif">').appendTo("h5");
  console.log("spiderman");
}
function masha() {
  $("img").remove();
  $('<img id= "masha" src="assets/images/masha.png">').appendTo("h6");
  console.log("masha");
}

function pony() {
  $("img").remove();
  $('<img id= "pony" src="assets/images/pony.gif">').appendTo("h7");
}
