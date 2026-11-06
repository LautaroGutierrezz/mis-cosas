class objeto5 {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.tam = 50;
    this.img = objetos[4];
    this.velocidad = 1;
    this.activo = false; // empieza desactivado
  }

  actualizar() {
    if (!this.activo) return; // no se dibuja ni mueve hasta que se active
    this.dibujar();
    this.mover();
  }

  dibujar() {
    image(this.img, this.x, this.y, this.tam, this.tam); //imagen de la vida
  }

  mover() {
    this.y += this.velocidad;
    if (this.y - this.tam/2 > height) {
      this.resetear();
    }
  }

  verificarColision(homeroX, homeroY) {
    if (!this.activo) return;

    // hitbox de la boca (200x150)
    let bocaX = homeroX + 50;
    let bocaY = homeroY + 100;
    let bocaAncho = 100;
    let bocaAlto = 50;

    if (
      this.x < bocaX + bocaAncho &&
      this.x + this.tam > bocaX &&
      this.y < bocaY + bocaAlto &&
      this.y + this.tam > bocaY
      ) {
      if (vidas < 5) {   // si el numero de vidas es menor a 5 (el maximo) suma una vida
        vidas++;
      }
      this.resetear();
      this.activo = false; // se desactiva hasta la próxima aparición
    }
  }

  resetear() {
    this.y = -this.tam/2 - 50;
    this.x = random(20, width-20);
  }
}
