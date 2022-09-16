function setup() {
  createCanvas(500, 500);
  strokeWeight(8);
}
function draw() {
  background(204);
  line(mouseX, mouseY, pmouseX, pmouseY);
}