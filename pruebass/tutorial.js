function continuar() {
  ancho = 200;
  alto = 40;
  x = 730;
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
  text("continuar", x, y);
  image(cursorImg, mouseX, mouseY, 64, 64);
}


function tutorial1() {
  image(tutorial[0], 0, 0, width, height);
  continuar();
}
function tutorial2() {
  image(tutorial[1], 0, 0, width, height);
  continuar();
}
function tutorial3() {
  image(tutorial[2], 0, 0, width, height);
  continuar();
}
