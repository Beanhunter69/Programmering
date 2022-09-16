let y = 100;
let x;
let x1;
let z = 100;
let timer = 0;
let ost1 = 0;
let ost2 = 0;

let oste = [[400,400],[200,200]]

function setup() {
  createCanvas(512, 512);
  strokeWeight(10);
  
  x = random(0,width)
  x1 = random(10,width)
}

function draw() {
  background(204);
  for (let i = 0; i < oste.length; i++) {
    ost1(oste[i][0],oste[i],[1],i);
  }  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  circle(x, y, 100);
  rect(x1,z,50,50)
  if (keyIsDown(87)) {
    z -= 5;
  }
  if (keyIsDown(83)) {
    z += 5;
  }
  if (keyIsDown(68)) {
    x1 += 5;
  }
  if (keyIsDown(65)) {
    x1 -= 5;
  }
  timer++;
  if(timer == 300) {
    timer = 0;
    oste.push([random(0,width),random(0,height)]);
  } 
  text("player 1: " + ost1, 10, 10);
  text("player 2: " + ost2, 530, 10);

 
}