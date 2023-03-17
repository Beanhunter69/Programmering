let button;
function setup() {
  createCanvas(400, 400);
  background(0);
  button = createButton("click me");
  button.position(19, 19);
  button.mousePressed(Make_yellow_circle); //kald til funktionen
}

function Make_yellow_circle() {
  let x = random(255);
  let y = random(255);
  let r = random(255);
  fill(255, 243, 0);
  circle(x, y, r);
}
