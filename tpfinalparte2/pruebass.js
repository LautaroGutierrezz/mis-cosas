let p1;
let ob1, ob2, ob3, ob4, ob5;
let estado;
let contador = 0;
let homero = [];
let objetos = [];
let sonidos = [];
let tutorial = [];
let vidas = 5; // cantidad de vidas
let tiempoJuego = 0; //contador 

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
  for (let j = 0; j < 8; j++) {
    objetos[j] = loadImage("data/objetos/" + nf(j, 1) + ".png");
  }
  pantallaInicio = loadImage("data/inicio.jpg");
  fondo = loadImage("data/fondo.jpg");
  cursorImg = loadImage("data/cursor.png");
  tipografia = loadFont("data/tipografias/simpson.ttf");
  for (let k = 0; k < 2; k++) {
    sonidos[k] = loadSound("data/sonidos/" + nf(k, 1) + ".mp3");
  }
  for (let l = 0; l < 3; l++) {
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
  ob4 = new objeto4(200, -100);
  ob5 = new objeto5(400, -100);
}

function draw() {
  if (estado == 0) {
    inicio();
  } else if (estado == 1) {
    tutorial1();
  } else if (estado == 2) {
    tutorial2();
  } else if (estado == 3) {
    tutorial3();
  } else if (estado == 4) {
    tiempoJuego++;
    image(fondo, -70, 0, width + 150, height); //imagen de la cocina

    // velocidades 
    if (tiempoJuego > 1800) { // 30 segundos
      ob1.velocidad = 1;
      ob2.velocidad = 1;
    }
    if (tiempoJuego > 2700) { // 45 segundos
      ob3.activo = true; //cuando ponemos true estamos invocando al valor que está (apagado)
      ob3.velocidad = 2;
      ob4.activo = true; //cuando ponemos true estamos invocando al valor que está (apagado)
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
      estado = 5;
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.5);
        sonidos[1].play();
      }
    }
  } else if (estado == 5) {
    final(); // pantalla final
  }
}

function mousePressed() {
  if (estado == 0 && botones(width/2, 300, 200, 40)) {
    estado = 1;
  } else if (estado == 1 && botones(730, 380, 200, 40)) {
    estado = 2;
  } else if (estado == 2 && botones(730, 380, 200, 40)) {
    estado = 3;
  } else if (estado == 3 && botones(730, 380, 200, 40)) {
    if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
    iniciarJuego(); // pasa al estado 4
  }
  if (estado == 5 && botones(700, 380, 200, 40)) {
    estado = 0;
    reiniciarJuego();
    if (sonidos[1].isPlaying()) sonidos[1].stop();
  }
}
function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    reiniciarJuego();
    if (sonidos[0].isPlaying()) sonidos[0].stop();
  }

  if (estado == 4 && (key === 'S' || key === 's')) {
    if (sonidos[0].isPlaying()) sonidos[0].stop();
    else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
  if (estado == 5 && (key === 'S' || key === 's')) {
    if (sonidos[1].isPlaying()) sonidos[1].stop();
    else sonidos[1].setVolume(0.2);
  }
}


function iniciarJuego() {
  estado = 4;
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
  ob3.activo = false;
  ob4.velocidad = 1;
  ob4.resetear();
  ob4.activo = false;
  ob5.velocidad = 1;
  ob5.resetear();
  ob5.activo = false;
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
  ob3.activo = false;
  ob4.velocidad = 1;
  ob4.resetear();
  ob4.activo = false;
  ob5.velocidad = 1;
  ob5.resetear();
  ob5.activo = false;
}
