function setup() {
  createCanvas(400, 400);
  console.log(2 == 2); 
console.log(2 == '2'); 
// !=
console.log(3 != 2); 
console.log('hello' != 'Hello'); 
//===
console.log(2 === 2); 
console.log(2 === '2'); 
// denne her er falsk fordi at 2 ikke er lig med 2 som skal printes//
// !==
console.log(2 !== '2'); 
console.log(2 !== 2);
// den ehr er også forkert fordi den ikke putter noget i consolen hvis det er mellem 2// 
}

function draw() {
  background(220);

}
