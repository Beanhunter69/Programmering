let mennesker = [];
let n = 100; 
let radius = 25; 
function setup(){
  createCanvas(windowWidth,windowHeight); 
  mennesker.push(new Menneske(random(0, windowWidth), random(0, windowHeight), radius, random(-5, 5), random(-5, 5)));
}

function draw(){
background(230); 
for (let i = 0; i < n; i++) {
  mennesker[i].show();
  mennesker[i].collision(windowWidth, windowHeight);
}
}
class Menneske {
  constructor(x, y, radius, retning_x, retning_y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.retning_x = retning_x;
    this.retning_y = retning_y;
  }

  show() {
    circle(this.x, this.y, this.radius*2);
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
