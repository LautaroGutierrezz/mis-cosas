let pantallas = [];
let textos = [];
let sonidos=[];
let transiciones = [];
let tipografia;
let contador;
let ancho, alto, size, x, y;
let estado = 0; // 0 = menú, 1 = pantallaUno, 2 = créditos
let tiempo=0;
function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function preload() {
  for (let i = 0; i < 16; i++) {
    let pantalla = nf(i, 3); // "000", "001"
    pantallas[i] = loadImage("data/pantallas/" + pantalla + ".jpg");
  }

  tipografia = loadFont("data/tipografias/simpson.ttf");
  mensaje = loadFont("data/tipografias/mensaje.ttf");

  for (let j = 0; j < 3; j++) {
    let texto = nf(j, 2);
    textos[j] = loadImage("data/textos/" + texto + ".png");
  }
  for (let k = 0; k < 17; k++) {
    let transicion = nf(k, 4);
    transiciones[k] = loadImage("data/transicion/" + transicion + ".png");
  }
  for (let l = 0; l < 3; l++) {
    let sonido = nf(l, 1);
    sonidos[l] = loadSound("data/sonidos/" + sonido + ".mp3");
  }
}

function setup() {
  createCanvas(800, 450);
  contador = 0;
  console.log(pantallas);
}
function draw() {
  if (estado === 0) {
    menu();
  } else if (estado === 1) {
    creditos();
  } else if (estado === 2) {//intro
    pantallaUno();
  } else if (estado === 3) {//intro
    pantallaDos();
  } else if (estado === 4) {//intro
    pantallaTres();
  } else if (estado === 5) {//intro
    pantallaCuatro();
  } else if (estado === 6) {//intro
    pantallaCinco();
  } else if (estado === 7) {//intro
    pantallaSeis();
  } else if (estado === 8) {//intro
    pantallaSiete();
  } else if (estado === 9) {//intro
    pantallaOcho();
  } else if (estado === 10) {//Que debe hacer homero (volver casa/trabajo)
    pantallaNueve();
  } else if (estado === 11) {//volver a casa (+)
    pantallaDiez();
  } else if (estado === 12) {//volver al trabajo (*)
    pantallaOnce();
  } else if (estado === 13) {//Que debe hacer homero (quedarse/taberna) (+)
    pantallaDoce();
  } else if (estado === 14) {//Que debe hacer homero (hablar/esperar) (*)
    pantallaTrece();
  } else if (estado === 15) {//se queda en casa (final 1)
    pantallaCatorce();
  } else if (estado === 16) {//Cinematica (+)
    pantallaQuince();
  } else if (estado === 17) {//intro (+)
    pantallaDieciseis();
  }else if (estado === 18) {//intro (+)
    pantallaDiecisiete();
  }else if (estado === 19) {//Que debe hacer homero (Consejo/beber) (+)
    pantallaDieciocho();
  }
}

function mousePressed() {
  // Menú principal
  if (estado == 0) {
    if (botones(width/2, 300, 200, 40)) {
      estado = 2;
      contador = 0;
      if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
        sonidos[0].setVolume(0.2);
        sonidos[0].loop();
      }
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
    }

    if (botones(width/2, 350, 200, 40)) {
      estado = 1;
      contador = 0;
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
      if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
        sonidos[2].setVolume(0.5);
        sonidos[2].loop();
      }
    }
  }

  // Créditos
  else if (estado == 1) {
    if (botones(700, 400, 200, 40)) {
      estado = 0;
      contador = 0;
      if (sonidos[2].isPlaying()) sonidos[2].stop();
    }
  }

  // Avance lineal de pantallas
  else if (estado == 3) {
    estado = 4;
    contador = 0;
  } else if (estado == 4) {
    estado = 5;
    contador = 0;
  } else if (estado == 5) {
    estado = 6;
    contador = 0;
  } else if (estado == 6) {
    estado = 7;
    contador = 0;
  } else if (estado == 7) {
    estado = 8;
    contador = 0;
  } else if (estado == 8) {
    estado = 9;
    contador = 0;
  } else if (estado == 9) {
    estado = 10;
    contador = 0;
  }

  // Pantalla con opciones (estado 10)
  else if (estado == 10) {//opcion A volver a csa
    if (botones(220, 350, 300, 100)) {
      estado = 11;
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
    }
    if (botones(580, 350, 300, 100)) {//opcion B volver al trabajo
      estado = 12;
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
    }
  } else if (estado == 11) {
    estado = 13;
    contador = 0;
  } else if (estado == 12) {
    estado = 14;
    contador = 0;
  } else if (estado == 13) {//opcion A quedarse
    if (botones(220, 350, 300, 100)) {
      estado = 15;
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
    }
    if (botones(580, 350, 300, 100)) {//opcion B ir al bar 
      estado = 16;
      contador = 0;
      tiempo = 0;
      if (sonidos[1].isLoaded() && !sonidos[1].isPlaying()) {
        sonidos[1].setVolume(0.2);
        sonidos[1].play();
      }
    }
  } else if (estado == 15) {//(final)
    estado = 0;
    contador = 0;
  } else if (estado == 17) {
    estado = 18;
    contador = 0;
  }else if (estado == 18) {
    estado = 19;
    contador = 0;
  }
}


function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    contador = 0;
    tiempo = 0;
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();
    }
  }

  if (key === 'S' || key === 's') {
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();   // si está sonando lo frena
    } else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();   // si está detenido lo arranca en loop
    }
  }
}
