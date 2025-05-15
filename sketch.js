function setup() {
  createCanvas(400, 400);
}

//VARIAVEL
let olhoX;
let olhoY;

function draw() {
  background("rgb(61,61,227)");
  //rosto
  fill("Beige");
  circle(200, 200, 300);

  fill("Light blue ");
  circle(150, 150, 60);

  fill("Light blue");
  circle(150, 150, 10);

  circle(250, 150, 60);

  line(138, 277, 280, 277);
  fill("red");
  triangle(10, 250, 80, 30, 360, 25);

  square(185, 345, 55);
  stroke("black");
  strokeWeight(3);

  olhoX = map(mouseX, 0, 400, 125, 170);
  olhoY = map(mouseY, 0, 400, 125, 170);

  //olho
  fill("");
  triangle(195, 193, 258, 247, 160, 237);
  //pupila
  fill("blak");
  //circle(250,155, 10)

  //pupilas
  circle(olhoX + 100, olhoY, 10);

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
