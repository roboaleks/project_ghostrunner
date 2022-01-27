  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 8;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(300,450,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

}


function draw() {
  background(255);
 if(tower.y > 390){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("a")){
        ghost.x = ghost.x - 2;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("d")){
  
          ghost.x = ghost.x + 2;

      // write a code to move left when right arrow is pressed
      
    }
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200,10);
    door.visible,false;
    var climber = createSprite(random(150,width-150),10);
    var invisibleBlock = createSprite(door.x = climber.x,door.y = climber.ydd);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 8;
    climber.velocityY = 8;
    invisibleBlock.velocityY = 8;

    //change the depth of the ghost and door
    
     
ghost.depth = door.depth;
    ghost.depth +=1;
    
    //assign lifetime for the  door, climber and invisible block

 door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

