"use strict";


/********************************************************************

Assignment 1
Justin Cea

Pixel Painter.

*********************************************************************/
window.onload = setup;

function setup(){
  console.log ("Document Loaded.");
for (var i = 0; i < 1000; i++) {

    let pixel = document.createElement('div');

    pixel.setAttribute('class','pixel');

    document.body.appendChild(pixel);

    pixel.addEventListener('mouseover',paint);
    }
  }
function paint(e){
let pixel = e.target;
pixel.style.backgroundColor = "green";
setTimeout(resetPixel,100,pixel);
  }

function resetPixel(pixel){
pixel.style.backgroundColor = "black";
}
