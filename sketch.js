let sceneNum = 0;
var img = [];
var cx = 400,
  cy = 30;
var ccx = 8,
  ccy = 6;
let ct = 0;
var index=1;
let k=1;

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
    case 5:
      console.log("scene 5");
      scene5();
      break;
    case 6:
      console.log("scene 6");
      scene6();
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
  textStyle(BOLD);
  background(32, 168, 254, 255);
  escape(20);
  textSize(40);
  fill(255);
  text(" 'DESTROY THE CAT.'", width / 2, 150);
  noStroke();
  fill(0, 60);
  if (frameCount%10==0){ 
    index++;
    arc(x, y, 50, 50, 0, 2 * PI );}
    else {
      arc(x, y, 50, 50, 2 / 3, 2 * PI - 2 / 3);
    }
  words("CATS.",80);
  cat();
  let d = dist(x, y, cx, cy);
  if (d < 30) {
    sc();
  }
  
}

function scene2() {
  mid(60, "CATS");
   textStyle(ITALIC);
  if (ct < 20) {
    ct++;
    
  } else {
    sc();
  }
}

function scene3() {
  let x = mouseX;
  let y = mouseY;
  background(252, 220, 90);
  escape(60);
  textSize(40);
  fill(255);
  text(" 'DESTROY THE PLANT.'", width / 2, 150);
  // me.show();
  words("PLANTS.",80);
  fill(67, 36, 24);
  ellipse(150,300,60,40);
  ellipse(450,300,60,40);
  ellipse(300,250,60,40);
plants(155,300);
plants(450,300);
plants(300,250);
noStroke();
  fill(0, 60);
  if (frameCount%10==0){ 
          index++;
          arc(x, y, 50, 50, 0, 2 * PI );}
          else {
            arc(x, y, 50, 50, 2 / 3, 2 * PI - 2 / 3);
          }
if (k>60){
  ellipse(150,300,60,40);
  ellipse(450,300,60,40);
  ellipse(300,250,60,40);
  sc();
}

}

function scene4() {
  mid(3, "PLANTS");
   textStyle(ITALIC);
  if (ct < 20) {
    ct++;
    
  } else {
    sc();
  }
}

function scene5() {
  background(0);
  textStyle(ITALIC);
  fill(255);
  noStroke(2);
  textSize(20);
  text(" YOU DESTROY THE BEST TWO THING IN THE WORLD. \n \n SO THE WORLD WAS DESTROYED. SADLY. LOL",width / 2, 150)
  noStroke(1);
  fill(60);
  textSize(10);
  text(" MAYBE YOU CAN TRY ANOTHER WAY ON THE SCREEN. ",width / 2+150, 380);
  let x = mouseX;
  let y = mouseY;  
  image(img[0], 300, height / 2, 400, 300);
  if (x > width / 2 - 25 && x < width / 2 + 50 && y > 260 && y < 285) {
    fill(0);
   
    image(img[0], 300, 130, 800, 600);
    if (mouseIsPressed) {
      sceneNum = 0;
    }
  }
  ct = 0;
  k=1
}

function scene6() {
  background(255);
  textStyle(ITALIC);
  fill(0);
  noStroke(2);
  textSize(20);
  text(" ALWAYS HAVE A MIND OF YOUR OWN.\n\n AND ESCAPE SOMETIMES WORKS. ",width / 2, 150);
  let x = mouseX;
  let y = mouseY;  
  image(img[0], 300, height / 2, 400, 300);
  if (x > width / 2 - 25 && x < width / 2 + 50 && y > 260 && y < 285) {
   
    image(img[0], 300, 130, 800, 600);
    if (mouseIsPressed) {
      sceneNum = 0;
    }
  }
  ct = 0;
  k=1
}

function words(w,k) {
  textSize(10);
  let x = mouseX;
  let y = mouseY;
  fill(255, k);
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
  noFill();
  stroke(255);
  strokeWeight(6);
  pop();
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

function mid(a,d) {
  console.log("bumped!");
  background(a);
  textSize(20);
  strokeWeight(3);
  textStyle(ITALIC);
  text(" YOU DESTROY THE MEANING IN THE WORLD. \n \n THERE IS NO " + d + " ANYMORE.", width / 2, 170);
}

function sc() {
  sceneNum++;
}

function plants(f,g){
  push();
 
  let x = mouseX;
  let y = mouseY;
  strokeWeight(3);
    stroke(66, 142, 19);
    fill(66, 142, 19);
  let d = dist(x, y, f, g);
      if (d < 30) {
        noFill();
        noStroke();
        k++;
      }
    bezier(f, g, -5+f, -7+g, -5+f, -7+g, -20+f, -15+g);
    bezier(-6+f, -6+g, -2+f, -10+g, -2+f, -10+g, 4+f, -14+g);
      pop();
      
}

// class Me{
//   show(){
//     let me=new Me();
//     if (frameCount%10==0){ 
//       index++;
//       arc(x, y, 50, 50, 0, 2 * PI );}
//       else {
//         arc(x, y, 50, 50, 2 / 3, 2 * PI - 2 / 3);
//       }
//   }
 
 
// }