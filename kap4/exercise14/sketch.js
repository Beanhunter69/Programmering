let x = 50; 
let y = 60; 
let x1 = 30; 
let y1 = 40
let d = 50
function setup() {
  createCanvas(600, 600);
  x = random(50,350);
  y = random(50,350);
  x1 = random(50,350);
  y1 = random(50,350);
}

function draw() {
  background(220);
  image(img, x, y, d,d);
//musen 
  if (keyIsDown(87)) {
    y -= 5;
  }
  if (keyIsDown(83)) {
    y += 5;
  }
  if (keyIsDown(68)) {
    x += 5;
  }
  if (keyIsDown(65)) {
    x -= 5;
  }
//katten
image(img2,x1,y1,d,d)
if (x1 < x ){
  x1++
}
if (y1 < y ){
  y1++
}
if (y1 > y ){
  y1--
}
if (x1 > x ){
  x1--
}
if(2 > dist(x1,y1,x,y)){
noLoop(); 
}
}
function preload() {
  img = loadImage('jerrymus.png');
  img2 = loadImage('kat.png');
 }
