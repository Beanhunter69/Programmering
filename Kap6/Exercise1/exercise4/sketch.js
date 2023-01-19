let x = 200;
let y = 175;
let r = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x, y, r * 2);
  button = createButton("Ventre");
  button.position(175, 175);
  button.mousePressed(ventre_click);
}
function ventre_click() {
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      if (dist(x, y, mouseX, mouseY) < r) {
        console.log("true");
      } else {
        console.log("falske");
      }
    }
  }
}
