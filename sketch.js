function setup() {
  createCanvas(800,400);

  a=createSprite(400, 200, 50, 50);
  b = createSprite(400, 350, 45, 30)
a.shapeColor = "red"
b.shapeColor = "purple"

}

function draw() {
  background(255,255,255); 
  fill("red")
  //rectMode(CENTER)
  //rect(400,200, 50, 50) 
  b.x = mouseX
  b.y = mouseY
  console.log(b.x-a.x)
  console.log(b.width/2 + a.width/2)
  if(b.x - a.x <= b.width/2 + a.width/2&&a.x - b.x <= b.width/2 + a.width/2 &&
    b.y - a.y <= b.height/2 + a.height/2&&a.y - b.y <= a.height/2 + b.height/2) {
b.shapeColor = "green"
a.shapeColor = "green"
  }
  else {
    b.shapeColor = "purple"
    a.shapeColor = "red"
  }
  drawSprites();
}