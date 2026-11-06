let p1;
let ob1, ob2, ob3, ob4, ob5;
let estado;
let contador = 0;
let homero = [];
let objetos = [];
let sonidos = [];
let tutorial = [];
let vidas = 5; // cantidad de vidas
let tiempoJuego = 0;

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function preload() {
  for (let i = 0; i < 1; i++) {
    homero[i] = loadImage("data/homero/" + nf(i, 2) + ".png");
  }
  for (let j = 0; j < 7; j++) {
    objetos[j] = loadImage("data/objetos/" + nf(j, 1) + ".png");
  }
  pantallaInicio = loadImage("data/inicio.jpg");
  fondo = loadImage("data/fondo.jpg");
  cursorImg = loadImage("data/cursor.png");
  tipografia = loadFont("data/tipografias/simpson.ttf");
  for (let k = 0; k < 4; k++) {
    sonidos[k] = loadSound("data/sonidos/" + nf(k, 1) + ".mp3");
  }
  for (let l = 0; l < 6; l++) {
    tutorial[l] = loadImage("data/tutorial/" + nf(l, 1) + ".jpg");
  }
}

function setup() {
  createCanvas(800, 400);
  noCursor();
  estado = 0;
  p1 = new personaje();

  ob1 = new objeto1(200, 100);
  ob2 = new objeto2(100, 100);
  ob3 = new objeto3(300, 100);
  ob4 = new objeto4(350, 100);
  ob5 = new objeto5(400, 100);
}

function draw() {
  if (estado == 0) {
    inicio();
  } else if (estado == 1) {
    tiempoJuego++;
    image(fondo, -70, 0, width + 150, height);

    // velocidades y aparición progresiva
    if (tiempoJuego > 1800) { // 30 segundos
      ob1.velocidad = 1;
      ob2.velocidad = 1;
    }
    if (tiempoJuego > 2700) { // 45 segundos
      ob3.activo = true;
      ob3.velocidad = 2;
      ob4.activo = true;
      ob4.velocidad =  2;
    }
    if (tiempoJuego > 4500) { // 120 segundos
      ob1.velocidad = 2;
      ob2.velocidad = 2;
      ob3.velocidad = 3;
      ob4.velocidad = 3;
    }
    if (tiempoJuego % 2400 === 0) { // cada 40 segundos aparece aleatoriamente
      ob5.activo = true;
      ob5.resetear();
    }

    // actualizar y verificar colisiones
    ob1.actualizar();
    ob1.verificarColision(p1.posX, p1.posY);
    ob2.actualizar();
    ob2.verificarColision(p1.posX, p1.posY);
    ob3.actualizar();
    ob3.verificarColision(p1.posX, p1.posY);
    ob4.actualizar();
    ob4.verificarColision(p1.posX, p1.posY);
    ob5.actualizar();
    ob5.verificarColision(p1.posX, p1.posY);
    p1.jugar();
    mostrarPuntaje();
    mostrarVidas();

    // chequeo de vidas
    if (vidas <= 0) {
      estado = 2;
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.5);
        sonidos[1].play();
      }
    }
  } else if (estado == 2) {
    final(); // pantalla final
  } else if (estado == 3) {
    tutorial0();
  } else if (estado == 4) {
    tutorial1();
  } else if (estado == 5) {
    tutorial2();
  } else if (estado == 6) {
    tutorial3();
  } else if (estado == 7) {
    tutorial4();
  } else if (estado == 8) {
    tutorial5();
  } else if (estado == 9) {
    creditos();
  }
}

function mousePressed() {

  if (estado == 0 && botones(width/2, 250, 200, 40)) {
    iniciarJuego();
    if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
  if (estado == 2 && botones(700, 380, 200, 40)) {
    estado = 0;
    reiniciarJuego();
    if (sonidos[1].isPlaying()) sonidos[1].stop();
  }//Tutorial
  if (estado == 0 && botones(width/2, 300, 200, 40)) {
    estado = 3;
    if (sonidos[3].isLoaded() && !sonidos[3].isPlaying()) {
      sonidos[3].setVolume(0.2);
      sonidos[3].loop();
    }
  } else if (estado == 3 && botones(730, 380, 200, 40)) {
    estado = 4;
  } else if (estado == 4 && botones(730, 380, 200, 40)) {
    estado = 5;
  } else if (estado == 5 && botones(730, 380, 200, 40)) {
    estado = 6;
  } else if (estado == 6 && botones(730, 380, 200, 40)) {
    estado = 7;
  } else if (estado == 7 && botones(730, 380, 200, 40)) {
    estado = 8;
  }
  if (estado == 8 && botones(730, 380, 200, 40)) {
    estado=0;
    contador=0;
    if (sonidos[3].isPlaying()) sonidos[3].stop();
  }
  if (estado == 0 && botones(width/2, 350, 200, 40)) {
    estado = 9;
    if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
      sonidos[2].setVolume(0.2);
      sonidos[2].loop();
    }
  } else if (estado == 9 && botones(730, 380, 200, 40)) {
    contador=0;
    estado = 0;
    if (sonidos[2].isPlaying()) sonidos[2].stop();
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    reiniciarJuego();
    if (sonidos[0].isPlaying()) sonidos[0].stop();
  }

  if (estado == 1 && (key === 'S' || key === 's')) {
    if (sonidos[0].isPlaying()) sonidos[0].stop();
    else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
  if (estado == 2 && (key === 'S' || key === 's')) {
    if (sonidos[1].isPlaying()) sonidos[1].stop();
    else sonidos[1].setVolume(0.2);
    sonidos[1].loop();
  }
  if (
  (estado == 3||estado == 4 ||estado == 5 ||estado == 6 ||estado == 7 ||estado == 8) && (key === 'S' || key === 's')){
  if (sonidos[3].isPlaying()) {
    sonidos[3].stop();
  } else {
    sonidos[3].setVolume(0.2);
    sonidos[3].loop();
  }
}
  if (estado == 9 && (key === 'S' || key === 's')) {
    if (sonidos[2].isPlaying()) sonidos[2].stop();
    else {
      sonidos[2].setVolume(0.2);
      sonidos[2].loop();
    }
  }
}


function iniciarJuego() {
  estado = 1;
  contador = 0;
  tiempoJuego = 0;
  vidas = 5;
  noSuperponer();
  ob1.velocidad = 1;
  ob1.resetear();
  ob2.velocidad = 1;
  ob2.resetear();
  ob3.velocidad = 1;
  ob3.resetear();
  ob3.activo = false; //al iniciar estan desactivados
  ob4.velocidad = 1;
  ob4.resetear();
  ob4.activo = false;//al iniciar estan desactivados
  ob5.velocidad = 1;
  ob5.resetear();
  ob5.activo = false;//al iniciar estan desactivados
}

function reiniciarJuego() {
  contador = 0;
  tiempoJuego = 0;
  vidas = 5;
  ob1.velocidad = 1;
  ob1.resetear();
  ob2.velocidad = 1;
  ob2.resetear();
  ob3.velocidad = 1;
  ob3.resetear();
  ob3.activo = false;//al iniciar estan desactivados
  ob4.velocidad = 1;
  ob4.resetear();
  ob4.activo = false;//al iniciar estan desactivados
  ob5.velocidad = 1;
  ob5.resetear();
  ob5.activo = false;//al iniciar estan desactivados
}
