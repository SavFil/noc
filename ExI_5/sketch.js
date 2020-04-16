let walker;
let slider;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    noStroke();
    fill(0,10);
    ellipse(this.x, this.y,1,1);

  }

  step() {
    const xstep = random(-1,1);
    const ystep = random(-1,1);
    
    this.x += xstep;
    this.y += ystep;
  }
  stepGaussian() {
    const xstep = randomGaussian(0,1);
    const ystep = randomGaussian(0,1 );
    console.log(xstep);
    this.x += xstep;
    this.y += ystep;
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  slider = createSlider(-1,1);
  walker = new Walker();
  walkerGaussian = new Walker();
}

function draw() {
  walker.step();
  walker.show();
  walkerGaussian.stepGaussian();
  walkerGaussian.show();

}