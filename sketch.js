let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 3;

function setup() {
  createCanvas(600, 800);
  origin = createVector(300, 0);
  angle = PI/8;
  bob = createVector();
  len = 600;
  
}

function draw() {
  background(0);
  
  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;
    
  angle += angleV;
  angleV += angleA;
  
  angleV *= 0.98;
  
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;
  
  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
