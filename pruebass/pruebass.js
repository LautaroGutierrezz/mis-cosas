let p1;
let ob1;
let ob2;
let ob3;
let ob4;
let estado;
let contador=0;
let homero=[];
let objetos=[];
let sonidos=[];
let tutorial=[];
let vidas=5;// cantidad de vidas
let tiempoJuego=0;


function preload() {
  for (let i = 0; i < 1; i++) {
    homero[i] = loadImage("data/homero/" + nf(i, 2) + ".png");
  }
  for (let j = 0; j < 8; j++) {
    objetos[j] = loadImage("data/objetos/" + nf(j, 1) + ".png");
  }
  pantallaInicio=loadImage("data/inicio.jpg");
  fondo=loadImage("data/fondo.jpg")
    cursorImg = loadImage("data/cursor.png");
  tipografia = loadFont("data/tipografias/simpson.ttf");
  for (let k = 0; k < 2; k++) {
    sonidos[k] = loadSound("data/sonidos/" + nf(k, 1) + ".mp3");
  }
  for (let l = 0; l < 3; l++) {
    tutorial[l] = loadImage("data/tutorial/" + nf(l, 1) + ".jpg");
  }
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
  estado=0;
  p1 = new personaje();
  ob1= new objeto1(200, 100);
  ob2= new objeto2(100, 100);
  ob3= new objeto3(300, 100);
  ob4= new objeto3(350, 100);
}

function draw() {
  if (estado==0) {
    inicio();
  } else if (estado==1) {
    tutorial1();
  } else if (estado==2){
    tutorial2();
  } else if (estado==3){
    tutorial3();
  } else if (estado==4) {
    tiempoJuego++;
    image(fondo, -70, 0, width+150, height);


    // velocidades según tiempo
    if (tiempoJuego > 1800) { //30 segundo
      ob1.velocidad = 2;
      ob2.velocidad = 2;
    }
    if (tiempoJuego > 2700) {//45 segundos
      ob1.velocidad = 2;
      ob2.velocidad = 2;
      ob3.activo=true;
      ob3.velocidad=random(1-2);
      
    }
    if (tiempoJuego > 4500) {//120 segundos
      ob4.activo=true;
      ob4.velocidad=random(1-2);
      ob1.velocidad = 3;
      ob2.velocidad = 3;
      ob3.velocidad = 2;
      
    }

    ob1.actualizar();
    ob1.verificarColision(p1.posX, p1.posY);
    ob2.actualizar();
    ob2.verificarColision(p1.posX, p1.posY);
    ob3.actualizar();
    ob3.verificarColision(p1.posX, p1.posY);
    ob4.actualizar();
    ob4.verificarColision(p1.posX, p1.posY);
    p1.jugar();
    mostrarPuntaje();
    mostrarVidas();

    //chequeo de vidas
    if (vidas <= 0) {//cuando ya no haya vidas pasa a estado 5
      estado = 5;
      if (sonidos[0].isPlaying()) {
        sonidos[0].stop();
      }
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
  if (estado==0 && botones(width/2, 300, 200, 40)) {
    estado=1;
  }else if (estado==1 && botones(730, 380, 200, 40)) {
    estado=2;
  }else if (estado==2 && botones(730, 380, 200, 40)) {
      estado=3;
  }else if (estado==3 && botones(730, 380, 200, 40)) {
    estado=4;
    contador=0;
    //valores de objetos
    tiempoJuego=0;
    ob1.velocidad=1;
    ob2.velocidad=1;
    ob1.resetear();
    ob2.resetear();
    ob3.resetear();
    ob4.resetear();
    ob3.activo = false;
    ob4.activo = false;
    vidas=5; // reinicia las vidas
    if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
  if (estado==5 && botones(700, 380, 200, 40)) {
    estado = 0;
    contador = 0;
    //valores de objetos
    tiempoJuego=0;
    ob1.velocidad=1;
    ob2.velocidad=1;
    ob1.resetear();
    ob2.resetear();
    ob3.resetear();
    ob4.resetear();
    ob3.activo = false;
    ob4.activo = false;
    vidas = 5; // reinicia las vidas también aquí

    if (sonidos[1].isPlaying()) {
      sonidos[1].stop();
    }
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    //valores de objetos
    tiempoJuego=0;
    ob1.velocidad=1;
    ob2.velocidad=1;
    ob1.resetear();
    ob2.resetear();
    ob3.resetear();
    ob4.resetear();
    ob3.activo = false;
    ob4.activo = false;
    contador = 0;
    vidas = 5; // reinicia las vidas al apretar R
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();
    }
  }

  if (estado==4 && (key === 'S' || key === 's')) {
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();
    } else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();
    }
  }
  if (estado==5 && (key === 'S' || key === 's')) {
    if (sonidos[1].isPlaying()) {
      sonidos[1].stop();
    } else {
      sonidos[1].setVolume(0.2);
    }
  }
}
