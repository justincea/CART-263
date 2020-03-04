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

function setup() {
  responsiveVoice.speak(
    "Welcome to the world's #1 video hosting service! Feel free to watch some entertaining videos, followed by the list below.!"
  );
}
function peppaPig() {
  console.log("peppa");
  $(".appearImages").remove();
  $(
    '<img id="peppa"class = "appearImages" src="assets/images/peppa_pig.png">'
  ).appendTo("h1");
  console.log($(".appearImages"));
  responsiveVoice.speak("are you... entertained?");
}
function elsa() {
  $(".appearImages").remove();
  $(
    '<img id= "elsa" class = "appearImages"src="assets/images/elsa.png">'
  ).appendTo("h1");
  console.log("elsa");
  responsiveVoice.speak("isn't this just... lovely.");
}
function mickeyMouse() {
  $(".appearImages").remove();
  $(
    '<img id= "mM" class = "appearImages"src="assets/images/mickey_mouse.jpg">'
  ).appendTo("h12");
  console.log("mickey");
  responsiveVoice.speak("is this... what you're looking for?");
}
function minnieMouse() {
  $(".appearImages").remove();
  $(
    '<img id="mMe" class = "appearImages"src="assets/images/minnie_mouse.png">'
  ).appendTo("h4");
  console.log("minnie");
  responsiveVoice.speak(
    "it seems that baby mickey is pretending to die, that sounds like a fun prank idea to pull on our parents, don't you think?"
  );
}
function spiderman() {
  $(".appearImages").remove();
  $(
    '<img id="spiderman" class = "appearImages"src="assets/images/spiderman.gif">'
  ).appendTo("h5");
  console.log("spiderman");
  responsiveVoice.speak(
    "looks like they're having lots of fun! I would definetly love to try that one day"
  );
}
function masha() {
  $(".appearImages").remove();
  $(
    '<img id= "masha" class = "appearImages"src="assets/images/masha.png">'
  ).appendTo("h6");
  console.log("masha");
  responsiveVoice.speak(
    "Hillarious. Wouldn't it be fun to switch faces with someone for a day?"
  );
}

function pony() {
  $(".appearImages").remove();
  $(
    '<img id= "pony" class = "appearImages" src="assets/images/pony.gif">'
  ).appendTo("h7");
  responsiveVoice.speak(
    "I want one of those in my room, do u want me to search on the web for a my little pony synonymous to the following?!!"
  );
}
function spongebob() {
  $(".appearImages").remove();
  $(
    '<img id= "spongebob" class = "appearImages"src="assets/images/spongebob.gif">'
  ).appendTo("h8");
  responsiveVoice.speak("I wish I can do that with my lashes");
}

function baby() {
  $(".appearImages").remove();
  $(
    '<img id= "baby" class = "appearImages"src="assets/images/baby.png">'
  ).appendTo("h9");
  responsiveVoice.speak(
    "I want to drink what he's drinking, it seems delightful"
  );
}
function daveEva() {
  $(".appearImages").remove();
  $('<img id= "da" class = "appearImages"src="assets/images/da.png">').appendTo(
    "h10"
  );
  responsiveVoice.speak("a monkey family... how wonderful...");
}
function fingerFamily() {
  $(".appearImages").remove();
  $(
    '<img id= "fingerFamily" class = "appearImages"src="assets/images/finger_family.gif">'
  ).appendTo("h11");
  responsiveVoice.speak(
    "I also want to cut my family and put them on ...my fingers..., would you like me to search on the web on ways to cut your family and put them on your fingers??"
  );
}

function johnny() {
  $(".appearImages").remove();
  $(
    '<img id= "johnny" class = "appearImages"src="assets/images/johnny.jpg">'
  ).appendTo("h12");
  responsiveVoice.speak("Their dance moves are exquisite");
}
