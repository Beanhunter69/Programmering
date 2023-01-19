let x;
let y;
let r;
let r1;
let r2;
let mennesker = [];
let n = 100;
function setup() {
  x = windowWidth / 2;
  y = windowHeight / 2;
  r = 10;
  r1 = 1;
  r2 = 1;

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < n; i++) {
    mennesker.push(
      new Menneske(
        random(0, windowWidth),
        random(0, windowHeight),
        r,
        random(-5, 5),
        random(-5, 5)
      )
    );
  }
}

function draw() {
  background(0);
  for (let i = 0; i < n; i++) {
    mennesker[i].draw();
    mennesker[i].collision(windowWidth, windowHeight);
  }

  // 1. det er fordi at hvis ikke r var med så ville den først bounce når den rammer midten af cirklen men når vi tager radius med så kommer den til at bounce når den rammer midten plus radius
  // 2. så kommer den til at bevæge sig hurtigere
  // 3. det er for at den går den modsatte vej end at den ikke bare fortsætter ud af lærredet.
}
class Menneske {
  constructor(x, y, radius, retning_x, retning_y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.retning_x = retning_x;
    this.retning_y = retning_y;
    this.usmittet = color(222, 223, 224);
    this.smittet = color(255, 0, 0);
    this.rask = color(0, 255, 0);
  }
  colliding(other) {
    return dist(this.x, this.y, other.x, other.y) < this.radius + other.radius;
  }

  draw() {
    fill(this.usmittet);
    for (let i = 0; i < mennesker.length; i++) {
      if (this.colliding(mennesker[i])) {
        fill(this.smittet);
      } else if (false) {
        fill(this.rask);
      }
    }

    circle(this.x, this.y, this.radius * 2);
  }

  collision(windowWidth, windowHeight) {
    if (this.x + this.radius > windowWidth) {
      this.retning_x = -this.retning_x;
    }
    if (this.x - this.radius <= 0) {
      this.retning_x = -this.retning_x;
    }
    if (this.y + this.radius > windowHeight) {
      this.retning_y = -this.retning_y;
    }
    if (this.y - this.radius <= 0) {
      this.retning_y = -this.retning_y;
    }
    this.x = this.x + this.retning_x;
    this.y = this.y + this.retning_y;
  }
}
