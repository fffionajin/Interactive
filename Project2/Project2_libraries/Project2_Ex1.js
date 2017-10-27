function setup() {
  createCanvas(800, 800);
}
function draw() {
  var r = random(0,400)
  background(50);
  fill(255);
  textSize(32);
  text("Justin Timberlake is better than Justin Beiber ????? ??????? ?????? ???? !!!!!! ???????",
    mouseX, mouseY, 200, 500);
  if (mouseIsPressed) {
    noFill();
    stroke(255);
    rect(mouseX-20, mouseY-20, 250, 400);
    fill(255,0,0,90);
    noStroke();
    ellipse(mouseX-20, mouseY-20, r, r);
  }
}
