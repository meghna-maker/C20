
var car,wall,rect1,rect2,rect3,rect4,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  rect1 = createSprite(300,100,300,80);
  rect1.shapeColor = "black";

  car = createSprite(170,100,15,15);
  car.shapeColor = "grey";

  wall = createSprite(430,100,10,40);
  wall.shapeColor = "grey";

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
 
  if(wall.x-car.x<((car.width+wall.width)/2)){
    car.velocityX =0;
    var deformation = (0.5*weight*speed*speed)/22500;
    console.log(car.velocityX);
    car.collide(wall);
    if(deformation>180){
      car.shapeColor = "red";
    }if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }if(deformation<100){
      car.shapeColor = "green";
    }
 }
  
  
  drawSprites();
}