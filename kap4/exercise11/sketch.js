let y = 100;
let x;


function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
  x = random(0,width)
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
}