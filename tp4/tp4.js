let cazador= []; // Array para la secuencia
let cazadores=[];
let imgFondo;
let logo;
let contador=0;
let estado;
let freno;
let interfaces;
let textos;
let titulos;
let size;
let ancho;
let alto;
let x;
let y;

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}




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
  mensaje=loadImage("data/creditos.png");
  cerrar=loadImage("data/cerrar.png");
  error=loadImage("data/error.png");
  ups=loadImage("data/mensaje.png");
}


function setup() {
  createCanvas(800, 600);
  estado=0;
}


function draw() {
  background(50, 250, 150);

  if (estado == 0) {//animación corriendo
    fondo();
    personajes();
  } else if (estado == 1) {//menú + logo
    fondo();
    menu();  
    
  } else if (estado == 2) {//empezar
    fondo();
    empezar();
  }else if (estado == 3) {//creditos
    fondo();
    creditos();
  }else if (estado == 4) {//salir + reinicio
    background(0,40,50);
    fondo();
    salir();
  }
}




function mousePressed() {
  // Menú
  if (estado == 1) {
    // Botón CREDITOS
    if (botones(width/2,400,200,40)) {
      estado = 2;   // error al empezar
      contador = 0;
    }
    if (botones(width/2, 450, 200, 40)) {
      estado = 3;   // cambia a pantalla de créditos
      contador = 0;
    }

    // Botón SALIR
    if (botones(width/2, 500, 200, 40)) {
      estado = 4;   // sale y reinicia
      contador = 0;
    }
     
  }

  // Créditos
  else if (estado == 3) {
    // Botón VOLVER
    if (botones(535, 485, 200, 40)) {
      estado = 1;   // vuelve al menú
      contador = 0;
    }
  }else if (estado == 2) {
    // Botón VOLVER
    if (botones(560, 390, 30, 30)) {
      estado = 1;   // vuelve al menú
      contador = 0;
    }
  }
}
