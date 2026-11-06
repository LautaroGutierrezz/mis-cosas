function inicio() { //pantalla inicial
  image(pantallaInicio, -70, 0, width+150, height);
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("FOOD  AND  RADIATION", width/2, 50);

  let opciones = ["COMENZAR", "TUTORIAL","CREDITOS"];
  ancho = 200;
  alto = 40;

  for (let i = 0; i < opciones.length; i++) {
    x = width/2;
    y = 250 + i * 50;
    size = 30;

    if (mouseX > x - ancho/2 && mouseX < x + ancho/2 && mouseY > y - alto/2 && mouseY < y + alto/2) {
      size = 38;
      fill((frameCount % 20) < 10 ? "#FF0505" : "#CBAB06");
    } else {
      fill("#CBAB06");
    }
    textSize(size);
    text(opciones[i], x, y);
    image(cursorImg, mouseX, mouseY, 64, 64);
  }
}

function creditos() {
  contador++;
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("CREDITOS", width/2, 450 - contador);

  let honores = ["DIRECTORES", "AUTORES", "PROGRAMADORES PRINCIPALES", "EQUIPO DE TRABAJO"];
  let nombres = ["Lautaro Gutierrez", "Paulina Moretti"];

  for (let i = 0; i < honores.length; i++) {
    let y = 550 - contador + i * 120; 
    fill("#897201");
    textSize(25);
    text(honores[i], width/2, y);

    for (let j = 0; j < nombres.length; j++) {
      fill(250);
      textSize(25);
      text(nombres[j], width/2, y + 50 + j * 30);
    }
  }

  fill(botones(730, 380, ancho, alto) ? ((frameCount % 20) < 10 ? "#FF0505" : "#CBAB06") : "#CBAB06");
  textSize(25);
  text("VOLVER", 730, 380);
  image(cursorImg, mouseX, mouseY, 64, 64);
}
