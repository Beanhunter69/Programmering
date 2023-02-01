//! det her er globale funktioner som bliver brugt i både i setup og draw funktionerne.
let a, b, c;
let x, x1;
let input, input_2, input_3, input_4, button;
let quad;
let r = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);
  input_3 = createInput();
  input_3.position(20, 135);
  input_4 = createInput();
  input_4.position(20, 700);
  button = createButton("submit");
  button.position(input_3.x + input.width, 135);
  button.mousePressed(abc_værdi);
  button_2 = createButton("submit x");
  button_2.position(input_4.x + input_4.width, input_4.y);
  button_2.mousePressed(Værdi);
  cirkel = new lowerCircle(mouseX, mouseY, 50);
  quad = new quadfunction(1, 0, 0);
}
class circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
}

class lowerCircle extends circle {
  constructor(x, y, r) {
    super(x, y, r);
  }
  Fx(x) {
    return (
      (mouseY - height / 2 - 0.5) * -1 +
      sqrt(
        (mouseX - width / 2) ** 2 +
          2 * x * (mouseX - width / 2) +
          50 ** 2 -
          x ** 2
      )
    );
  }

  dFx(x) {
    2 * mouseX -
      width / 2 -
      ((2 * x) / 2) *
        sqrt(
          (mouseX - width / 2) ** 2 +
            2 * x * (mouseX - width / 2) +
            50 ** 2 -
            x ** 2
        );
  }
}
class uppercircle extends circle {
  constructor(x, y, r) {
    super(x, y, r);
  }
  Fx(x) {
    return (
      (mouseY - height / 2 - 0.5) * -1 -
      sqrt(
        (mouseX - width / 2) ** 2 +
          2 * x * (mouseX - width / 2) +
          r ** 2 -
          x ** 2
      )
    );
  }

  dFx(x) {
    return (
      2 * mouseX -
      width / 2 -
      ((2 * x) / 2) *
        sqrt(
          (mouseX - width / 2) ** 2 +
            2 * x * (mouseX - width / 2) +
            r ** 2 -
            x ** 2
        )
    );
  }
}
class quadfunction {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  gx(x) {
    return a * x * x + b * x + c;
  }
  dgx(x) {
    return 2 * a * x + b;
  }

  show() {
    strokeWeight(4);
    noFill();
    beginShape();
    for (let x = -100; x <= 100; x++) {
      let y = this.a * x * x + this.b * x + this.c;
      vertex(x + 0, -y + 0);
    }
    endShape();
  }
}

function draw() {
  NewtonRaphson();
  background(220);
  strokeWeight(1);
  textSize(50);
  fill(0);
  text(mouseX - width / 2, 300, 720);
  text((mouseY - height / 2 - 0.5) * -1, 450, 720);
  translate(width / 2, height / 2);
  quad.a = a;
  quad.b = b;
  quad.c = c;
  quad.show();
  strokeWeight(2);
  cirkel.x = mouseX - width / 2;
  cirkel.y = mouseY - height / 2;
  cirkel.show();
  scale(1, -1);
  strokeWeight(2);
  line(0, -500, 0, 500);
  line(1000, 0, -1000, 0);
}
function abc_værdi() {
  a = parseFloat(input.value());
  b = parseFloat(input_2.value());
  c = parseFloat(input_3.value());
  input.value("");
  input_2.value("");
  input_3.value("");
}
function Værdi() {
  x = parseFloat(input_4.value());
  input_4.value("");
}
function NewtonRaphson(x) {
  for (let i = 0; i < 10; i++) {
    let x1 = x - (cirkel.Fx(x) - quad.gx(x)) / (cirkel.dFx(x) - quad.dgx(x));
    x = x1;
  }
  console.log(cirkel.dFx(x));
  return x;
}
