function setup() {
  createCanvas(720, 400);
  background(200);
  translate(300, 200);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 4);
  }
}
// det den gør her er at den laver en hel masse ovaler som så alle mødes på den samme midte 
// hvis man så dividere med pi flere gange kommer den til at lave nogen mindre "blade" men de bliver sat tættere sammen. 

