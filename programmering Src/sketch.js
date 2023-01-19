//! det her er globale funktioner som bliver brugt i både i setup og draw funktionerne.
let a, b, c;
let x;
let input, input_2, input_3, button;
let cirkel;
let quad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //! Denne del er taget fra nogle af programmerings timerne hvor vi lærte at lave et input felt og lave en knap. https://github.com/Beanhunter69/Programmering/blob/main/Kap6/Exercise1/exercise6/sketch.js*/
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
  button.mousePressed(greet);
  button_2 = createButton("submit x");
  button_2.position(input_4.x + input_4.width, input_4.y);
  button_2.mousePressed(Værdi);
  //! her fra og de nedestående classer er kommet fra vores githup bog kap 8 omkring objektor https://github.com/HenrikSterner/P5Programmering/blob/main/kap8/kap8.md grunden til at jeg bruger classes er fordi så kommer det måske til at blive nemmere til at få mine figurer til at collidere*/
  //* cirkel er altså vores cirkel på skærmen og vores Quad er vores andengradsligning
  cirkel = new circle(mouseX, mouseY, 50);
  quad = new quadfunction(1, 0, 0);

  for (let x = -100; x <= 100; x++) {
    let f = this.a * x * x + this.b * x + this.c;
    let Df = 2*this.a*x+this.b
    let g = 
  }
  endShape();

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
    //! her kan vi se at der sker et for loop. inde i det her for loop siger vi simpelhent at x = -100 og at hvis x er mindre eller lig med 100 skal den x++
    //* inde i for loopet siger den så at y er lig med this.a * x * x grunden til vi går det er fordi at det er a er ax^2 som betyder at vi skal have x gange med hinanden.
    //* det der står i let y er basically vores andengradligning som hvori vi har givet den værdierne oppe i constructoren
    for (let x = -100; x <= 100; x++) {
      let y = this.a * x * x + this.b * x + this.c;
      vertex(x + 0, -y + 0);
    }
    endShape();
  }
}

function draw() {
  background(220);
  //! alt det her nofill, fill og strokeweight er bogstavligtalt bare hvor stor og hvilken farve og hvor store vores linjer skal være
  strokeWeight(1);
  textSize(50);
  fill(0);
  //! her laver vi teksten med x koordinatorene på vores cirkel som vi gerne ville vide da vi skal bruge til at regne newton raphson metoden.
  text(mouseX - width / 2, 1200, 700);
  text((mouseY - height / 2 - 0.5) * -1, 1350, 700);
  //! Translate er en funktion som ændre vores 0 punkt kan man godt sige. istedet for at vores 0 punkt er oppe i ventre hjørne så kommer den på midten af skærmen*/
  translate(width / 2, height / 2);
  //! her laver vi andengradsligning hvor den ved at vores andengradsligning
  quad.a = a;
  quad.b = b;
  quad.c = c;
  quad.show();
  //! her laver vi altså vores cirkel som har x og y værdierne som musen.
  strokeWeight(2);
  cirkel.x = mouseX - width / 2;
  cirkel.y = mouseY - height / 2;
  cirkel.show();
  //! Scale er en funktion som bytter om på vores x og y akser så det kommer til at ligne et koordinatsystem og lignerne er med til at få det til at ligne et koordinatsystem.
  scale(1, -1);
  strokeWeight(2);
  line(0, -500, 0, 500);
  line(1000, 0, -1000, 0);
}
//! dette hører til vores input og vores button
//* det der sker er at vi giver vores a,b og c værdierne som kommer fra input og siger derefter at den skal tømme boksen.
//* Man kan se at der står parsefloat istedet for int. Grunden til det er fordi at det input som kommer fra tekst boksen er en string og derfor ikke kunne bruges til vores beregninger til at lave andengrads ligningen.
//* Parsefloat laver derfor vores værdi som vi får fra input om til en et nummer som vi kan bruge
function greet() {
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
