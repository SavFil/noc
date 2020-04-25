let R=0,G=1000,B=5000,t=0;
function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  
}

function draw() {
  background(200);
  loadPixels();
  let xOffset = 0;
  for (let x = 0; x < width; x++) {
    let yOffset = 0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let bright = map(noise(xOffset, yOffset), 0, 1, 0, 255);
      pixels[index + 0] = map(noise(xOffset+R, yOffset+R,t),0,1,0,255);
      pixels[index + 1] = map(noise(xOffset+G, yOffset+G,t),0,1,0,255);
      pixels[index + 2] = map(noise(xOffset+B, yOffset+B,t),0,1,0,255);
      pixels[index + 3] = 255;
      yOffset += 0.01;
    }
    xOffset += 0.01;
  }
  updatePixels();

  t+=0.02;
}