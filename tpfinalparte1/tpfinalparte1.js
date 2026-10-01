let pantallas = [];
let textos = [];
let transiciones = [];
let tipografia;
let contador;
let ancho, alto, size, x, y;
let estado = 0; // 0 = menú, 1 = pantallaUno, 2 = créditos

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function preload() {
  for (let i = 0; i < 2; i++) {
    let pantalla = nf(i, 3); // "000", "001"
    pantallas[i] = loadImage("data/pantallas/" + pantalla + ".jpg");
  }

  tipografia = loadFont("data/simpson/simpson.ttf");

  for (let j = 0; j < 3; j++) {
    let texto = nf(j, 2);
    textos[j] = loadImage("data/textos/" + texto + ".png");
  }
  for (let k = 0; k < 17; k++) {
    let transicion = nf(k, 4);
    transiciones[k] = loadImage("data/transicion/" + transicion + ".png");
  }
}

function setup() {
  createCanvas(800, 450);
  contador = 0;
}

function draw() {
  if (estado === 0) {
    menu();
  } else if (estado === 1) {
    pantallaUno();
  } else if (estado === 2) {
    creditos();
  }
}

function mousePressed() {
  if (estado == 0) {
    if (botones(width/2, 300, 200, 40)) {
      estado = 1;
      contador = 0;
    }
    if (botones(width/2, 350, 200, 40)) {
      estado = 2;
      contador = 0;
    }
  } else if (estado == 2) {
    // Botón VOLVER con tus valores
    if (botones(700, 400, 200, 40)) {
      estado = 0; // vuelve al menú
      contador = 0;
    }
  }
}

function menu() {
  image(pantallas[0], -50, -50, width+100, height+100);

  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("HOMERO Y LA TENTACION", width/2, 50);

  let opciones = ["PULSA PARA INICIAR", "CREDITOS"];
  ancho = 200;
  alto = 40;

  for (let i=0; i<opciones.length; i++) {
    x = width/2;
    y = 300 + i*50;
    size = 30;

    if (mouseX > x-ancho/2 &&
      mouseX < x+ancho/2 &&
      mouseY > y-alto/2 &&
      mouseY < y+alto/2) {
      size = 38;
      fill((frameCount % 20) < 10 ? "#CBAB06" : "#897201");
    } else {
      fill("#897201");
    }

    textSize(size);
    text(opciones[i], x, y);
  }
}

function pantallaUno() {
  if (contador < transiciones.length) {
    image(pantallas[1], -50, -50, width+100, height+100);
    image(transiciones[contador], 0, 0, width, height);

    // avanza cada 10 frames (más lento)
    if (frameCount % 5 === 0) {
      contador++;
    }
  } else {
    image(pantallas[1], -50, -50, width+100, height+100);
  }
}

function creditos() {
  contador++;
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("CREDITOS", width/2, 450-contador);

  let honores = ["DIRECTORES", "AUTORES", "PROGRAMADORES PRINCIPALES", "EQUIPO DE TRABAJO"];
  let nombres = ["Lautaro Gutierrez", "Paulina Moretti"];

  for (let i=0; i<honores.length; i++) {
    let y = 550 - contador+i*120; // espacio entre bloques, el - contador hace que las letras suban de arriba a abajo
    fill("#897201");
    textSize(25);
    text(honores[i], width/2, y);

    // segundo for para los nombres
    for (let j=0; j<nombres.length; j++) {
      fill(250);
      textSize(25);
      text(nombres[j], width/2, y + 40 + j*30);
    }
  }
if (mouseX> 700-ancho/2 &&
    mouseX< 700+ancho/2 &&
    mouseY> 400-alto/2 &&
    mouseY< 400+alto/2) {
    if ((frameCount % 20) < 10) {
      fill("#CBAB06"); // amarillo
    } else {
      fill("#897201"); // marrón
    }
  } else {
    fill("#897201"); // color normal
  }
  textSize(25);
  text("VOLVER", 700, 400);
}
