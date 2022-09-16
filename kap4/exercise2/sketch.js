let back1 = 200
let back2 = 100

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
ellipse(200,200,50,50)
if (mouseX >= back1) {
  ellipse(200,200,50,50)
} else {
  rect(175,175,50,50)
} 
}
