let a, b, c, r;
let x, x_gæt,x2;
let input, input_2, input_3, input_4, button;
let cirkel
let quad;

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
    ellipse(this.x, this.y, this.r);
  }
}

class lowerCircle extends circle {
  constructor(x, y, r) {
    super(x, y, r);
  }
  Fx(x_gæt) {
    return (
      ((mouseY - height / 2) * -1) +
      sqrt(
        (-1*(mouseX - width / 2)) ** 2 +
          2 * x_gæt * (mouseX - width / 2) - 
          x_gæt ** 2
          + 50**2
      )
    );
  }
  dFx(x_gæt) {
    return (
      (2 * (mouseX-width/2) - 2 * x_gæt) / 
      (2* sqrt((-1*(mouseX-width/2)) ** 2 + 2 * x_gæt * (mouseX-width/2) - x_gæt ** 2 + 50**2))
    );
  }
  Fx_2(x_gæt) {
    return (
      ((mouseY - height / 2) * -1) -
      sqrt(
        (-1*(mouseX - width / 2)) ** 2 +
          2 * x_gæt * (mouseX - width / 2) - 
          x_gæt ** 2
          + 50**2
      )
    );
  }
  dFx_2(x_gæt) {
    return (
      (2 * (mouseX-width/2) - 2 * x_gæt) / 
      (2* sqrt((mouseX-width/2) ** 2 + 2 * x_gæt * (mouseX-width/2) - x_gæt ** 2 + 50**2))
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
    return a*x_gæt**2+b*x_gæt+c;
  }
  dgx(x_gæt) {
    return 2 * a * x_gæt + b;
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
  NewtonRaphson(x_gæt);
  background(220);
  textSize(50);
  fill(0);
  text((mouseX - width / 2), 300, 720);
  text((mouseY - height / 2-0.5) * -1, 450, 720);
  text("løst x = "+løst_x,600,720);
  text("andet punkt x2 = "+ andet_punkt, 600,760)
  textSize(15)
  text("indsæt grafens a, b og c værdier her", 10,50);
  text("indsæt dit gættende x her", 10,680);
  translate(width / 2, height / 2);
  quad.a = a;
  quad.b = b;
  quad.c = c;
  quad.show();
  strokeWeight(2);
  cirkel.x = mouseX - width / 2;
  cirkel.y = mouseY - height / 2;
  cirkel.show();
  strokeWeight(2);
  line(0, -500, 0, 500);
  line(1000, 0, -1000, 0);
  strokeWeight(15);
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
  x_gæt = parseFloat(input_4.value());
  input_4.value("");
}
function NewtonRaphson(x_gæt) {
  let hx = (cirkel.Fx(x_gæt) - quad.gx(x_gæt));
  let dhx =(cirkel.dFx(x_gæt) - quad.dgx(x_gæt));
  let x1 =
    x_gæt -
    (hx) / (dhx)
  løst_x = x1;

  let x2 =
    x_gæt -
    (cirkel.Fx_2(x_gæt) - quad.gx(x_gæt)) /
      (cirkel.dFx_2(x_gæt) - quad.dgx(x_gæt));
  andet_punkt = x2;
  return løst_x, x2;
}
