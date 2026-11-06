let posicionesX = [100, 250, 400, 550, 700];

function noSuperponer() {
  // mezclo el array para que el orden sea aleatorio
  posicionesX = shuffle(posicionesX, true); //cuando ponemos shufle hacemos que agarre y mezcle nuestro array, y al agregarle true le damos permiso para que los reordene
  //posición en x
  ob1.x = posicionesX[0];
  ob2.x = posicionesX[1];
  ob3.x = posicionesX[2];
  ob4.x = posicionesX[3];
  ob5.x = posicionesX[4];

  // posición en y
  ob1.y = -ob1.tam/2 - 50;
  ob2.y = -ob2.tam/2 - 50;
  ob3.y = -ob3.tam/2 - 50;
  ob4.y = -ob4.tam/2 - 50;
  ob5.y = -ob5.tam/2 - 50;
}
