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
    image(this.img, this.x, this.y, this.tam, this.tam); //imagen de la barra radioactiva
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
      // acción al colisionar con la boca
      vidas--; // rresta una vida
      this.resetear();
      this.activo = false;
    }
  }

  resetear() {
    this.y = -this.tam/2 - 50;
    this.x = random(20, width-20);
  }
}
