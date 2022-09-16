function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
}
// her siger den bare at når man klikker på h knappen så skal den lave en linje som så skal få den til at ligne et h det modsatte med n
// grunden til at man kan få den til det er fordi at der er to linjer som man derfor kan få ti lat ligne endten h eller n
