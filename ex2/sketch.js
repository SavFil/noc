let frequencies;
let numberOfColumns;
let columnWidth;

function setup() {
  createCanvas(400, 400);
  numberOfColumns = 10;
  frequencies = new Array(numberOfColumns).fill(0);
  columnWidth = width / numberOfColumns;
}

function draw() {
  background(220);
  stroke(0);
  for (i = 0; i < numberOfColumns; i++)
    rect(i * columnWidth, height, columnWidth, -frequencies[i]);
    
  frequencies[floor(random(numberOfColumns))]++;
  
}