function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    let x = random(10, 400);
    let y = random(10, 400);
    if (i % 2 == 0) {
      fill(255, 0, 0);
      text(i, x - 10, y - 10);
    }
  }
}
