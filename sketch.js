var car, wall;
var speed,weight;
var deformation=0;

function setup() 
{
  createCanvas(1600,400);
  speed=random(55,90);
  weight=(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor="white";
  car.velocityX=speed;
  
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor='rgb(255,255,255)';

  deformation=0.5*weight*speed*speed/22500;
}

function draw()
{
  background(0);  

  if(isTouching(car, wall))
  {
    if (deformation<100)
    {
      car.shapeColor="green";
    }
    if (deformation>=100 && deformation<=180)
    {
      car.shapeColor="yellow";
    }
    if (deformation>=180)
    {
      car.shapeColor="red";
    }
  }

  //car.debug=true;
  //wall.debug=true;

  drawSprites();

  //text(deformation,50,100);
}