let position;
let velocity;

function setup() {
    createCanvas(640, 640, WEBGL);

    position = createVector(0, 0, 0);
    velocity = createVector(-2.5, -5, 1);

  }
  
  function draw() {
    background(220);

    position.add(velocity);

    if((position.x>width/2)||(position.x<-width/2)){
        velocity.x = velocity.x * -1;
    }
    if((position.y > height/2 ) || (position.y<-height/2)){
        velocity.y = velocity.y * -1;
    }
    if((position.z > height/2 ) || (position.z<-height/2)){
        velocity.z = velocity.z * -1;
    }
    
    console.log(position.x);
    push();
    translate(position.x,position.y,position.z);
    stroke(0);
    
    sphere(50);
    pop();
  }