let x = 50;
let y = 60;
let x1 = 30;
let y1 = 40;
let x2 = 100;
let y2 = 400;
let d = 50;
let timer = 0;
// her sætter vi alle variablerne
function setup() {
  createCanvas(600, 600);
  x = random(50, 350);
  y = random(50, 350);
  x1 = random(50, 350);
  y1 = random(50, 350);
  // her sætter vi musen og katten 1 så de spawnner et random sted
}

function draw() {
  background(220);
  image(img, x, y, d, d);
  borderCheck();
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
  } // denne del af koden giver bevæglese til musen når man trykker på wasd
  //katten
  image(img2, x1, y1, d, d);
  if (x1 < x) {
    x1++;
  }
  if (y1 < y) {
    y1++;
  }
  if (y1 > y) {
    y1--;
  }
  if (x1 > x) {
    x1--;
  }
  if (40 > dist(x1, y1, x, y)) {
    noLoop();
    // denne del giver katten bevæglese så den bevæger sig efter musen
  } //katten 2
  if (timer > 10 * 60) {
    image(img3, x2, y2, d, d);
    if (x2 < x) {
      x2 += 2;
    }
    if (y2 < y) {
      y2 += 2;
    }
    if (y2 > y) {
      y2 -= 2;
    }
    if (x2 > x) {
      x2 -= 2;
    }
    if (40 > dist(x2, y2, x, y)) {
      noLoop();
    } // denne del giver katten 2 bevæglese så den bevæger sig efter musen
  } //katten 3
  if (timer > 10 * 70) {
    image(img3, x2, y2, d, d);
    if (x2 < x) {
      x2++;
    }
    if (y2 < y) {
      y2++;
    }
    if (y2 > y) {
      y2--;
    }
    if (x2 > x) {
      x2--;
    }
    if (40 > dist(x2, y2, x, y)) {
      noLoop();
    }
    // denne del giver katten 3 bevæglese så den bevæger sig efter musen
  }
  timer++;
}
function preload() {
  img = loadImage("jerrymus.png");
  img2 = loadImage("kat.png");
  img3 = loadImage("kat.png");
  // det her er den del af koden som sætter et billede ind og sætter giver den en variabel så man kan give den noget bevægelse
}
function borderCheck() {
  if (x + d / 2 >= width) {
    x -= 2;
    y += 2;
  }
  if (x - d / 2 <= 0) {
    x += 2;
    y -= 2;
  }
  if (y + d / 2 >= height) {
    x -= 2;
    y -= 2;
  }
  if (y - d / 2 < 0) {
    x -= 2;
    y += 2;
    // denne kode er den som skal virke som en border. det den går er at den siger så snart den begynder at ramme borderen så trækker den figuren ind mod midten igen
  }
}
