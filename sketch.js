var wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)

  speed=random(55,90)
  weight=random(400,1500)

  


  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225)

  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=color(80,80,80)
}

function draw(){
  backgroud(0);

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness);
  }
  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
  }

  if(damage<10)
{
  wall.shapeColor=color(0,225,0)
}



  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

  

}