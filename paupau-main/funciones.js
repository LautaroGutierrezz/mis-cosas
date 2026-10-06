function menu() {
  image(pantallas[0], -50, -50, width+100, height+100);

  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("HOMERO Y LA TENTACION", width/2, 50);

  let opciones = ["PULSA PARA INICIAR", "CREDITOS"];
  ancho = 200;
  alto = 40;

  for (let i = 0; i < opciones.length; i++) {
    x = width/2;
    y = 300 + i * 50;
    size = 30;

    if (mouseX > x - ancho/2 &&
      mouseX < x + ancho/2 &&
      mouseY > y - alto/2 &&
      mouseY < y + alto/2) {
      size = 38;
      fill((frameCount % 20) < 10 ? "#CBAB06" : "#897201");
    } else {
      fill("#897201");
    }

    textSize(size);
    text(opciones[i], x, y);
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

  if (mouseX > 700 - ancho/2 &&
    mouseX < 700 + ancho/2 &&
    mouseY > 400 - alto/2 &&
    mouseY < 400 + alto/2) {
    if ((frameCount % 20) < 10) {
      fill("#CBAB06"); 
    } else {
      fill("#897201"); 
    }
  } else {
    fill("#897201"); 
  }
  textSize(25);
  text("VOLVER", 700, 400);
}

function pantallaUno() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) { 
    contador++;
  }
  image(pantallas[1], -50, 0, width+100, height);
  if (contador < transiciones.length) {
    image(transiciones[contador], 0, 0, width, height);
  }
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(15);
    textFont("mensaje");
    text("Un  dia  normal  en  la  planta  nuclear", 470, 50);
  } 
  if (tiempo >= 60 * 5) {
    estado = 3;
    tiempo = 0;
    contador = 0;
  }
}

function pantallaDos() {
  tiempo++;
  image(pantallas[2], -50, -50, width+50, height+50);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("son las  8pm y  acaba  de  finalizar  el turno  de  homero", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 700, 430);
}

function pantallaTres() {
  tiempo++;
  image(pantallas[3], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("decide  pasar  por  la  cafeteria  para  hablar  con  sus  amigos", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 700, 430);
}

function pantallaCuatro() {
  tiempo++;
  image(pantallas[4], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("y  se  encuentra  con  Mindy,  una  nueva  empleada  en  la  planta", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaCinco() {
  tiempo++;
  image(pantallas[5], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("¡ pero  en  ese  momento  ocurre  lo  peor !", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaSeis() {
  tiempo++;
  image(pantallas[6], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("¡ Homero  se  ve  tentado  por  la  nueva  !", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaSiete() {
  tiempo++;
  image(pantallas[7], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("aterrado  decide  irse...", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaOcho() {
  tiempo++;
  image(pantallas[8], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("pero  luego   lo  piensa  mejor", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaNueve() {
  tiempo++;
  image(pantallas[8], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  text("Volver  a   casa", 145, 350);
  text("volver  al  trabajo", 495, 350);
}

function pantallaDiez() {
  tiempo++;
  image(pantallas[9], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  sigue  preocupado,  no  sabe  en  que  pensar", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaOnce() {
  tiempo++;
  image(pantallas[10], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  sin  estar  seguro  de  lo  que  hace  vuelve  al  trabajo", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaDoce() {
  tiempo++;
  image(pantallas[9], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  text("Quedarse  en   casa", 145, 350);
  text("ir  a  la  taberna", 495, 350);
}

function pantallaTrece() {
  tiempo++;
  image(pantallas[10], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  text("hablarle  a  Mindy", 145, 350);
  text("esperar  que  Mindy  lo  vea", 465, 350);
}
 
function pantallaCatorce() {
  tiempo++;
  image(pantallas[11], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Homero  decide  ser  feliz  y  quedarse  en  casa  con  su  familia", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("regresar", 690, 430);
}

function pantallaQuince() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) { 
    contador++;
  }
  image(pantallas[12], -50, 0, width+100, height);
  if (contador < transiciones.length) {
    image(transiciones[contador], 0, 0, width, height);
  }
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(15);
    textFont("mensaje");
    text("Taberna de MOE'S", 470, 50);
  } 
  if (tiempo >= 60 * 3) {
    estado = 17;
    tiempo = 0;
    contador = 0;
  }
}

function pantallaDieciseis() {
  tiempo++;
  image(pantallas[13], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  busca  el  consejo  de  sus  amigos", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaDiecisiete() {
  tiempo++;
  image(pantallas[14], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("sus  amigos  le  recomiendan  hablar  con  Mindy", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaDieciocho() {
  tiempo++;
  image(pantallas[14], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  text("seguir el consejo", 125, 350);
  text("beber  un  poco  mas", 485, 350);
}

function pantallaDiecinueve() {
  tiempo++;
  image(pantallas[20], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  y  sus  amigos  quedan  totalmente  borrachos", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaVeinte() {
  tiempo++;
  image(pantallas[20], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  text("ir  igual  al  trabajo", 125, 350);
  text("olvidarse  de   todo", 485, 350);
}

function pantallaVeintiuno() {
  tiempo++;
  image(pantallas[21], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  estando  borracho  decide  ir  igual", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaVeintidos() {
  tiempo++;
  image(pantallas[10], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("No  sabe  como  acercarse  a  hablar  y  se  queda  paralizado", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaFinalBebedor() {
  tiempo++;
  image(pantallas[15], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("la verdad  de  la  vida  es  una  buena  Duff  fria", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("regresar", 690, 430);
}

function pantallaHablarMindy1() {
  tiempo++;
  image(pantallas[10], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Homero  se  acerca  a  hablarle,  pero  tropieza  al  caminar", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaHablarMindy2() {
  tiempo++;
  image(pantallas[16], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Mindy  se  rie  con   ternura  y   le  dice  que  ella  es  igual", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaHablarMindy3() {
  tiempo++;
  image(pantallas[16], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("A  Mindy  le  parece  buena  idea  invitarlo  a  cenar", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaInvitacionCena() {
  tiempo++;
  image(pantallas[16], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(18);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  textSize(18);
  text("aceptar  la  cena", 140, 350);
  text("volver  a  casa", 515, 350);
}


function pantallaHablarMindy4() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) { 
    contador++;
  }
  image(pantallas[22], -50, 0, width+100, height);
  if (contador < transiciones.length) {
    image(transiciones[contador], 0, 0, width, height);
  }
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(15);
    textFont("mensaje");
    text("MADAME CHAO'S", 470, 50);
  } 
  if (tiempo >= 60 * 3) {
    estado = 34;
    tiempo = 0;
    contador = 0;
  }
}

function pantallaHablarMindy5() {
  tiempo++;
  image(pantallas[23], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("despues  de  cenar  Mindy le  dice  a  homero  de  ir  a  su  casa", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaInvitacionCasa() {
  tiempo++;
  image(pantallas[23], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(18);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  textSize(18);
  text("ir  a  su  casa", 140, 350);
  text("echarse  a  atras", 515, 350);
}

function pantallaHablarMindy6() {
  tiempo++;
  image(pantallas[25], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("una  vez  en  la  casa  de  Mindy  las cosas  se  descontrolan", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaHablarMindy7() {
  tiempo++;
  image(pantallas[26], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("apunto  de  cometer  un  error  homero  todavia  puede  decidir", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}


function pantallaHablarMindy8() {
  tiempo++;
  image(pantallas[26], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(18);
  textFont("mensaje");
  text("¿Que  debe  hacer  Homero?", width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (botones(220, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(220, 350, 300, 100, 20);

  if (botones(580, 350, 300, 100)) { fill(180); } else { fill(255); }
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  textSize(18);
  text("ser  infiel", 140, 350);
  text("volver  a  casa", 515, 350);
}

function pantallaFinalInfiel() {
  tiempo++;
  image(pantallas[27], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Homero  decide  ser  infiel  y  acostarse  con  Mindy", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaFinalFiel() {
  tiempo++;
  image(pantallas[28], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Homero  decide  volver  con  Marge  y  ser  feliz", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaArrepentido() {
  tiempo++;
  image(pantallas[24], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("homero  se  arrepiente  de  todo  y  se  pone  a  beber", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}


function pantallaEsperarMindy1() {
  tiempo++;
  image(pantallas[17], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Homero  se  esconde  nervioso  detras  de  la  pared", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaEsperarMindy2() {
  tiempo++;
  image(pantallas[18], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Pasa  tanto  tiempo  quieto  que  termina  durmiendose", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaEsperarMindy3() {
  tiempo++;
  image(pantallas[19], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Mindy  se  va  sin  verlo  y  Homero  pierde  su  portunidad", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function pantallaFinalEsperarMindy() {
  tiempo++;
  image(pantallas[19], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text("Mindy  se  fue,  Homero  vuelve  a  casa", width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("regresar", 690, 430);
}
