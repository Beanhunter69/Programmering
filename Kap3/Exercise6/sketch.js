// Her sætter de nogle variabler øverst så det virker til hele koden// 
var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
// her laver man en function hvorefter man starter med en function setup som siger at den kun kører i starten af programmet så bagefter kører den alt det der er mellem den og lavere derfor et canvas//

} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);
// her laver man så en function draw som kører hele tiden og ikke kun i starter så//
// så laver den en fill som giver cirklen en farve og i dette tilfælde er det farven sort//    
  if (x >= 400){
   x = 0; 
  }
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
// Her starter de med nogle if statements som siger at hvis x er større eller lig med 400 skal programment sætte x til 0// 
// så kommer der nogle flere if statements som siger at hvis du trykker på oppil så skal den rykke sig ud af y aksen, den siger ligesom til programmet at den skal minusse Y med 1//
// så sker der en else if statement som siger at hvis ikke det første sker så skal den gøre noget andet//
// der sker meget af det samme på denne if statement men på denne her gør den det bare med x aksen, altså hvis Left knappen bliver trykket så skal den minusse x med 1// 
// den her else if statement er meget ligesom dem anden if statement det den skal er bare hvis ikke den kører if statementet så kan den kører den anden hvis den bliver trykket på// 

}