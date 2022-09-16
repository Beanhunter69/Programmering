let x;
let justHitRightWall;
let xspeed = 3;
// her sætter den bare nogle variabler til denne slags
// kode fx sætter den x speed = 3; 
function setup() { 
  createCanvas(400, 400);
  x = width / 2;
// her sætte vi så x til at være halvdelen af width som er 200
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  //denne if statement siger at hvis x er større end bredden eller mindre end 0 så skal den bevæge sig. 
  // 25 kommer fra at x er inde i midten af ciklen og den derfor skal trække 25 fra når den rammer kanten

  
  //Move
  x += xspeed;
  // denne ting siger så at x skal bevæge sig med farten på 3
  ellipse(x, height/2, 50, 50);
}