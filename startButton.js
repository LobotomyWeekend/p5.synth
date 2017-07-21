// this constructor function produces an on/off start button

function StartButton(i) {

// standard button parameters
  this.size = 100;
  this.alignment = 20;
  this.spacing = 10;
  this.fillet = 10;

// takes an integer i(++) and calculates its location
  this.x = this.alignment;
  this.y = this.alignment + (this.size + this.spacing) * i;
  
// extremes of position
  this.right = this.x + this.size;
  this.bottom = this.y + this.size;

// initially OFF colour + status
  this.cor = 200;
  this.playing = false;

// display function
  this.display = function() {
    noStroke();
    fill(this.cor);
    rect(this.x, this.y, this.size, this.size, this.fillet);
  }

// change colour and playing status
  this.clicked = function() {
    if (this.x < mouseX && mouseX < this.right && 
        this.y < mouseY && mouseY < this.bottom) {
      if (this.cor == 200) {
        this.cor = 100;
        this.playing = true;
      } else if (this.cor == 100) {
        this.cor = 200;
        this.playing = false;
      }

    }
  }
}