let walker;


class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
  }

  show() {
    stroke(0);
    point(this.position.x, this.position.y);
  }

  step() {
    const step = p5.Vector.random2D();
    this.position.add(step);
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