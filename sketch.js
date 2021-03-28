var FixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  FixedRect = createSprite(100, 400, 50, 80);
  FixedRect.shapeColor = "green";
  FixedRect.debug = true;
  movingRect = createSprite(1200, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  FixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,FixedRect)
   
  drawSprites();
}

