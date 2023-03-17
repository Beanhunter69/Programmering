let a = 200; // cirkelcentrets x-koordinat
let b = 200; // cirkelcentrets y-koordinat
let r = 100; // cirkelens radius
let x0 = 50; // startværdi for x-koordinatet af skæringspunktet
let y0 = 50; // startværdi for y-koordinatet af skæringspunktet

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Tegn cirklen
  stroke(0);
  noFill();
  circle(a, b, r * 2);

  // Tegn linjen
  let A = 1;
  let B = -1;
  let C = -50;
  stroke(0, 0, 255);
  line(0, -C / B, width, (-C - A * width) / B);

  // Find skæringspunktet med Newton-Raphson-metoden
  for (let i = 0; i < 10; i++) {
    let dx =
      (2 * (x0 - a) + 2 * (y0 - b) * (-A / B)) /
      (2 * (-A / B) * (y0 - b) + 2 * (x0 - a));
    let dy = (-A / B) * dx;
    x0 = dx;
    y0 = dy;
  }

  // Tegn skæringspunktet
  fill(255, 0, 0);
  circle(x0, y0, 10);

  // Vis koordinaterne for skæringspunktet
  textSize(16);
  fill(0);
  text(`Skæringspunkt: (${x0.toFixed(2)}, ${y0.toFixed(2)})`, 10, height - 20);
}
