let pantallas = [];
let textos = [];
let sonidos = [];
let transiciones = [];
let tipografia;
let mensaje;
let contador;
let ancho, alto, size, x, y;
let estado = 0;
let tiempo = 0;
let cursorImg;

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function botonCambio(x_, y_, w_, h_, nuevoEstado) {
  if (botones(x_, y_, w_, h_)) {
    estado = nuevoEstado;
    contador = 0;
    tiempo = 0;
  }
}

function reproducirEfecto() {
  if (sonidos[1] && sonidos[1].isLoaded()) {
    sonidos[1].stop();
    sonidos[1].play();
  }
}

function preload() {
  cursorImg = loadImage("data/cursor/cursor.png");


  for (let i = 0; i < 29; i++) {
    let pantalla = nf(i, 3);
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
  noCursor();
  contador = 0;
}

function draw() {
  if (estado === 0) menu();
  else if (estado === 1) creditos();
  else if (estado === 2) pantallaUno();
  else if (estado === 3) pantallaDos();
  else if (estado === 4) pantallaTres();
  else if (estado === 5) pantallaCuatro();
  else if (estado === 6) pantallaCinco();
  else if (estado === 7) pantallaSeis();
  else if (estado === 8) pantallaSiete();
  else if (estado === 9) pantallaOcho();
  else if (estado === 10) pantallaNueve();
  else if (estado === 11) pantallaDiez();
  else if (estado === 12) pantallaOnce();
  else if (estado === 13) pantallaDoce();
  else if (estado === 14) pantallaTrece();
  else if (estado === 15) pantallaCatorce(); // Final casa
  else if (estado === 16) pantallaQuince();
  else if (estado === 17) pantallaDieciseis();
  else if (estado === 18) pantallaDiecisiete();
  else if (estado === 19) pantallaDieciocho();
  else if (estado === 29) pantallaDiecinueve();
  else if (estado === 30) pantallaVeinte();
  else if (estado === 31) pantallaVeintiuno();
   else if (estado === 32) pantallaVeintidos();
  else if (estado === 24) pantallaFinalBebedor();

  // Camino Mindy
  else if (estado === 20) pantallaHablarMindy1();
  else if (estado === 21) pantallaHablarMindy2();
  else if (estado === 22) pantallaHablarMindy3();
  else if (estado === 23) pantallaInvitacionCena();
  else if (estado === 33) pantallaHablarMindy4();
  else if (estado === 34) pantallaHablarMindy5();
  else if (estado === 35) pantallaInvitacionCasa();
  else if (estado === 36) pantallaHablarMindy6();
  else if (estado === 37) pantallaHablarMindy7();
  else if (estado === 38) pantallaHablarMindy8();
  else if (estado === 39) pantallaFinalInfiel();
  else if (estado === 40) pantallaFinalFiel();
  else if (estado === 41) pantallaArrepentido();

  // Camino esperar Mindy
  else if (estado === 25) pantallaEsperarMindy1();
  else if (estado === 26) pantallaEsperarMindy2();
  else if (estado === 27) pantallaEsperarMindy3();
  else if (estado === 28) pantallaFinalEsperarMindy();

  image(cursorImg, mouseX, mouseY, 64, 64);
}


function mousePressed() {
  if (estado == 0) {
    // Menú principal
    botonCambio(width/2, 300, 200, 40, 2); // continuar
    botonCambio(width/2, 350, 200, 40, 1); // créditos

    if (botones(width/2, 300, 200, 40)) {
      if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
        sonidos[0].setVolume(0.2);
        sonidos[0].loop();
      }
      reproducirEfecto();
    }
    if (botones(width/2, 350, 200, 40)) {
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
        sonidos[2].setVolume(0.5);
        sonidos[2].loop();
      }
      reproducirEfecto();
    }
  } else if (estado == 1) {
    botonCambio(700, 400, 200, 40, 0); // volver al menú
    if (botones(700, 400, 200, 40)) {
      if (sonidos[2].isPlaying()) sonidos[2].stop();
      reproducirEfecto();
    }
  } else if (estado == 3) {
    botonCambio(690, 430, 200, 40, 4);
  } else if (estado == 4) {
    botonCambio(690, 430, 200, 40, 5);
  } else if (estado == 5) {
    botonCambio(690, 430, 200, 40, 6);
  } else if (estado == 6) {
    botonCambio(690, 430, 200, 40, 7);
  } else if (estado == 7) {
    botonCambio(690, 430, 200, 40, 8);
  } else if (estado == 8) {
    botonCambio(690, 430, 200, 40, 9);
  } else if (estado == 9) {
    botonCambio(690, 430, 200, 40, 10);
  } else if (estado == 10) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 11;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 12;
      reproducirEfecto();
    }
  } else if (estado == 11) {
    botonCambio(690, 430, 200, 40, 13);
  } else if (estado == 12) {
    botonCambio(690, 430, 200, 40, 14);
  } else if (estado == 13) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 15;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 16;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 14) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 20; // Hablarle a Mindy
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 25; // Esperar que Mindy lo vea
      contador = 0;
      tiempo = 0;
    }
  } else if (estado == 15) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 16) {
    botonCambio(690, 430, 200, 40, 17);
  } else if (estado == 17) {
    botonCambio(690, 430, 200, 40, 18);
  } else if (estado == 18) {
    botonCambio(690, 430, 200, 40, 19);
  } else if (estado == 19) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 14;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 29;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 29) {
    botonCambio(690, 430, 200, 40, 30);
  } else if (estado == 30) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 31;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 24;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 31) {
    botonCambio(690, 430, 200, 40, 32);
  } else if (estado == 32) {
    botonCambio(690, 430, 200, 40, 25);
  } else if (estado == 24) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 20) {
    botonCambio(690, 430, 200, 40, 21);
  } else if (estado == 21) {
    botonCambio(690, 430, 200, 40, 22);
  } else if (estado == 22) {
    botonCambio(690, 430, 200, 40, 23);
  } else if (estado == 23) {
    if (botones(220, 350, 300, 100)) {
      estado = 33;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 15;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 34) {
    botonCambio(690, 430, 200, 40, 35);
  } else if (estado == 35) {
    if (botones(220, 350, 300, 100)) {
      estado = 36;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 41;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 41) {
    botonCambio(690, 430, 200, 40, 0);
  }else if (estado == 36) {
    botonCambio(690, 430, 200, 40, 37);
  } else if (estado == 37) {
    botonCambio(690, 430, 200, 40, 38);
  } else if (estado == 38) {
    if (botones(220, 350, 300, 100)) {
      estado = 39;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 40;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 39) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 40) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 25) {
    botonCambio(690, 430, 200, 40, 26);
  } else if (estado == 26) {
    botonCambio(690, 430, 200, 40, 27);
  } else if (estado == 27) {
    botonCambio(690, 430, 200, 40, 28);
  } else if (estado == 28) {
    botonCambio(690, 430, 200, 40, 0);
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
      sonidos[0].stop();
    } else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
}
