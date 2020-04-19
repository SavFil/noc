let walker;


class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xOffset = 0;
    this.yOffset = 10000;
  }

  show() {
    stroke(0);
    point(this.x, this.y);

  }

  step() {
    const xstep = map(noise(this.xOffset), 0, 1, -1, 1);
    const ystep = map(noise(this.yOffset), 0, 1, -1, 1);
    this.x += xstep ;
    this.y += ystep;
    this.xOffset += 0.01;
    this.yOffset += 0.01;
    console.log(this.x,this.y,this.xOffset,this.yOffset);
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