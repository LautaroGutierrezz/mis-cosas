class objeto4 {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.tam = 50;
    this.img = objetos[3]; 
    this.velocidad = 1;
    this.activo = false; // empieza desactivado
  }

  actualizar() {
    if (!this.activo) return; // no se dibuja ni mueve hasta que se active
    this.dibujar();
    this.mover();
  }

  dibujar() {
    image(this.img, this.x, this.y, this.tam, this.tam);
  }

  mover() {
    this.y += this.velocidad;
    if (this.y - this.tam/2 > height) {
      this.resetear();
    }
  }

  verificarColision(homeroX, homeroY) {
    if (!this.activo) return;

    let homeroAncho = 150;
    let homeroAlto = 200;

    if (
      this.x < homeroX + homeroAncho &&
      this.x + this.tam > homeroX &&
      this.y < homeroY + homeroAlto &&
      this.y + this.tam > homeroY
    ) {
      vidas--; // quita una vida al tocarlo
      this.resetear();
    }
  }

  resetear() {
    this.y = -this.tam/2 - 50;
    this.x = random(20, width-20);
  }
}
