function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if(keyIsPressed && key === 'f')[
    rect(mouseX,mouseY,random(100,300),random(100,300))
  ]
  if(keyIsPressed && key === 'c')[
    circle(mouseX,mouseY,25,25)
  ]
  if(keyIsPressed && key === 'e')[
    ellipse(mouseX,mouseY, 75, 100)
  ]
}