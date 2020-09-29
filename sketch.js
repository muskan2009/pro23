var car,car1,car2,car3, wall;
var speed,weight,thickness;

function setup(){
  createCanvas(1600,400);
thickness = random(22,83);
speed = random(22,32);
weight = random(3,2);

wall = createSprite(1200,200,thickness,height/2);

car= createSprite(100,70,50,40);
car.velocityX = speed;
car1= createSprite(100,150,50,40);
car1.velocityX = speed;
car2= createSprite(100,230,50,40);
car2.velocityX = speed;
car3= createSprite(100,310,50,40);
car3.velocityX = speed;




}
function draw(){

  background("black");

  wall.shapeColor = color(80);

if (wall.x-car.x < (car.width + wall.width)/2){
car. velocityX = 0;
var deformation = 0.5 * weight * speed/22509;
if (deformation>180){
car.shapeColor = color("green");
}

if(deformation<180 && deformation>100){
car.shapeColor = color("green");
}
 if(deformation<100)
  {
    car.shapeColor = color("green");
  }
}
if (wall.x-car1.x < (car1.width + wall.width)/2){
  car1. velocityX = 0;
  var deformation = 0.5 * weight * speed/22509;
  if (deformation>180){
  car1.shapeColor = color("pink");
  }
  
  if(deformation<180 && deformation>100){
  car1.shapeColor = color("pink");
  }
 if(deformation<100)
  {
  car1.shapeColor = color("pink");
 }
}
if (wall.x-car2.x < (car2.width + wall.width)/2){
 car2. velocityX = 0;
 var deformation = 0.5 * weight * speed/22509;
 if (deformation>180){
 car2.shapeColor = color("blue");
 }
      
   if(deformation<180 && deformation>100){
    car2.shapeColor = color("blue");
   }
   if(deformation<100)
   {
   car2.shapeColor = color("blue");
        }
      }
  if (wall.x-car3.x < (car3.width + wall.width)/2){
    car3. velocityX = 0;
    var deformation = 0.5 * weight * speed/22509;
    if (deformation>180){
   car3.shapeColor = color("yellow");
    }
          
   if(deformation<180 && deformation>100){
   car3.shapeColor = color("yellow");
    }
   if(deformation<100)
    {
     car3.shapeColor = color("yellow");
    }
 }
 if (hasCollided(car,wall)){
car.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
if (damage>10){
car.shapecolor = color(255,0,0)
}
if (damage<10){
  car.shapecolor = color("green")
  }
}
if (hasCollided(car2,wall)){
  car2.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if (damage>10){
  car2.shapecolor = color(255,0,0)
  }
  if (damage<10){
    car2.shapecolor = color("blue")
    }
  }
  if (hasCollided(car1,wall)){
    car1.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if (damage>10){
    car1.shapecolor = color(255,0,0)
    }
    if (damage<10){
      car1.shapecolor = color("pink")
      }
    }
    if (hasCollided(car3,wall)){
      car3.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
      if (damage>10){
      car3.shapecolor = color(255,0,0)
      }
      if (damage<10){
        car3.shapecolor = color("yellow")
        }
      }
  drawSprites();
}

function hasCollided (lcar,lwall){
  carRightEdge = lcar.x +lcar.width;
 wallLeftEdge = wall.x;

if (carRightEdge>=wallLeftEdge)  {
return true
}
return false;
}
function hasCollided (lcar3,lwall){
  car3RightEdge = lcar3.x +lcar3.width;
 wallLeftEdge = wall.x;

if (car3RightEdge>=wallLeftEdge)  {
return true
}
return false;
}
function hasCollided (lcar1,lwall){
  car1RightEdge = lcar1.x +lcar1.width;
 wallLeftEdge = wall.x;

if (car1RightEdge>=wallLeftEdge)  {
return true
}
return false;
}
function hasCollided (lcar2,lwall){
  car2RightEdge = lcar2.x +lcar2.width;
 wallLeftEdge = wall.x;

if (car2RightEdge>=wallLeftEdge)  {
return true
}
return false;
}
