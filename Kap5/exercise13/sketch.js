let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink");
  noStroke();
}

function draw() {
  background("yellow");
  translate(x, y);
  rotate(angle);
  ellipseMode(CENTER);

  x = x + 2;
  angle = angle + 4;
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}
// den laver en figur som den så derefter rotere 
// det der sker når der er et loop inde i et loop er at den for kører den inde i det første loop og så bagefter kører den hele det andet loop. 