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
    const xstep = random(-1, 1);
    const ystep = random(-1, 1);
    if (random(1) < 0.5) {
      let tempx = this.x - mouseX;
      let tempy = this.y - mouseY;
      this.x += tempx < 0 ? 1 : -1;
      this.y += tempy < 0 ? 1 : -1;
    } else {
      this.x += xstep;
      this.y += ystep;
    }
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