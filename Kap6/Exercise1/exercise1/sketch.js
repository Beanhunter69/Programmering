let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);
  input_2 = createInput();
  input_2.position(20, 100);

  button = createButton("submit");
  button.position(input_2.x + input.width, 100);
  button.mousePressed(greet);

  greeting = createElement("h2", "what is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = int(input.value());
  const efterNavn = int(input_2.value());
  greeting.html(name + efterNavn);
  input.value("");
  input_2.value("");
  //resultatet bliver lige nu at den ligger de forskellige inputs sammen når der er tal. 
}
