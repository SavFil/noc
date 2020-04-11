let frequencies;
let numberOfColumns;
let columnHSize;

function setup() {
  createCanvas(400, 400);
  numberOfColumns = 10;
  frequencies = new Array(numberOfColumns).fill(0);
  columnHSize = width / numberOfColumns;
}

function draw() {
  background(220);
  stroke(0);
  for (i = 0; i < numberOfColumns; i++)
    rect(i * columnHSize, height, columnHSize, -frequencies[i]);
    
  frequencies[floor(random(numberOfColumns))]++;
  
}