
var wall,thickness;
var bullets, speed,weight ;

function setup() 
{
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,50);
  thickness = random(22,83);

  bullets  = createSprite(50,200,50,50);
  bullets.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  

  
}

function draw() {
  background("blue");  
 
  if(hasCollided(bullets,wall))
  {
    bullets.velocityX = 0; 
    var damage = 0.5 * weight * speed  * speed/(thickness *thickness *thickness);

    if(damage > 10 )
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge )
   {
     return  true;
   }
   return false;
}