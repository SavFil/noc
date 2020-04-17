let frequencies;
let numberOfColumns;
let columnWidth;

function setup() {
  createCanvas(400, 400);
  numberOfColumns = 40;
  frequencies = new Array(numberOfColumns).fill(0);
  columnWidth = width / numberOfColumns;
}

function draw() {
  background(220);
  stroke(0);
  for (i = 0; i < numberOfColumns; i++)
    rect(i * columnWidth, height, columnWidth, -frequencies[i]);

  //frequencies[floor(random(numberOfColumns))]++;
  frequencies[custom()]++;

}

function acceptreject() {
  while (true) {
    let r1 = floor(random(numberOfColumns));
    let probability = r1;
    let r2 = floor(random(numberOfColumns));
    if (r2 < probability) {
      return r1;
    }
  }
}
function custom() {
  while (true) {
    let r1 = floor(random(numberOfColumns));
    let probability = r1^10;
    let r2 = floor(random(numberOfColumns));
    if (r2 < probability) {
      return r1;
    }
  }
}