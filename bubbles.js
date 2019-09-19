class Bubbles {
 constructor(_xPos, _bubbleFloatY) {
   this.xPos = _xPos;
   this.bubbleFloatY = _bubbleFloatY;
 }
  
  display() {
      push();
  noStroke();
  fill(139, 222, 247)
  circle(this.xPos, this.bubbleFloatY, 40);

  fill(205, 250, 250)
  circle(this.xPos, this.bubbleFloatY - 5, 15);
  pop();

  }
  
  move() {
   this.bubbleFloatY -= 1;
  if (this.bubbleFloatY <= 0) {
    this.bubbleFloatY = 225;
  } 
  }
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