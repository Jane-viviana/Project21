var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1000,400);
speed=random(223,321);
weight=random(30,);
thickness=random(22,83)

 bullet = createSprite(50, 200, 75, 15);
 bullet.shapeColor="white";
 bullet.velocityX= speed;

 wall = createSprite(900,200,thickness,height/2);
 wall.shapeColor= color(80,80,80);
}

function draw() {
  background(0);
  console.log(wall.x-bullet.x);
  
  if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
    if(damage>10){
      wall.shapeColor=("red");
    }
    if(damage<10){
      wall.shapeColor=("green");
    }
  
  
  drawSprites();
}
