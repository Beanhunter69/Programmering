let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 700);

  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);
  input_3 = createInput();
  input_3.position(20, 135);

  button = createButton("submit");
  button.position(input_3.x + input.width, 135);
  button.mousePressed(greet);

  greeting = createElement("h2", "angiv a, b og c?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const a = int(input.value());
  const b = int(input_2.value());
  const c = int(input_3.value());
  let D = b ** 2 - 4 * a * c;
  let x1 = -b + sqrt(D) / (2 * a);
  background(255);
  text("det her er diskriminaten " + D, 100, 200, 500, 500);
  text("det er X1 = " + x1, 300, 300, 500, 500);
  input.value("");
  input_2.value("");
  input_3.value("");
  //resultatet bliver lige nu at den ligger de forskellige inputs sammen når der er tal.
}
