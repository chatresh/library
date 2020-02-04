var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(200, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
 // movingRect.velocityX=-2;
  movingRect.velocityY=2;
 // fixedRect.velocityX=2;
  fixedRect.velocityY=-2;
}

function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);
 
  drawSprites();
}

