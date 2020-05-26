let position;
let velocity;

function setup() {
    createCanvas(640, 360, WEBGL);

    position = createVector(100, 100, 0);
    velocity = createVector(2.5, 5, 1);
  }
  
  function draw() {
    background(220);

    position.add(velocity);

    if((position.x>width)||(position.x<0)){
        velocity.x = velocity.x * -1;
    }
    if((position.y > height ) || (position.y<0)){
        velocity.y = velocity.y * -1;
    }
    if((position.z > 100 ) || (position.y<-100)){
        velocity.z = velocity.z * -1;
    }
    
    push();
    translate(position.x,position.y,position.z);
    stroke(0);
    nofill();
    sphere(50);
    pop();
  }