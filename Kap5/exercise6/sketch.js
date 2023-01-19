let x = 0;
function setup() {
  createCanvas(400, 400);
  while (x <= 10) {
    ellipse(random(300), random(300), random(300));
    x++;
  }
}
