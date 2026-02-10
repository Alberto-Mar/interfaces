'use strict'

let canvas = document.getElementById("lienzo");

let lienzo = canvas.getContext("2d");


// lienzo.fillStyle = 'yellow';
// lienzo.beginPath();
// lienzo.arc(200, 60, 50, 0, 2 * Math.PI);
// lienzo.fill();
// lienzo.stroke();


// lienzo.beginPath();
// lienzo.moveTo(165, 60);
// lienzo.lineTo(165, 130);
// lienzo.lineTo(185, 145);
// lienzo.lineTo(215, 145);
// lienzo.lineTo(235, 130);
// lienzo.lineTo(235, 60);
// lienzo.closePath();
// lienzo.fillStyle = "rgb(222, 158, 75)";
// lienzo.fill();
// lienzo.stroke();
// // lienzo.fillStyle = "rgb(222, 158, 75)";
// // lienzo.fillRect(165, 60, 70, 100);


// //nariz
// lienzo.fillStyle = "rgb(209, 145, 62)";
// lienzo.fillRect(195, 90, 10, 30);

// //gafas
// lienzo.fillStyle = "black";
// lienzo.fillRect(170, 80, 25, 15);

// lienzo.fillStyle = "black";
// lienzo.fillRect(205, 80, 25, 15);

// lienzo.beginPath();
// lienzo.moveTo(195, 87);
// lienzo.lineTo(205, 87);
// lienzo.stroke();

let pintar = false
let verde = document.getElementById("verde")
let rojo = document.getElementById("rojo")
let azul = document.getElementById("azul")

rojo.addEventListener('click', function() {
    lienzo.strokeStyle = 'red'
})

azul.addEventListener('click', function() {
    lienzo.strokeStyle = 'blue'
})

verde.addEventListener('click', function() {
    lienzo.strokeStyle = 'green'
})

canvas.addEventListener('mousedown', function(event) {
    pintar = true
    lienzo.beginPath()
})

canvas.addEventListener('mousemove', function(event) {
    if (pintar) {
        lienzo.lineTo(event.offsetX, event.offsetY)
        lienzo.stroke()
    }
})

canvas.addEventListener('mouseup', function(event) {
    pintar = false
})

