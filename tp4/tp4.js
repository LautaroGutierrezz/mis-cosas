let cazador = []; // Array para la secuencia
let miImagen;
let contador=0;
function preload() {
  // Fondo
  miImagen = loadImage("data/fondo.png");

  // Secuencia del personaje (16 frames)
  for (let i = 0; i < 10; i++) {
    // nf(i,4) genera números con ceros a la izquierda (ej: 0001, 0002...)
    cazador[i] = loadImage("data/secuencia/" + nf(i, 3) + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(230);
  fondo();
  personaje();
}

function fondo() {
  imageMode(CENTER);
  image(miImagen, width / 2, height / 2+50, 800, 700);
}

function personaje() {
  contador++;
  push();
  imageMode(CENTER);
  image(cazador[(frameCount/6|0)%10], 200*contador/30, 400, 200, 200);
  pop();
}
