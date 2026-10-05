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
    if (botones(width/2, 300, 200, 40)) {
      estado = 2;
      contador = 0;
      if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
        sonidos[0].setVolume(0.2);
        sonidos[0].loop();
      }
      reproducirEfecto();
    }
    if (botones(width/2, 350, 200, 40)) {
      estado = 1;
      contador = 0;
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
        sonidos[2].setVolume(0.5);
        sonidos[2].loop();
      }
      reproducirEfecto();
    }
  } else if (estado == 1) {
    if (botones(700, 400, 200, 40)) {
      estado = 0;
      contador = 0;
      if (sonidos[2].isPlaying()) sonidos[2].stop();
      reproducirEfecto();
    }
  } else if (estado == 3) {
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
  } else if (estado == 10) {
    if (botones(220, 350, 300, 100)) {
      estado = 11;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 12;
      reproducirEfecto();
    }
  } else if (estado == 11) {
    estado = 13;
    contador = 0;
  } else if (estado == 12) {
    estado = 14;
    contador = 0;
  } else if (estado == 13) {
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
  }

  // DECISIÓN EN PANTALLA TRECE (Hablarle/Esperar)
  else if (estado == 14) {
    if (botones(220, 350, 300, 100)) {
      estado = 20; // Hablarle a Mindy
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 25; //  Esperar que Mindy lo vea
      contador = 0;
      tiempo = 0;
    }
  } else if (estado == 15) {
    estado = 0;
    contador = 0;
  } else if (estado == 16) {
    estado = 17;
    contador = 0;
  } else if (estado == 17) {
    estado = 18;
    contador = 0;
  } else if (estado == 18) {
    estado = 19;
    contador = 0;
  }

  //OPINIÓN EN LA TABERNA (ESTADO 19)
  else if (estado == 19) {
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
    estado = 30;
    contador = 0;
    tiempo = 0;
  } else if (estado == 30) {
    // Decisión Final Bebedor: Ir igual / Olvidarse
    if (botones(220, 350, 300, 100)) {
      estado = 31; // Ir igual borracho
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 24; // Olvidarse de todo (FIN BEBEDOR)
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 31) {
    estado = 32;
    contador = 0;
    tiempo = 0;
  } else if (estado == 32) {
    estado = 25;
    contador = 0;
    tiempo = 0;
  }
  // CLIC EN EL NUEVO FINAL BEBEDOR
  else if (estado == 24) {
    estado = 0; // Volver al menú
    contador = 0;
    tiempo = 0;
    if (sonidos[0] && sonidos[0].isPlaying()) sonidos[0].stop();
  }

  //CONTROLES DE CLIC PARA EL TRAMO DE HABLARLE A MINDY
  else if (estado == 20) {
    estado = 21;
    contador = 0;
  } else if (estado == 21) {
    estado = 22;
    contador = 0;
  } else if (estado == 22) {
    estado = 23;
    contador = 0;
  } else if (estado == 23) {
    if (botones(220, 350, 300, 100)) {
      estado=33;
      contador=0;
      tiempo=0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 15;
      contador = 0;
      reproducirEfecto();
    }
  }//hablarle a mindy
  else if (estado == 34) {
    estado = 35;
    contador = 0;
  } else if (estado == 35) {
    if (botones(220, 350, 300, 100)) {
      estado=36;
      contador=0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 41;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 36) {
    estado = 37;
    contador = 0;
  } else if (estado == 37) {
    estado = 38;
    contador = 0;
  } else if (estado == 38) {
    if (botones(220, 350, 300, 100)) {
      estado=39;
      contador=0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 40;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 39) {
    estado = 0;
    contador = 0;
    tiempo=0;
  } else if (estado == 40) {
    estado = 0;
    contador = 0;
    tiempo=0;
  } else if (estado == 25) {
    estado = 26;
    contador = 0;
  } else if (estado == 26) {
    estado = 27;
    contador = 0;
  } else if (estado == 27) {
    estado = 28;
    contador = 0;
  } else if (estado == 28) {
    estado = 0;
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
      sonidos[0].stop();
    } else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
}
