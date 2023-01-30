let a = 0.5;
let b = 7;
let c = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  stroke(0);
  noFill();
  beginShape();
  for (let x = -100; x <= 100; x++) {
    let y = a * x * x + b * x + c;
    vertex(x + 200, -y + 200);
  }
  endShape();
}
if (button_2.mousePressed(Værdi)) {
  let y = 
  let h = a*x*x+b*x+c-(x-(mouseX-width/2)**2+(y-(mouseY-height/2)))
  let Dh = 2*a*x+2*(mouseX-width/2)+b-2*x
  x1 = x - h/Dh
  console.log(h);
}
for(let i = 0; i<10; i++) {
  let y = b+sqrt((-a)**2+2*x*a+r**2-x**2)
  let h = a*x*x+b*x+c-(x-(mouseX-width/2)**2+(y-(mouseY-height/2)))
  let Dh = 2*a*x+2*(mouseX-width/2)+b-2*x
  x1 = x - h/Dh
  console.log(x1);
}