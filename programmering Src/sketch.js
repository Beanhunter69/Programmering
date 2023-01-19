// det her er globale funktioner som bliver brugt i både i setup og draw funktionerne.
let a, b, c;
let input, input_2, input_3, button;
let cirkel;
let quad;
function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);
  input_3 = createInput();
  input_3.position(20, 135);
  button = createButton("submit");
  button.position(input_3.x + input.width, 135);
  button.mousePressed(greet);

  cirkel = new circle(mouseX, mouseY, 50);
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
class quadfunction {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
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
  background(220);
  // alt det her nofill, fill, stroke og strokeweight er bogstavligtalt bare hvor stor og hvilken farve vores linjer skal være
  stroke(0);
  strokeWeight(1);
  textSize(50);
  fill(0);
  // her laver vi teksten med x koordinatorene på vores cirkel som vi gerne ville vide da vi skal bruge til at regne newton raphson metoden.
  text(mouseX - width / 2, 1200, 700);
  text((mouseY - height / 2 - 0.5) * -1, 1350, 700);
  // Translate er en funktion som ændre vores 0 punkt kan man godt sige. istedet for at vores 0 punkt er oppe i ventre hjørne så kommer den på midten af skærmen
  translate(width / 2, height / 2);
  quad.a = a;
  quad.b = b;
  quad.c = c;
  quad.show();
  // her laver vi altså vores cirkel som har x og y værdierne som musen.
  strokeWeight(2);
  cirkel.x = mouseX - width / 2;
  cirkel.y = mouseY - height / 2;
  cirkel.show();
  // Scale er en funktion som bytter om på vores x og y akser så det kommer til at ligne et koordinatsystem.
  scale(1, -1);
  strokeWeight(2);
  line(0, -500, 0, 500);
  line(1000, 0, -1000, 0);
}
function greet() {
  a = parseFloat(input.value());
  b = parseFloat(input_2.value());
  c = parseFloat(input_3.value());
  input.value("");
  input_2.value("");
  input_3.value("");
}
