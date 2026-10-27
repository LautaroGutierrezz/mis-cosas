function fondo_() {
  image(fondo[0], -70, 0, width+150, height);
}

function homero_() {
  let x = mouseX;
  if (x < 0) {
    x = 0;
  }
  if (x > width - 150) {
    x = width - 150;
  }
  image(homero[0], x, 200, 150, 200);
}
