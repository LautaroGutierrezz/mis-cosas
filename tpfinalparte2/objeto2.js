class objeto2 {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.tam = 50;
    this.img = objetos[1];
    this.activo = true; //indica si el objeto está visible o no
    this.espera=0;
    this.velocidad = 1; //velocidad inicial
  }

  actualizar() {
    if (!this.activo) {
      this.espera++;
      if (this.espera >= 60) { // 60 frames ≈ 1 segundo
        this.resetear();
        this.activo = true;
        this.espera = 0; //se reinician los valores de espera para volver a hacerlo funcional
      }
      return;
    } //cuando eso pasa:
    this.dibujar();
    this.mover();
  }

  dibujar() {
    image(this.img, this.x, this.y, this.tam, this.tam); //imagen de la cerveza
  }

  mover() {
    this.y += this.velocidad;//velocidad del objeto
    if (this.y - this.tam/2 > height) {//margen de la pantalla

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
      // cuando colisiona con la boca
      contador += 1; //suma puntos
      this.resetear();
      this.activo = false;
    }
  }

  resetear() { //posicion del objeto
    this.y = -this.tam/2 - 50;
    this.x = random(20, width-20);
  }
}
