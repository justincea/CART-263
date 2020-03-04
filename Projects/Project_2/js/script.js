"use strict";

/********************************************************************

Uncensored Youtube
Justin Cea

Watch "kid friendly" videoes on the #1 video hosting service out there!

*********************************************************************/

$(document).ready(setup);
//annyang
//
//Runs annyang through chrome
if (annyang) {
  //Added commands to annyang, so that it listens to the commands that are called
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
  // Now that the commands have been defined, we send them to annyang
  // by using its .addCommands() function.
  annyang.addCommands(commands);
  //Allows annyang to listen with its .start function
  annyang.start();
}
//function setup
//
//Sets up a voice that will welcome the player to the page
function setup() {
  //Gets the responsive voice to say the welcoming message as soon as the page is loaded
  responsiveVoice.speak(
    "Welcome to the world's #1 video hosting service! Feel free to watch some entertaining videos, followed by the list below.!"
  );
}
//function peppaPig
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function peppaPig() {
  console.log("peppa");
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id="peppa"class = "appearImages" src="assets/images/peppa_pig.png">'
  ).appendTo("h1");
  console.log($(".appearImages"));
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("are you... entertained?");
}
//function elsa
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function elsa() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "elsa" class = "appearImages"src="assets/images/elsa.png">'
  ).appendTo("h1");
  console.log("elsa");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("isn't this just... lovely.");
}
//function mickeyMouse
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function mickeyMouse() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "mM" class = "appearImages"src="assets/images/mickey_mouse.jpg">'
  ).appendTo("h12");
  console.log("mickey");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("is this... what you're looking for?");
}
//function minnieMouse
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function minnieMouse() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id="mMe" class = "appearImages"src="assets/images/minnie_mouse.png">'
  ).appendTo("h4");
  console.log("minnie");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "it seems that baby mickey is pretending to die, that sounds like a fun prank idea to pull on our parents, don't you think?"
  );
}
//function spiderman
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function spiderman() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id="spiderman" class = "appearImages"src="assets/images/spiderman.gif">'
  ).appendTo("h5");
  console.log("spiderman");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "looks like they're having lots of fun! I would definetly love to try that one day"
  );
}
//function Masha
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function masha() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "masha" class = "appearImages"src="assets/images/masha.png">'
  ).appendTo("h6");
  console.log("masha");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "Hillarious. Wouldn't it be fun to switch faces with someone for a day?"
  );
}
//function Pony
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function pony() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "pony" class = "appearImages" src="assets/images/pony.gif">'
  ).appendTo("h7");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "I want one of those in my room, do u want me to search on the web for a my little pony synonymous to the following?!!"
  );
}
//function Spongebob
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function spongebob() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "spongebob" class = "appearImages"src="assets/images/spongebob.gif">'
  ).appendTo("h8");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("I wish I can do that with my lashes");
}
//function Baby
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function baby() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "baby" class = "appearImages"src="assets/images/baby.png">'
  ).appendTo("h9");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "I want to drink what he's drinking, it seems delightful"
  );
}
//function daveEva
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function daveEva() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $('<img id= "da" class = "appearImages"src="assets/images/da.png">').appendTo(
    "h10"
  );
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("a monkey family... how wonderful...");
}
//function fingerFamily
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function fingerFamily() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "fingerFamily" class = "appearImages"src="assets/images/finger_family.gif">'
  ).appendTo("h11");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak(
    "I also want to cut my family and put them on ...my fingers..., would you like me to search on the web on ways to cut your family and put them on your fingers??"
  );
}
//function johnny
//
//The following functions allow the images to appear with the command .appendTo their corresponding headings
function johnny() {
  //removes all images that are placed within the .appearImages class
  $(".appearImages").remove();
  $(
    '<img id= "johnny" class = "appearImages"src="assets/images/johnny.jpg">'
  ).appendTo("h12");
  //Gets the responsive voice to say the following message
  responsiveVoice.speak("Their dance moves are exquisite");
}
