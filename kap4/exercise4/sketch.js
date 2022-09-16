function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  // denne del af koden siger at hvis mousen er mindre end bredden divideret med 3 så skal den lave en trekant som har bredden/3 og som har den samme højde som canvaset.// 
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  // her siger den at hvis ikke den første del er rigtig så skal den gå videre til denne her hvor at den så siger at hvis musen er mindre eller lig med bredden*2/3 så skal den lave en trekant som skal placeres det sted som bredden har størrelse// 
  // og så har den bredden/3 og den samme højde som canvaset// 
  else {
    rect(width*2/3, 0, width/3, height);
  }
  // så siger den at hvis ingen af det to øverste er opfyldt så skal den gå til denne her og lave en anden trekant som skal placeres det sted som bredden*2/3 har størrelse og har resten som de andre trekanter. 
}