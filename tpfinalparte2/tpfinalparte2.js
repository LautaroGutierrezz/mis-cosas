let fondo=[];
let homero=[];
let tipografia;
let pantallaInicio;
let x;
let y;
let size;
let estado=0;
let contador;
let musica;
let cursorImg;
let posX=300;
function preload() {
  for (let i = 0; i < 1; i++) {
    fondo[i] = loadImage("data/fondo/" + nf(i, 3) + ".png");
  }
  for (let j = 0; j < 1; j++) {
    homero[j] = loadImage("data/homero/" + nf(j, 2) + ".png");
  }
  tipografia=loadFont("data/tipografias/simpson.ttf");
  pantallaInicio=loadImage("data/inicio.jpg");
  musica= loadSound("data/musica.mp3");
  cursorImg = loadImage("data/cursor.png");
}
function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function setup() {
  createCanvas(800, 400);
  noCursor();
}

function draw() {
  if (estado==0) {
    inicio_();
  } else if (estado==1) {
    fondo_();
    homero_();
  }
}

function mousePressed() {
  if (estado==0) {
    botones(width/2, 300, 200, 40);
    estado=1;
    contador=0;
    musica.isLoaded() && !musica.isPlaying()
      musica.setVolume(0.2);
    musica.loop();
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    contador = 0;
    tiempo = 0;
    if (musica.isPlaying()) {
      musica.stop();
    }
  }

  if (key === 'S' || key === 's') {
    if (musica.isPlaying()) {
      musica.stop();
    } else {
      musica.setVolume(0.2);
      musica.loop();
    }
  }
}
