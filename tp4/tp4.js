let cazador= []; // Array para la secuencia
let cazadores=[];
let imgFondo;
let contador=0;
function preload() {
  // Fondo
  imgFondo = loadImage("data/fondo.png");

  // Secuencia del personaje (16 frames)
  for (let i = 0; i < 10; i++) {
    // nf(i,4) genera números con ceros a la izquierda (ej: 0001, 0002...)
    cazador[i] = loadImage("data/secuencia/" + nf(i, 3) + ".png");
  }
  for (let j=0; j<8; j++) {
    cazadores[j]=loadImage("data/secuenciaDos/" + nf(j, 2) +".png");
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(230);
  fondo();
  personaje();
  personajes();
}

function fondo() {
  imageMode(CENTER);
  image(imgFondo, width / 2, height / 2, 800, 600);
}

function personaje() {
  contador++;
  push();
  imageMode(CENTER);
  image(cazador[(frameCount/6|0)%10], contador*2, 400, 200, 200);
  pop();
}

function personajes() {
  contador++;
  push();
  translate(-950, 0);
  imageMode(CENTER);
  image(cazadores[(frameCount/6|0)%8], contador*2, 320, 190, 190);
  image(cazadores[(frameCount/6|0)%8], contador*1.8, 360, 200, 200);
  image(cazadores[(frameCount/6|0)%8], contador*1.7, 450, 200, 200);
  image(cazadores[(frameCount/6|0)%8], contador*1.9, 500, 200, 200);
  pop();
}
