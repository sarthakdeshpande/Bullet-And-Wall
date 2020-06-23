var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge

function setup() {
  createCanvas(1000,400);

  thickness = random(22,83);
  speed = random(233,321);
  weight =random(30,52);

  wall = createSprite(600,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(60,200,40,15);
  bullet.shapeColor = color("white");

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if(damage>10){
      
      wall.shapeColor = color("red");
    }

    if(damage<10){
      
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}

function hasCollided (bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}