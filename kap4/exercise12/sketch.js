let y = 100;
let x;
let x1;
let z = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
  x = random(0,width)
  x1 = random(10,width)
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  circle(x, y, 100);
  rect(x1,z,50,50)
  if (keyIsDown(87)) {
    z -= 5;
  }
  if (keyIsDown(83)) {
    z += 5;
  }
  if (keyIsDown(68)) {
    x1 += 5;
  }
  if (keyIsDown(65)) {
    x1 -= 5;
  }
}