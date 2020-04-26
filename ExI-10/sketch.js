let scale = 20;
let grid = [];
let hSize,vSize;
function setup() {
  createCanvas(800, 800, WEBGL);
  
  
  let yOffset = 1000;
  hSize = width / scale;
  vSize = height / scale;
  for (let y = 0; y < vSize; y++) {
    let xOffset = 0;
    for (let x = 0; x < hSize; x++) {
      grid[x + hSize * (y + 1)] = map(noise(xOffset, yOffset), 0, 1, -50, 50);
      xOffset += 0.4;
    }
    yOffset += 0.1;
  }

}

function draw() {
  translate(0, 0);
  rotateX(2 * PI / 5);
  rotateZ(PI / 6)
  translate(-width / 2, -height / 2);
  background(220)
  beginShape(TRIANGLE_STRIP);
  for (let y = 0; y < vSize; y++) {
    for (let x = 0; x < hSize; x++) {

      vertex(x * scale, y * scale, grid[x + hSize * y]);
      vertex(x * scale, (y + 1) * scale, grid[x + hSize * (y + 1)]);

    }
    endShape();
  }
  noLoop();
}
