function setup() {
  let j = 0;
  createCanvas(windowWidth, windowHeight);
  background(150);
  noFill();
  while (j < 30) {
    for (let i = 0; i < 30; i++) {
      circle(windowWidth / 2 + j * 10, windowHeight / 2, i * 10);
    }
    j++;
  }
}
