let a = 0.5;
let b = 7;
let c = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  stroke(0);
  noFill();
  beginShape();
  for (let x = -100; x <= 100; x++) {
    let y = a * x * x + b * x + c;
    vertex(x + 200, -y + 200);
  }
  endShape();
}
