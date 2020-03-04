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
    "I want to watch frozen": function() {
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
    },
    "I want to watch baby TV": function() {
      baby();
    },
    "I want to watch Dave and Eva": function() {
      daveEva();
    },
    "I want to watch Finger Family": function() {
      fingerFamily();
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
  $(".appearImages").remove();
  $(
    '<img id="peppa"class = "appearImages" src="assets/images/peppa_pig.png">'
  ).appendTo("h1");
  console.log($(".appearImages"));
}
function elsa() {
  $(".appearImages").remove();
  $(
    '<img id= "elsa" class = "appearImages"src="assets/images/elsa.png">'
  ).appendTo("h1");
  console.log("elsa");
}
function mickeyMouse() {
  $(".appearImages").remove();
  $(
    '<img id= "mM" class = "appearImages"src="assets/images/mickey_mouse.jpg">'
  ).appendTo("h3");
  console.log("mickey");
}
function minnieMouse() {
  $(".appearImages").remove();
  $(
    '<img id="mMe" class = "appearImages"src="assets/images/minnie_mouse.png">'
  ).appendTo("h4");
  console.log("minnie");
}
function spiderman() {
  $(".appearImages").remove();
  $(
    '<img id="spiderman" class = "appearImages"src="assets/images/spiderman.gif">'
  ).appendTo("h5");
  console.log("spiderman");
}
function masha() {
  $(".appearImages").remove();
  $(
    '<img id= "masha" class = "appearImages"src="assets/images/masha.png">'
  ).appendTo("h6");
  console.log("masha");
}

function pony() {
  $(".appearImages").remove();
  $(
    '<img id= "pony" class = "appearImages" src="assets/images/pony.gif">'
  ).appendTo("h7");
}
function spongebob() {
  $(".appearImages").remove();
  $(
    '<img id= "spongebob" class = "appearImages"src="assets/images/spongebob.gif">'
  ).appendTo("h8");
}

function baby() {
  $(".appearImages").remove();
  $(
    '<img id= "baby" class = "appearImages"src="assets/images/baby.png">'
  ).appendTo("h9");
}
function daveEva() {
  $(".appearImages").remove();
  $('<img id= "da" class = "appearImages"src="assets/images/da.png">').appendTo(
    "h10"
  );
}
function fingerFamily() {
  $(".appearImages").remove();
  $(
    '<img id= "fingerFamily" class = "appearImages"src="assets/images/finger_family.gif">'
  ).appendTo("h11");
}
