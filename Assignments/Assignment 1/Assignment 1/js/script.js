"use strict";

/********************************************************************

Pixel painter
Assignment 1
Justin Cea

A small DOM-based program for "painting" on div-based pixels.

*********************************************************************/

// Constants
const NUM_PIXELS = 1000;
const PIXEL_REVERT_DELAY = 1000;
const DEFAULT_COLOR = "black";

// Set up our starting function for when the page loads
window.onload = setup;
//Declared variable for Rotation
let rotation = 0;
// setup
//
// Adds DIVs to the page along with event listeners that will allow
// then to change color on mouseover.
function setup() {
  // A loop that runs once per pixel we need
  for (let i = 0; i < NUM_PIXELS; i++) {
    // Create a DIV and store it in a variable
    let pixel = document.createElement("div");
    // Adds the 'pixel' class to the new element
    pixel.setAttribute("class", "pixel");
    // Adds a mouseover handler to the new element
    pixel.addEventListener("mouseover", paint);

    // Adds the element to the body of the page
    document.body.appendChild(pixel);
  }
  // Adds an element in which handles rotation
  document.addEventListener("keydown", rotate);
}

// paint
//
// Called by the mouseover event handler on each pixel. Changes
// the pixel's color and sets a timer for it to revert
function paint(e) {
  // e.target contains the specific element moused over so let's
  // save that into a variable for clarity.
  let pixel = e.target;
  // Change the background color of the element to a Random Color by calling the RandomColor function
  pixel.style.backgroundColor = RandomColor();
  // Set a timeout to call the reset function after a delay
  // When we pass additional parameters (like 'pixel' below) they
  // are passed to the callback function (resetPixel)
  setTimeout(resetPixel, PIXEL_REVERT_DELAY, pixel);
}

function RandomColor() {
  // random color code restrived from: https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = "0123456789ABCDEF";
  var color = "#";
  // Color randomly selects a letter for a color by using math.random()
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// resetPixel
//
// Takes the provided pixel element and sets its color back to default
function resetPixel(pixel) {
  pixel.style.backgroundColor = DEFAULT_COLOR;
}

function rotate(e) {
  let pixels = document.getElementsByClassName("pixel");
  // Rotates pixel by 1 degree to the right
  if (e.keyCode === 39) {
    rotation += 1;
  }
  // Rotates pixel by 1 degree to the left
  if (e.keyCode === 37) {
    rotation -= 1;
  }
  //Checks if rotation is working in the console log
  console.log(rotation);
  // Created array that manipulates all pixels on the canvas when rotation is called
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].style.transform = `rotate(${rotation}deg)`;
  }
}
