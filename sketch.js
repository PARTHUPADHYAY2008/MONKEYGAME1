
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var background

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg")
 
}



function setup() {
 createCanvas(600,600)
  background=createSprite(0,0,600,600)
  background.addImage(backgroundImage)
  background.scale=2.5
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1
  
  
  FoodGroup =  new Group();
  ObstacleGroup = new Group();
  

  
}


function draw() {
background.velocityX = -3
  
  if (background.x < 0){
    background.x = background.width/2
  }
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-5
  ground.x=ground.width/2
  console.log(ground.x)
  
   Food();
   Obstacle();
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY= monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)){
  score=score+2
    FoodGroup.destroyEach()
  }   
  
  switch(score){
    case 10: monkey.scale=0.2
      break;
    case 20: monkey.scale=0.3
      break;
    case 30: monkey.scale=0.4
      break;
    case 40: monkey.scale=0.5
  }
  
  ground.visible = false
  
  
  textSize(20);
  fill("black");
  stroke("White");
  
  if(ObstacleGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }
 
  
  drawSprites();
  text("score: "+ score, 500,50)
}

function Food()  {
 
  if( frameCount % 80 === 0) {
    var banana = createSprite(500,359,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
  
    banana.lifetime = 150;
  FoodGroup.add(banana)
    
    
      }
   }


function Obstacle()  {
 
  if( frameCount % 300 === 0) {
    var obstacle = createSprite(500,327,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
  
    obstacle.lifetime = 150;
  
    ObstacleGroup.add(obstacle)
    
        }

   }

