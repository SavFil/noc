let walker;


class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);

  }

  step() {
    const xstep = constrain(floor(random(4)) - 1,-1,1);
    const ystep = constrain(floor(random(4)) - 1,-1,1);
    this.x += xstep;
    this.y += ystep;
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);

  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();

}