let sceneNum = 0;
let img = [];
var cx = 400,
  cy = 30;
var ccx = 8,
  ccy = 6;
let ct = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function preload() {
  for (let i = 1; i < 3; i++) {
    img.push(loadImage("assets/" + i + ".png"));
  }
}

function draw() {
  imageMode(CENTER);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Helvetica");
  switch (sceneNum) {
    case 0:
      scene0();
      console.log("scene 0");
      break;
    case 1:
      scene1();
      console.log("scene 1");
      break;
    case 2:
      console.log("scene 2");
      scene2();
      break;
    case 3:
      console.log("scene 3");
      scene3();
      break;
    case 4:
      console.log("scene 4");
      scene4();
      break;
    case 6:
      console.log("scene 6");
      scene6();
      break;
    case 7:
      console.log("scene 7");
      scene7();
      break;
  }
}

function scene0() {
  background(0);
  let x = mouseX;
  let y = mouseY;
  image(img[0], 300, height / 2, 400, 300);
  image(img[1], 285, height / 2, 400, 300);
  if (x > width / 2 - 25 && x < width / 2 + 50 && y > 260 && y < 285) {
    fill(0);
    rect(width / 2 - 40, 200, 600, 400);
    image(img[0], 300, 130, 800, 600);
    if (mouseIsPressed) {
      sc();
    }
  }
}

function scene1() {
  let x = mouseX;
  let y = mouseY;
  background(32, 168, 254, 255);
  escape(20);
  textSize(40);
  fill(255);
  text(" ' DESTROY THE CAT '.", width / 2, 150);
  noStroke();
  fill(0, 60);
  arc(x, y, 50, 50, 2 / 3, 2 * PI - 2 / 3);
  w = "CATS";
  words(w);
  cat();
  let d = dist(x, y, cx, cy);
  if (d < 30) {
    sc();
  }
}

function scene2() {
  mid(32, 168, 254, "CATS");
  if (ct < 20) {
    ct++;
    console.log(ct);
  } else {
    sc();
  }
}

function scene3() {
  let x = mouseX;
  let y = mouseY;
  background(252, 240, 71);
  w = "PLANTS";
  words(w);
}

function scene4() {}

function scene6() {
  background(0);
  // image(img[6], width / 2, height / 2 - 20, 600, 400);
}

function scene7() {}

function words(w) {
  textSize(10);
  let x = mouseX;
  let y = mouseY;
  fill(255, 80);
  rotate(-0.1);
  ellipse(x - 70, y - 45, 80, 40);
  ellipse(x - 50, y - 20, 12, 6);
  text("I LOVE " + w, x - 70, y - 40);
}

function cat() {
  fill(255);
  ellipse(cx, cy, 25, 20);
  ellipse(cx - 13, cy + 10, 35, 18);
  triangle(cx + 10, cy - 14, cx + 6, cy - 3, cx - 3, cy - 3);
  triangle(cx - 13, cy - 11, cx - 10, cy - 3, cx - 3, cy - 3);
  push();
  translate(cx - 22, cy + 20);
  a = random(-0.1, 0.1);
  rotate(a);
  ellipse(18, 0, 8, 10);
  ellipse(0, 0, 8, 10);
  pop();
  noFill();
  stroke(255);
  strokeWeight(6);
  bezier(cx - 20, cy + 20, cx - 25, cy - 20, cx - 40, cy, cx - 40, cy);
  cx += ccx * random(1);
  cy += ccy * random(2);
  if (cx > width || cx < 0) {
    ccx *= -1;
  }
  if (cy > height || cy < 0) {
    ccy *= -1;
  }
}

function escape(m) {
  let x = mouseX;
  let y = mouseY;
  textSize(10);
  fill(255, m);
  noStroke();
  text("ESCAPE", 550, 380);
  if (x > 525 && x < 575 && y > 370 && y < 380) {
    if (mouseIsPressed) {
      sceneNum = 6;
    }
  }
}

function mid(a, b, c, d) {
  console.log("bumped!");
  background(a, b, c);
  textSize(20);
  textStyle(ITALIC);
  text(" THERE IS NO " + d + " ANYMORE.", width / 2, 150);
}

function sc() {
  sceneNum++;
}
