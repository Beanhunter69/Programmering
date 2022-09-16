function setup() 
{ 
 createCanvas(400, 400); 
} 
function draw() 
{ 
 background(204); 
  
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'a') || (key == 'A')) { line(90, 20, 160, 150), line(20, 150, 90, 20), line(134,100,45,100,); } 
  if ((key == 'v') || (key == 'V')) { line(30, 20, 60, 150), line(90, 20, 60, 150);  } 
 } 
 } 
 