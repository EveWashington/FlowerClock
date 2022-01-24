//source: https://p5js.org/examples/hello-p5-simple-shapes.html

let m = -1;
let t;

function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background(209, 227, 255);
  translate(200, 200);
 
  //draw stem and grass
  strokeWeight(8);
  stroke(41, 196, 65);
  line(0, 0, 0, 600);
  
  strokeWeight(20);
  stroke(42, 120, 54);
  line(-200, 400, 200, 400);
  
  //set stroke for petals
  stroke(255, 255, 255, 120);
  strokeWeight(2);
  
  
  //secound
  t = second(); 
  
  fill(100, 20, 150);
  //translate(200, 200);
  //noStroke();
  for (let i = 0; i < t; i ++) {
    ellipse(0, 50, 20, 120);
    rotate(PI/(t/2));
  }
  
  //minute
  t = minute(); 
  if (m != t){
    console.log(t);
    m=t;
  }
  
  fill(100, 101, 192);
  //translate(200, 200);
  //noStroke();
  for (let i = 0; i < t; i ++) {
    ellipse(0, 30, 20, 120);
    rotate(PI/(t/2));
  }
  
  //hour
  t = hour(); 
  t = t%12
  fill(204, 101, 192);
  //translate(200, 200);
  //noStroke();
  for (let i = 0; i < t; i ++) {
    ellipse(0, 30, 20, 70);
    rotate(PI/(t/2));
  }
  
  noStroke();
  fill(255, 204, 0); 
  circle(0, 0, 60);


  
}



