function setup() {
  createCanvas(400, 400);
  let wordcloud = [
    "Javascript",
    "Python",
    "C++",
    "C",
    "C#",
    "Julia",
    "Java",
    "Go",
    "R",
    "Basic",
  ];
  for (let i = 0; i < wordcloud.length; i++) {
    text(wordcloud[i], random(400), random(400));
    i = i + 1;
  }
}
// det denne kode gør er at den har et for loop hvori det så siger vi sætter i til 0 og hvis i så er mindre end wordcloud så skal den køre for loopet og plusse med 1
// til sidst siger den så at i er lige med i + 1 som så betyder at den vil komme til at springe en over.
