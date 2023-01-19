function setup() {
  createCanvas(700, 700);
  background(200);
  let Stamme = new stamme();
  Stamme.show();
  let gran = new Gran();
  gran.show();
  gran.show(220, 590, 470, 590, 345, 320);
  let star = new stjerne();
  fill(250, 233, 85);
  star.show(325, 290, 10, 25, 6);
  fill(245, 0, 17);
  strokeWeight(3);
  let kugle = new julekugle(340, 400, 15);
  kugle.show();
  let kugle_1 = new julekugle(300, 400, 15);
  kugle_1.show();
  let kugle_2 = new julekugle(260, 490, 15);
  kugle_2.show();
  let kugle_3 = new julekugle(280, 510, 15);
  kugle_3.show();
  let kugle_4 = new julekugle(300, 515, 15);
  kugle_4.show();
  let kugle_5 = new julekugle(320, 515, 15);
  kugle_5.show();
  let kugle_6 = new julekugle(340, 505, 15);
  kugle_6.show();

  function draw() {
    fill(random(0, 255), random(0, 255), random(0, 255));
  }
}
class stamme {
  constructor() {
    this.color = color(139, 69, 19);
    this.x = 300;
    this.y = 450;
    this.h = 50;
    this.w = 200;
  }
  show() {
    fill(this.color);
    rect(this.x, this.y, this.h, this.w);
  }
}
class Gran {
  constructor() {
    this.color = color(85, 107, 47);
    this.x = 200;
    this.y = 570;
    this.x2 = 450;
    this.y2 = 570;
    this.x3 = 325;
    this.y3 = 300;
  }
  show() {
    fill(this.color);
    triangle(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
  }
}
class stjerne {
  show(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
class julekugle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
  }
  show() {
    circle(this.x, this.y, this.radius);
  }
}
