//! det her er globale funktioner som bliver brugt i både i setup og draw funktionerne.
let a = 0.5;
let b = 7;
let c = 20;
let x, x1, x_gæt;
let input_4, button_2;
let quad;
let r = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cirkel = new lowerCircle(mouseX, mouseY, 50);
  quad = new quadfunction(1, 0, 0);
  input_4 = createInput();
  input_4.position(20, 700);
  button_2 = createButton("submit x");
  button_2.position(input_4.x + input_4.width, input_4.y);
  button_2.mousePressed(Værdi);
}
class circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    ellipse(this.x, this.y, this.r);
  }
}

class lowerCircle extends circle {
  constructor(x, y, r) {
    super(x, y, r);
  }
  Fx(x_gæt) {
    return (
      (mouseY - height / 2 - 0.5) * -1 +
      sqrt(
        (mouseX - width / 2) ** 2 +
          2 * x_gæt * (mouseX - width / 2) +
          50 ** 2 -
          x_gæt ** 2
      )
    );
  }
  dFx(x_gæt) {
    return (
      2 * mouseX -
      width / 2 -
      ((2 * x_gæt) / 2) *
        sqrt(
          (mouseX - width / 2) ** 2 +
            2 * x_gæt * (mouseX - width / 2) +
            50 ** 2 -
            x_gæt ** 2
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
  gx(x_gæt) {
    return 0.5 * x_gæt * x_gæt + 7 * x_gæt + 20;
  }
  dgx(x_gæt) {
    return 2 * 0.5 * x_gæt + 7;
  }
}

function draw() {
  NewtonRaphson();
  background(220);
}
function Værdi() {
  x_gæt = parseFloat(input_4.value());
  input_4.value("");
}
function NewtonRaphson(x) {
  let x1 =
    x_gæt -
    (cirkel.Fx(x_gæt) - quad.gx(x_gæt)) / (cirkel.dFx(x_gæt) - quad.dgx(x_gæt));
  x = x1;
  console.log(x);
  return x;
}
