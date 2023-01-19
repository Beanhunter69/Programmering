function setup() {
  createCanvas(1000, 1000);
  let navnesky = [
    "vitus",
    "MadsSOMELSKERPIK",
    "SonGoku",
    "Bønnejæger",
    "beanhunter",
    "alexander",
    "victorius",
    "Sebastian",
    "Snaske",
    "Tim",
  ];
  for (let i = 0; i < navnesky.length; i++) {
    textSize(navnesky.length * 10);
    text(navnesky[i], random(400), random(400), random(400), random(400));
  }
}
