let c1;
let c2;
function setup() {
  createCanvas(400, 400);
  c1 = new Cirkel(200, 200, 50);
  c1.draw();
  c1.move(300, 300);
  c1.draw();
  c2 = new Cirkel(100, 100, 20);
  c2.draw();
}
