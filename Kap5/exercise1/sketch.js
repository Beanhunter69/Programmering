function setup() {
  let i = 0;
  createCanvas(400, 400);
  for (i < 100; i++; ) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
  }
} //den kommer til at lave 100 cirkler med forskellig radius
