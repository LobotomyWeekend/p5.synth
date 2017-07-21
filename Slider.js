function Slider(i,x,y) {

  // positioning parameters
  this.xAlignment = x;
  this.yAlignment = y;
  this.ySpacing = 110;

  // runner dimensions
  this.rWidth = 200;
  this.rHeight = 10;
  this.runnerCor = 200;

  // runner position based on i
  this.rx = this.xAlignment;
  this.ry = this.yAlignment + this.ySpacing * i;

  // runner extremes
  this.rRight = this.rx + this.rWidth;


  // slider dimensions
  this.height = 20;
  this.width = 40;
  this.fillet = 2;
  this.cor = 100;

  // slider position based on i
  this.sx = this.rx;
  this.sy = this.ry + this.rHeight / 2;

  // slider extremes
  this.sBot = this.sy + this.height / 2;
  this.sTop = this.sy - this.height / 2;
  this.sLeft = this.sx - this.width / 2;
  this.sRight = this.sx + this.width / 2

  this.display = function() {
    noStroke();

    // runner
    fill(this.runnerCor);
    rect(this.rx, this.ry, this.rWidth, this.rHeight);

    // slider
    rectMode(CENTER);
    fill(this.cor);
    rect(this.sx, this.sy, this.width, this.height);
    rectMode(CORNER)

  }

  // move the slider between limits
  this.slide = function() {
    if (mouseY > this.sTop && mouseY < this.sBot &&
      this.rx < mouseX && this.rRight > mouseX) {
      this.sx = mouseX;
      this.output = map(this.sx, this.rx, this.rRight, 0, 1);
    }

  }
  ;

}