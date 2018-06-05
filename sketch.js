let slider;
let angle;
let k = 0.67;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  // slider = createSlider(50, 200, 150, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  noFill();
  translate(200, height);
  branch(100);
  // drawCircle(200, 200, slider.value());
  // drawSquare(200, 200, angle);
  // rect(x + d, y - d / 2, d / 2, d / 2);
  // rect(x + d, y + d, d / 2, d / 2);
  // rect(x - d / 2, y + d, d / 2, d / 2);
  // rect(x - d / 2, y - d / 2, d / 2, d / 2);
  // rect(x, y + d / 2, d / 2, d / 2);
  // // rect(x + d / 2, y, d / 2, d / 2);
  // rect(x + d / 2, y + d / 2, d / 2, d / 2);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * k);
    pop();
    push();
    rotate(-angle);
    branch(len * k);
    pop();
  }
}


function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 10) {
    drawCircle(x + d * k, y, d * k);
    drawCircle(x - d * k, y, d * k);
    drawCircle(x, y + d * k, d * k);
    drawCircle(x, y - d * k, d * k);
  }
}

function square(x, y, d) {
  rect(x, y, d, d);
  if (d > 20) {
    square(x, y, d / 2, d / 2);
    square(x, y + d / 2, d / 2, d / 2);
    square(x + d / 2, y, d / 2, d / 2);
    square(x + d / 2, y + d / 2, d / 2, d / 2);
  }

}

function drawSquare(x, y, d) {
  rect(x, y, d, d);
  if (d > 5) {
    drawSquare(x + d, y - d / 2, d / 2, d / 2);
    drawSquare(x + d, y + d, d / 2, d / 2);
    drawSquare(x - d / 2, y + d, d / 2, d / 2);
    drawSquare(x - d / 2, y - d / 2, d / 2, d / 2);
  }

}