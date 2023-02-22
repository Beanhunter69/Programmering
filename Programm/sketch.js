let a, b, c, r; //* dette er værdier til vores andengradsligning og vores cirkel
let x, x_gæt, x_NR; //* dette er vores x'er som vi bruger til vores Newton raphson
let input, input_2, input_3, input_4, button, option; //* dette er vores globale værdier til vores input, button og option
let ligning, lineær_ligning, cirkel; //* detter er vores globale værdier for vores ligninger så vi kan tilgå dem overalt
let graf = "ligning"; //* Dette er til at vi kan skifte mellem at lave en andengradsligning og en lineær funktion

function setup() {
  createCanvas(windowWidth, windowHeight);
  //* laver input felt og indsætter værdierne man skriver ind
  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);
  input_3 = createInput();
  input_3.position(20, 135);
  input_4 = createInput();
  input_4.position(20, 400);
  button = createButton("submit");
  button.position(input_3.x + input.width, 135);
  button.mousePressed(abc_værdi);
  button_2 = createButton("submit");
  button_2.position(input_4.x + input.width, 400);
  button_2.mousePressed(x_værdi);
  //* dette skaber vores classer og laver dem til objekter
  ligning = new andengradsligning(a, b, c);
  lineær_ligning = new lineær(a, b);
  mus = new upperCirkel(mouseX, mouseY, 50);
  mus_2 = new lowerCirkel(mouseX, mouseY, 50);
  //* her laver vi option så vi kan skrifte mellem lineær og andengrad
  option = createSelect();
  option.position(20, 175);
  option.option("ligning");
  option.option("lineær_ligning");
  option.changed(skrift_graf);
}
//* her har vi vores andengrad class hvor vi difinere hvad en andengradsligning er og giver den funktioner
class andengradsligning {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  //* dette er vores funktion
  gx(x_gæt) {
    return a * x_gæt ** 2 + b * x_gæt + c;
  }
  //* dette er vores afledte funktion
  dgx(x_gæt) {
    return 2 * a * x_gæt + b;
  }
  show() {
    noFill(0);
    beginShape();
    for (let x = -100; x <= 100; x++) {
      let y = a * x * x + b * x + c;
      vertex(x, -y);
    }
    endShape();
  }
}
//* Denne class laver vi vores cirkel
//! Dette er også hvad vi kalder for en parent/far class
class Cirkel {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    ellipse(this.x, this.y, this.r);
  }
}
//* Dette er vores uppercirkel som er en udvidelse af cirkel hvori vi også giver den en funktion og en afledt funktion
//! Dette er hvad vi kalder en child/søn class
class upperCirkel extends Cirkel {
  constructor(x, y, r) {
    super(x, y, r);
  }
  //* dette er vores funktion
  Fx(x_gæt) {
    return (
      (mouseY - height / 2 - 0.5) * -1 +
      sqrt(
        -((mouseX - width / 2) ** 2) +
          2 * x_gæt * (mouseX - width / 2) +
          25 ** 2 -
          x_gæt ** 2
      )
    );
  }
  //* dette er vores afledte funktion
  dFx(x_gæt) {
    return -(
      (2 * (mouseX - width / 2) - 2 * x_gæt) /
      (2 *
        sqrt(
          -((mouseX - width / 2) ** 2) +
            2 * x_gæt * (mouseX - width / 2) +
            25 ** 2 -
            x_gæt ** 2
        ))
    );
  }
}
//* dette er det samme som vores upperclass det er en udvidet class af cirkel.
//! dette er også en child/søn class
class lowerCirkel extends Cirkel {
  constructor(x, y, r) {
    super(x, y, r);
  }
  //* dette er vores funktion
  Fx(x_gæt) {
    return (
      (mouseY - height / 2 - 0.5) * -1 -
      sqrt(
        -((mouseX - width / 2) ** 2) +
          2 * x_gæt * (mouseX - width / 2) +
          25 ** 2 -
          x_gæt ** 2
      )
    );
  }
  //* dette er vores afledte funktion
  dFx(x_gæt) {
    return -(
      (2 * (mouseX - width / 2) - 2 * x_gæt) /
      (2 *
        sqrt(
          -((mouseX - width / 2) ** 2) +
            2 * x_gæt * (mouseX - width / 2) +
            25 ** 2 -
            x_gæt ** 2
        ))
    );
  }
}
//* dette er en lineær class hvor vi angiver hvad en lineær funktion er
class lineær {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  show() {
    strokeWeight(2);
    noFill(0);
    beginShape();
    for (let x = -1000; x <= 1000; x++) {
      let y = a * x + b;
      vertex(x, -y);
    }
    endShape();
  }
}

function draw() {
  background(220);
  textSize(20);
  fill(0);
  //* Denne del er noget som tjekker skæringen med x aksen på vores ligning
  let skæring_x1 = (-b + sqrt(b * b - 4 * a * c)) / (2 * a);
  let skæring_x2 = (-b - sqrt(b * b - 4 * a * c)) / (2 * a);
  //* Dette skriver alt på vores skærm når vi kører programmet
  //! den skriver også alle vores beregninger på skærmen
  text("NR er ca = " + NewtonRaphson(x), 10, 750);
  text("andet skæringspunkt ca =" + NR(x_NR), 10, 700);
  text("skæring med x " + skæring_x1, 10, 600);
  text("skæring med x " + skæring_x2, 10, 650);
  text("instats dine andengradsligning her ", 10, 50);
  text("A", 5, 82);
  text("B", 5, 118);
  text("C", 5, 152);

  //* denne funktion translater hele vores skærm sådan at vi får vores (0,0) midt på skærmen
  translate(width / 2, height / 2);
  //* dette skriver hvor cirkels midtpunkts koordinator
  textSize(50);
  text(mouseX - width / 2, 500, 350);
  text((mouseY - height / 2 - 0.5) * -1, 650, 350);
  line(0, -500, 0, 500);
  line(1000, 0, -1000, 0);
  //* denne funktion afgør hvis vores option siger den er ligning at den så skal vise vores andengrad og hvis den er lineær skal den vise vores lineær funktion
  if (graf === "ligning") {
    ligning.a = a;
    ligning.b = b;
    ligning.c = c;
    ligning.show();
  }
  if (graf === "lineær_ligning") {
    lineær_ligning.a = a;
    lineær_ligning.b = b;
    lineær_ligning.show();
  }
  strokeWeight(2);
  noFill(0);
  //* denne del viser bare vores upper og lower -cirkel
  mus.x = mouseX - width / 2;
  mus.y = mouseY - height / 2;
  mus.show();
  mus_2.x = mouseX - width / 2;
  mus_2.y = mouseY - height / 2;
  mus_2.show();
}
//* denne funktion gør sådan at når man indtaster noget i vores input så sætter den vores variabler til de tal vi så for
//! ParseFloat er en funktion som gør at når vi indtaster vores værdi så sætter den vores variable til vores tal.
function abc_værdi() {
  a = parseFloat(input.value());
  b = parseFloat(input_2.value());
  c = parseFloat(input_3.value());
  input.value("");
  input_2.value("");
  input_3.value("");
}
//* Dette er fra vores option som siger at vores graf er lig med vores option value
function skrift_graf() {
  graf = option.value();
}
//* dette gør præcis det samme som i vores abc_værdi bare med vores x
function x_værdi() {
  x_gæt = parseFloat(input_4.value());
  input_4.value("");
}
/**
 * Denne funktion er vores newton raphson som skal udregne vores skæringspunkter
 * @param {number} x_gæt er vores gæt som vi indsætter i ovre funktion
 * @param {number} x1 - x5 er en del af vores newton raphson og er bare iterationer
 * @param {number} mus.Fx(x_gæt-x4) er vores funktion for vores øvre cirkel
 * @param {number} mus.dFx(x_gæt-x4) dette er vores afledte funktion til vores øvre cirkel
 * @param {number} ligning.gx(x_gæt-x4) dette er vores funktion til vores andengradsligning
 * @param {number} ligning.dgx(x_gæt-x4) detter er vores afledte funktion til vores andengradsligning
 *
 */
function NewtonRaphson(x) {
  let x1 =
    x_gæt -
    (mus.Fx(x_gæt) - ligning.gx(x_gæt)) / (mus.dFx(x_gæt) - ligning.dgx(x_gæt));
  let x2 = x1 - (mus.Fx(x1) - ligning.gx(x1)) / (mus.dFx(x1) - ligning.dgx(x1));
  let x3 = x2 - (mus.Fx(x2) - ligning.gx(x2)) / (mus.dFx(x2) - ligning.dgx(x2));
  let x4 = x3 - (mus.Fx(x3) - ligning.gx(x3)) / (mus.dFx(x3) - ligning.dgx(x3));
  let x5 = x4 - (mus.Fx(x4) - ligning.gx(x4)) / (mus.dFx(x4) - ligning.dgx(x4));
  x = x5;
  return x;
}
/**
 * Denne funktion er præcis den samme som Newton raphson det er bare nogen andre funktioner
 * @param {number} x_NR er det samme som x oppe i newton raphson
 * @param {number} x_gæt er vores gæt som vi indsætter i ovre funktion
 * @param {number} x_1 - x_5 er en del af vores newton raphson og er bare iterationer
 * @param {number} mus_2.Fx(x_gæt-x4) er vores funktion for vores nedre cirkel
 * @param {number} mus_2.dFx(x_gæt-x4) dette er vores afledte funktion til vores nedre cirkel
 * @param {number} ligning.gx(x_gæt-x4) dette er vores funktion til vores andengradsligning
 * @param {number} ligning.dgx(x_gæt-x4) detter er vores afledte funktion til vores andengradsligning
 */
function NR(x_NR) {
  let x_1 =
    x_gæt -
    (mus_2.Fx(x_gæt) - ligning.gx(x_gæt)) /
      (mus_2.dFx(x_gæt) - ligning.dgx(x_gæt));
  let x_2 =
    x_1 -
    (mus_2.Fx(x_1) - ligning.gx(x_1)) / (mus_2.dFx(x_1) - ligning.dgx(x_1));
  let x_3 =
    x_2 -
    (mus_2.Fx(x_2) - ligning.gx(x_2)) / (mus_2.dFx(x_2) - ligning.dgx(x_2));
  let x_4 =
    x_3 -
    (mus_2.Fx(x_3) - ligning.gx(x_3)) / (mus_2.dFx(x_3) - ligning.dgx(x_3));
  let x_5 =
    x_4 -
    (mus_2.Fx(x_4) - ligning.gx(x_4)) / (mus_2.dFx(x_4) - ligning.dgx(x_4));
  x_NR = x_5;
  return x_NR;
}
