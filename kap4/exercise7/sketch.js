function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); 
  // strokeWeight gør at den sætter størrelsen på ting
  } 
  function draw() { 
   background(204); 
   stroke(102); 
   // hvor imod stroke bare sætter farven
   line(40, 0, 70, height); 
   if (mouseIsPressed) { //hvor kommer denne variable fra?
    if (mouseButton == LEFT) {  // og hvad med den?
  // de her variabler kommer fra når man klikker på musen så når mouseispressed
  // så skal den bagefter tjekke om mouse == left som betyder om der er klikket på left mus 
      stroke(255);
      // sætter farven på den linje som kommer i slutningen af koden 
    } 
    else { 
     stroke(0); 
     // mener bare at hvis den første ikke bliver udløst så er det denne else statement som bliver
    } 
    line(0, 70, width, 50);
    } 
    // her er denne linje jeg snakkede om som nu skifter mellem farven sort og hvid.
  } 