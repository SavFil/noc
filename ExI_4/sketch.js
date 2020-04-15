let slider;
let pg;

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);
  slider = createSlider(0,100);
  background(220);
}

function draw() {

  let val = slider.value();
  dotPositionX = randomGaussian(200, val);
  dotPositionY = randomGaussian(200, val);
  dotPositionZ = randomGaussian(200, val);
  noStroke();
  //colorMode(HSB);
  fill(0,10);
  ellipse(dotPositionX, dotPositionY, 10, 10);
 
 


}