let a = 0.1; // Koefficient for x^2
let b = 0; // Koefficient for x
let c = -1; // Konstant led
let r = 25; // Radius for cirklen
let h = 35; // x-koordinat for cirkelcenter
let k = 45; // y-koordinat for cirkelcenter
let x0 = 40; // Startpunkt for Newton-Raphson-metoden
let eps = 0.0001; // Præcision
let maxIterations = 100; // Maksimalt antal iterationer

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Tegn cirklen
  stroke(0);
  noFill();
  circle(h, k, r*2);
  
  // Tegn andengradsligningen
  stroke(0, 0, 255);
  for(let x=0; x<=width; x++) {
    let y = a*x*x + b*x + c;
    point(x, height - y);
  }
  
  // Find skæringspunktet ved hjælp af Newton-Raphson-metoden
  let x = x0;
  let i = 0;
  while(i < maxIterations) {
    let fx = a*x*x + b*x + c - Math.sqrt(r*r - (x-h)*(x-h)) - k;
    let dfx = 2*a*x + (h-x) / Math.sqrt(r*r - (x-h)*(x-h));
    let x1 = x - fx / dfx;
    if(Math.abs(x1 - x) < eps) {
      x = x1;
      break;
    }
    x = x1;
    i++;
  }
  
  // Tegn skæringspunktet
  let y1 = Math.sqrt(r*r - (x-h)*(x-h)) + k;
  let y2 = -Math.sqrt(r*r - (x-h)*(x-h)) + k;
  fill(255, 0, 0);
  noStroke();
  circle(x, height - y1, 5);
  circle(x, height - y2, 5);
  
  // Udskriv koordinaterne for skæringspunktet
  textSize(16);
  fill(0);
  text("Skæringspunktet: (" + x.toFixed(2) + ", " + y1.toFixed(2) + ")", 10, 20);
  text("Skæringspunktet: (" + x.toFixed(2) + ", " + y2.toFixed(2) + ")", 10, 40);
}
