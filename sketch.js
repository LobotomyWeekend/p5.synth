var startButtons = [];
var volSliders = [];
var pitchSliders = [];
var oscillators = [];
var viewSwitches = [];

var noOscs = 4;

function setup() {
  
  createCanvas(640, 480);

  // create arrays of oscillator type objects
  for (var i = 0; i < noOscs; i++) {
    startButtons.push(new StartButton(i));
    volSliders.push(new Slider(i, 150, 60));
    pitchSliders.push(new Slider(i, 400, 60));
    oscillators.push(new p5.Oscillator());

    //oscillator requires initial values
    oscillators[i].setType('sine');
    oscillators[i].freq(0.00001);
    oscillators[i].amp(0);
    oscillators[i].start();
  }

}

// clicking on start buttons
function mouseClicked(mouseX, mouseY) {
  for (var i = 0; i < startButtons.length; i++) {
    startButtons[i].clicked();
  }
}

// varying slider
function mouseDragged() {
  for (var i = 0; i < startButtons.length; i++) {
    volSliders[i].slide();
    pitchSliders[i].slide();
  }
}

function draw() {

  background(230);

  // display view 1, pitch and volume
  for (var i = 0; i < startButtons.length; i++) {
    startButtons[i].display();
    volSliders[i].display();
    pitchSliders[i].display();

    if (startButtons[i].playing) {
      oscillators[i].amp(volSliders[i].output, 0.1);
      oscillators[i].freq(pitchSliders[i].output * 400);
    } else {
      oscillators[i].amp(0, 0.05);
    }
  }
}