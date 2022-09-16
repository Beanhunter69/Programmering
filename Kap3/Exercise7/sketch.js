let x; 
let y; 
let xspeed; 
let yspeed; 
// her laver man nogle variabler//
function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  // her sætter man x til halvdelen af bredden og sætter y til halvdelen af højden//
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
  // her sætter man de andre variabler til noget og i yspeed giver man den et tal og ganger med xspeed//
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
// her siger man så at der bliver lavet en background og den får så en farve så laver man så en ellipse som man så har givet x og y til ellipsen// 
// tilsidst siger de at x bliver plusset med xspeed//
}
