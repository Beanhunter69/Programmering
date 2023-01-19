function setup() {
  let i = 1;
  createCanvas(400, 400);
  while (i < 100) {
    let x = random(0, 400);
    let y = random(400);
    fill(0, 0, 255);
    text(i, x, y);
    i = i + 2;
  }
}
