
function fondo() {
  imageMode(CENTER);
  image(imgFondo, width / 2, height / 2, 800, 600);
}


function personajes() {
  contador++;

  // Cazador 
  push();
  imageMode(CENTER);
  image(cazador[(frameCount/6|0)%10], contador*6, 400, 200, 200);
  pop();

//jinetes

  push();
  translate(-950, 0);
  imageMode(CENTER);

  for (let i = 0; i < velocidades.length; i++) {
    image(cazadores[(frameCount/12|0)%8], 
      contador * velocidades[i], 
      posicionesY[i], 200, 200);
  }

  pop();

  if (contador >= 60*6) {
    estado = 1;
    contador = 0;
  }
}



function menu() {
  contador++;
  if (contador < 180) {
    freno = 1+contador * 1.380;
  } else {
    freno = 250;
  }
  image(logo, width/2, freno, 300, 150);

  stroke(0);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textFont(interfaces);

  textos = ["PULSA PARA INICIAR", "CREDITOS", "SALIR"];
  ancho = 200;
  alto = 40;

  for (let i=0; i<3; i++) {
    x = width/2;
    y = 400 + i*50; //inrementa 50 cuadros en "y", en el valor de i<3 (hasta 500)
    size = 20;
//cuando el mouse pase por esas cordenadas el size del texto aumenta a 28
    if (mouseX > x-ancho/2 &&
      mouseX < x+ancho/2 &&
      mouseY > y-alto/2 &&
      mouseY < y+alto/2) {
      size = 28;

      if (i == 2) {
//BOTÓN DE SALIR       
        if ((frameCount % 20) < 10) {//el "%" nos dice que en un segundo se repite la secuencia 3 veces y alterna colores cada 10 frames.
          fill("#640F0F"); // rojo oscuro
        } else {
          fill("#D30909"); // rojo fuerte
        }
//INICIAR Y CREDITOS
    } else {
        if ((frameCount % 20) < 10) { 
          fill("#CBAB06"); // amarillo
        } else {
          fill("#897201"); // marrón
        }
      }
    } else {
      // Estado normal (todos mostaza/marrón)
      fill("#897201");
    }

    textSize(size);
    text(textos[i], x, y);
  }
}



function creditos() {
  titulos=["DIRECTOR", "PRODUCTOR", "PROGRAMADOR PRINCIPAL"];
  textos= ["Lautaro Gutierrez", "Lautaro Gutierrez", "Lautaro Gutierrez"]
    ancho= 200
    alto=20
    image(mensaje, width/2, 300, 500, 500);
  fill("#897201");
  stroke("#897201"); //color de linea subraya
  line(305, 205, 490, 205);
  stroke(0);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textFont(interfaces);
  textSize(30);
  text("CREDITOS", width/2, 190);
  textAlign(LEFT);

  for (let i=0; i <3; i++) {
    y= 250+i*80;
    x= 220
      fill("#897201");
    textSize(15);
    text(titulos[i], x, y);


    let yTextos= 290+i*80;
    x= 220
      fill(250);
    textSize(15);
    text(textos[i], x, yTextos);
  }
  let xVolver=535
    let yVolver=485
    size=12;
  if (mouseX> xVolver-ancho/2 &&
    mouseX< xVolver+ancho/2 &&
    mouseY> yVolver-alto/2 &&
    mouseY< yVolver+alto/2) {
    size=15;
    if ((frameCount % 20) < 10) {
      fill("#CBAB06"); // amarillo
    } else {
      fill("#897201"); // marrón
    }
  } else {
    fill("#897201"); // color normal
  }

  textSize(size);
  text("volver", xVolver, yVolver);
}



function salir() {
  contador++;

  // Cazador 
  push();
  imageMode(CENTER);
  translate(800 - contador*6, 400); // posición de arranque
  scale(-1,1);// espeja horizontalmente
  image(cazador[(frameCount/6|0)%10], 0, 0, 200, 200);
  pop();

  // Jinetes desde la derecha con for
  for (let i = 0; i < velocidades.length; i++) {
    push();
    imageMode(CENTER);
    translate(1750 - contador*velocidades[i], posicionesY[i]);
    scale(-1, 1);
    image(cazadores[(frameCount/12|0)%8], 0, 0, 200, 200);
    pop();
  }

  if (contador >= 60*8) {
    estado = 0;
    contador = 0;
  }
}




function empezar() {
  //menu no interactuable
  
  
  image(logo, width/2, 250, 300, 150);


  stroke(0);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textFont(interfaces);

  // Opciones del menú (solo diseño)
  textos = ["PULSA PARA INICIAR", "CREDITOS", "SALIR"];
  ancho = 200;
  alto = 40;

  for (let i=0; i<3; i++) {
    x = width/2;
    y = 400 + i*50;
    size = 20;

    fill("#897201"); 
    textSize(size);
    text(textos[i], x, y);
  }


  //pantalla de error
  imageMode(CENTER);
  image(ups, width/2, 400, 400, 150);
  image(error, 250, 420, 30, 30);
  image(cerrar, 560, 390, 30, 30);
  fill(255);
  stroke(0);
  strokeWeight(2);
  textAlign(LEFT, TOP);
  textFont(interfaces);
  textSize(10);
  text("Vaya...\n Parece que hemos tenido un problema\n al iniciar sesion\n intentelo de nuevo mas tarde.", 280, 400);
}
