var wall,thickness;
var speed,weight,bullet;
var bullet1,wall1;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

   bullet = createSprite(50,200,20,30);
   bullet.shapeColor = "white";

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = (80,80,80);
}

function draw() {
  background(0,0,0);  

bullet.velocityX = speed;

if(hascollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness)
}
if(damage > 10){
  wall.shapeColor = color(255,0,0);
}
if(damage < 10){
  wall.shapeColor = color(255,0,0);
}

  drawSprites();
}
function hascollided(bullet1,wall1){
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}