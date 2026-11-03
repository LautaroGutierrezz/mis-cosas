function inicio() { //pantalla inicial
  image(pantallaInicio, -70, 0, width+150, height);

  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("FOOD  AND  RADIATION", width/2, 50);
  ancho = 200;
  alto = 40;
  x = width/2;
  y = 300;
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
  textSize(50);
  text("JUGAR", x, y);
  image(cursorImg, mouseX, mouseY, 64, 64);
}
