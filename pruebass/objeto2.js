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
    image(this.img, this.x, this.y, this.tam, this.tam); //imagen de la rosquilla
  }

mover() {
  this.y += this.velocidad;//velocidad del objeto
  if (this.y - this.tam/2 > height) {//margen de la pantalla
    vidas--; // si se sale del marco pierde una vida
    this.resetear();
  }}

  verificarColision(homeroX, homeroY) {
    if (!this.activo) return; // si el objeto ya no está visible deja de contar puntos

    // dimensiones de Homero
    let homeroAncho = 150;
    let homeroAlto = 200;

    // chequea que el objeto esté dentro del área de Homero
    if (
      this.x < homeroX + homeroAncho &&
      this.x + this.tam > homeroX &&
      this.y < homeroY + homeroAlto &&
      this.y + this.tam > homeroY
      ) {
      contador += 1; // suma 1 punto
      this.activo = false; //una vez que colisiona desactiva el objeto (lo hace invisible)
    }
  }

  resetear() { //posicion del objeto
    this.y = -this.tam/2 - 50;
    this.x = random(20, width-20);
  }
}
