let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 700);

  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);

  button = createButton("submit");
  button.position(input_2.x + input.width, 100);
  button.mousePressed(greet);

  greeting = createElement("h2", "Side 1 x og y");
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
  circle(300, 300, 300, 200);
  line(500, 300, 100, 300);
  line(500, 300, 100, 300);
  line(300, 500, 300, 100);
  line(300, 300, 410, 200);
}

function greet() {
  int(input.value());
  int(input_2.value());
  line(300, 300, input.value(), input_2.value());
  input.value("");
  input_2.value("");
  //resultatet bliver lige nu at den ligger de forskellige inputs sammen når der er tal.
}
