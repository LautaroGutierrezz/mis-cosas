class personaje {
  constructor() {
    this.posX = width/2;
    this.posY = 200;
    this.img = homero[0];
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.posX -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.posX += 5;

    if (this.posX < 0) this.posX = 0;
    if (this.posX > width - 150) this.posX = width - 150;
  }

  dibujar() {
    image(this.img, this.posX, this.posY, 150, 200);
  }

  jugar() {
    this.mover();
    this.dibujar();
  }
}

function mostrarPuntaje() {
  textSize(30);
  textAlign(LEFT, TOP);

  // Texto "Puntos" 
  fill("#CBAB06");
  strokeWeight(4);
  text("Puntos:", 20, 20);

  // Contador
  fill(255);
  stroke(0);
  strokeWeight(4);
  text(contador, 150, 20); // lo ubico a la derecha del texto
}

function mostrarVidas() {
  let x = 570; // posición en X
  let y = 20; // posición en Y

  for (let i = 0; i < 5; i++) { 
    if (i < vidas) {
      image(objetos[6], x + i*40, y, 30, 30); // corazón lleno
    } else {
      image(objetos[7], x + i*40, y, 30, 30); // corazón vacío
    }
  }
}
