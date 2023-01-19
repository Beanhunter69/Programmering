function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    let x = 50;
    let y = random(400);
    let r = random(100);
    if (i % 2 == 0) {
      circle(x, y, r);
      text(i, x, y);
    }
    if (i % 2 == 1) {
      let x = 350;
      circle(x, y, r);
      text(i, x, y);
    }
  }
}
