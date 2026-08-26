let cazador= []; // Array para la secuencia
let cazadores=[];
let imgFondo;
let logo;
let contador=0;
let freno;
let interfaces;
function preload() {
  // Fondo
  imgFondo = loadImage("data/fondo.png");
  //personajes
  for (let i = 0; i < 10; i++) {
    // nf(i,3) genera números con ceros a la izquierda (ej: 001, 002...)
    cazador[i] = loadImage("data/secuencia/" + nf(i, 3) + ".png");
  }
  for (let j=0; j<8; j++) {
    cazadores[j]=loadImage("data/secuenciaDos/" + nf(j, 2) +".png");
  }

  //logo del juego
  logo= loadImage("data/logo.png");
  interfaces=loadFont("data/tipografia.ttf");
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(230);
  fondo();
  personaje();
  logoJuego();
}


function fondo() {
  imageMode(CENTER);
  image(imgFondo, width / 2, height / 2, 800, 600);
}

function personaje() {
  contador++;
  push();
  imageMode(CENTER);
  image(cazador[(frameCount/6|0)%10], contador*3.5, 400, 200, 200);
  pop();
  push();
  translate(-950, 0);
  imageMode(CENTER);
  image(cazadores[(frameCount/12|0)%8], contador*3, 320, 190, 190);
  image(cazadores[(frameCount/12|0)%8], contador*2.8, 360, 200, 200);
  image(cazadores[(frameCount/12|0)%8], contador*2.7, 450, 200, 200);
  image(cazadores[(frameCount/12|0)%8], contador*2.9, 500, 200, 200);
  pop();
}
function logoJuego() {
  contador++;
  push();
  translate(0, -900);
  if (contador< 660) { //lo pongo en 660 porque contador avanza 1.64 veces más rapido, mi idea es que durara 6 segundos
    freno= 1+contador*1.64; //el logo se mueve hacia abajo y se mueve en una velocidad de 1.64
  } else {
    freno= 1+360*3 //cuando la imagen llegue a los 6 segundos se frenara en esta posición
  }
  image(logo, width/2, freno, 250, 150);
  pop();
  push();
  translate(-1000, 0);
  fill("#E0BE10");// color de relleno
  stroke(0);//color contorno
  //stroke(240,40,60); (ROJO Y BLANCO)
  strokeWeight(3)
    textAlign(CENTER, CENTER);
  textFont(interfaces);
  textSize(20);
  if ((frameCount % 120) < 60) {
    text("PULSA PARA INICIAR", freno*1.295, 290);
  }
  text("OPTIONS", freno*1.295, 350);
  text("SALIR", freno*1.295, 400);
  pop();
}
