let frequencies;
let numberOfColumns;
let columnWidth;
let slider;

function setup() {
  createCanvas(400, 400);
  numberOfColumns = 100;
  frequencies = new Array(numberOfColumns).fill(0);
  columnWidth = width / numberOfColumns;
  slider = createSlider(0, 10);
}

function draw() {
  background(220);
  stroke(0);
  for (i = 0; i < numberOfColumns; i++)
    rect(i * columnWidth, height, columnWidth, -frequencies[i]);

  frequencies[floor(randomGaussian(numberOfColumns / 2, slider.value()))]++;
}