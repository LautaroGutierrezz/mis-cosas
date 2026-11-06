class personaje {
  constructor() {
    this.posX = width/2;
    this.posY = 200;
    this.img = homero[0];
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.posX -= 3; //usamoos keyIsDown para que p5.j5 entienda que al maneter presionado se mueve homero
    if (keyIsDown(RIGHT_ARROW)) this.posX += 3;//se va a mover a 3 frames

    if (this.posX < 0) this.posX = 0;
    if (this.posX > width - 150) this.posX = width - 150;
  }

  dibujar() {
    image(this.img, this.posX, this.posY, 150, 200); //imagen de homero
  }

  jugar() {
    this.mover();
    this.dibujar();
  }
}

function mostrarPuntaje() {
  textSize(30);
  textAlign(LEFT);

  //Puntos
  fill("#CBAB06");
  strokeWeight(4);
  text("Puntos:", 20, 40);

  // Contador
  fill(255);
  stroke(0);
  strokeWeight(4);
  text(contador, 150, 40);
}

function mostrarVidas() {
  let x = 670; // posición en X
  let y = 20; // posición en Y

  for (let i = 0; i < 3; i++) {
    if (i < vidas) {
      image(objetos[5], x + i*40, y, 30, 30); // corazón lleno
    } else {
      image(objetos[6], x + i*40, y, 30, 30); // corazón vacío
    }
  }
}
