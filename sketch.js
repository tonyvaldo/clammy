let bubbleFloatY = 225;
let shutY = 39
let mic;
let micLevel;
let bamYes = false;

let bubbles1;
let bubbles2;
let bubbles3;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  mic = new p5.AudioIn()
  mic.start();

  bubbles1 = new Bubbles(300, 300);
  console.log(bubbles1);

  bubbles2 = new Bubbles(100, 380);
  console.log(bubbles2);

  bubbles3 = new Bubbles(100, 380);
  console.log(bubbles2);
}

function draw() {
  background('rgba(0,255,0, 0.75)');
  console.log("mic level" + mic.getLevel());

  micLevel = mic.getLevel();

  shutY = map(mic.getLevel(.8), 0, .13, 0, 38);

  drawTail();
  drawPaws();
  drawBody();
  drawEyes();
  drawTopShell();
  drawBottomShell();
  drawBubbles();

  bubbles1.display();
  bubbles1.move();

  bubbles2.display();
  bubbles2.move();

  if (bamYes == true) {
    fill(139, 222, 247)
    circle(150, 320, 100);
    fill(205, 250, 250)
    circle(170, 305, 25);
  }
}

function mousePressed() {
  // if the position of the mouse is inside this region then do this

  if (mouseX > width * 0.0 && mouseX < width * 0.9 && mouseY > height * 0.0 && mouseY < height * 1.0) {
    console.log("mouse beep in here");
    bamYes = !bamYes;
  } else if (mouseX > width * 0.0 && mouseX < width * 0.9 && mouseY > height * 0.0 && mouseY < height * 1.0)){
    console.log("mic level" + mic.getLevel());


  }


}

function drawTail() {
  //draw umbo tail
  beginShape();
  fill(146, 134, 207);
  vertex(width * .45, width * .8);
  vertex(width * .5, width * .8);
  vertex(width * .4, width * .89);
  vertex(width * .45, width * .8);
  endShape(CLOSE);


  beginShape();
  fill(146, 134, 207);
  vertex(width * .6, width * .8);
  vertex(width * .659, width * .8);
  vertex(width * .7, width * .89);
  vertex(width * .6, width * .8);
  endShape(CLOSE);
}

function drawPaws() {
  // draw  mantle paws
  fill(242, 189, 136);
  ellipse(112, 275, 20, 10);

  fill(242, 189, 136);
  ellipse(328, 275, 20, 10);
}

function drawBody() {
  // draw middle body
  fill(173, 125, 176);
  rect(115, 230, 210, 55, 20);
}

function drawEyes() {
  // draw left eye
  ellipseMode(RADIUS);
  fill(255);
  ellipse(190, 260, 20, 20);

  // draw left iris
  ellipseMode(CENTER);
  fill(0, 168, 224);
  ellipse(200, 260, 20, 20);

  // draw right eye
  ellipseMode(RADIUS);
  fill(255);
  ellipse(275, 260, 20, 20);

  // draw right iris
  ellipseMode(CENTER);
  fill(0, 168, 224);
  ellipse(285, 260, 20, 20);

  // draw right pupil
  ellipseMode(CENTER);
  fill(10);
  ellipse(286, 260, 12, 12);

  //draw left pupil
  ellipseMode(CENTER);
  fill(10);
  ellipse(201, 260, 12, 12);
}

function drawTopShell() {
  // draw top shell and close shut

  beginShape();
  fill(146, 134, 207);
  vertex(width * .2, shutY + width * .6);
  vertex(width * .25, shutY + width * .5);
  vertex(width * .3, shutY + width * .4);
  vertex(width * .4, shutY + width * .3);
  vertex(width * .7, shutY + width * .3);
  vertex(width * .8, shutY + width * .4);
  vertex(width * .85, shutY + width * .5);
  vertex(width * .9, shutY + width * .6);
  vertex(width * .2, shutY + width * .6);
  endShape(CLOSE);

}

function drawBottomShell() {
  // draw bottom shell
  beginShape();
  vertex(width * .2, width * .7);
  vertex(width * .9, width * .7);
  vertex(width * .7, width * .8);
  vertex(width * .4, width * .8);
  vertex(width * .2, width * .7);
  endShape(CLOSE);
}

function drawBubbles() {

  // draw bubbles
  push();
  noStroke();
  fill(139, 222, 247)
  circle(300, bubbleFloatY, 40);

  fill(205, 250, 250)
  circle(307, bubbleFloatY - 5, 15);
  pop();

  bubbleFloatY -= 1;
  if (bubbleFloatY <= 0) {
    bubbleFloatY = 225;
  }
}
