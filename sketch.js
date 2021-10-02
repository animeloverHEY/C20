var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "yellow";

  b = createSprite(400, 200, 30, 20);
  b.shapeColor = "yellow";
}

function draw() {
  background("black");  
  b.x = mouseX;
  b.y = mouseY;

  if(b.x-a.x< a.width/2+b.width/2 && a.x-b.x< a.width/2+b.width/2 && b.y-a.y< a.height/2+b.height/2 && a.y-b.y< a.height/2+b.height/2){
    
    a.shapeColor = "pink";
    b.shapeColor = "pink";
  }
  else{
    a.shapeColor = "yellow";
    b.shapeColor = "yellow";
  }
  drawSprites();
}