function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseButton == RIGHT) {
    rect(200,200,100,100)
  }
  if (mouseButton == LEFT) {
    circle(100,100,100,100)
  }
}
