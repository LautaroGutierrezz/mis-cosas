let fondo=[];
let homero=[];

function preload() {
  for (let i = 0; i < 1; i++) {
    fondo[i] = loadImage("data/fondo/" + nf(i, 3) + ".png");
  }
  for (let j = 0; j < 1; j++) {
    homero[j] = loadImage("data/homero/" + nf(j, 2) + ".png");
  }
}

function setup() {
  createCanvas(800, 400);
}


function draw() {
fondo_();
homero_();
 
}
