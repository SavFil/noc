let position;
let velocity;
let r = 10;

function setup() {
    createCanvas(640, 640, WEBGL);

    position = createVector(0, 0, 0);
    velocity = createVector(-2.5, -5, 1);

  }
  
  function draw() {
    background(220);

    position.add(velocity);

     if((position.x+r>100)||(position.x-r<-100)){
         velocity.x = velocity.x * -1;
     }
     if((position.y+r > 100 ) || (position.y-r<-100)){
         velocity.y = velocity.y * -1;
     }
     if((position.z+r > 100 ) || (position.z-r<-100)){
         velocity.z = velocity.z * -1;
     }
   
    
    
    
    push();
        rotateX(PI/3);
        rotateY(PI/3);
        noFill();
        box(200);
        translate(position.x,position.y,position.z);
        stroke(0);
        sphere(r);
    pop();
  }