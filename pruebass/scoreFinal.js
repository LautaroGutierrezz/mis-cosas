function final() {
  background(0);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Juego terminado", width/2, height/2 - 40);
  text("Puntaje final: " + contador, width/2, height/2 + 20);
  ancho = 200;
  alto = 40;
  x = 700;
  y = 380;
  if (mouseX > x - ancho/2 &&
    mouseX < x + ancho/2 &&
    mouseY > y - alto/2 &&
    mouseY < y + alto/2) {
    if ((frameCount % 20) < 10) {
      fill("#FF0505");
    } else {
      fill("#CBAB06");
    }
  } else {
    fill("#CBAB06");
  }
  textSize(20);
  text("Volver  a  jugar", x, y);
  image(cursorImg, mouseX, mouseY, 64, 64);
}
