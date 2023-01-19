let button;
function setup() {
  createCanvas(400, 400);
  button = createButton("click me");
  button.position(19, 19);
  button.mousePressed(Make_circle_great); //kald til funktionen
}

function Make_circle_great() {
  background(0);
  let x = random(255);
  let y = random(255);
  let r = random(255);
  let x1 = random(200);
  let y1 = random(200);
  let r1 = random(200);
  fill(255, 243, 0);
  circle(x, y, r);
  circle(x1, y1, r1);
  if (dist(x, y, x1, y1) < (r + r1) / 2) {
    console.log("true");
  } else {
    console.log("falske");
  }
}
