// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
var bg,bgImage
var birdAnimation,bird
var block1Img,block2Img,block3Img,block4Img
var block1,block2,block3,block4
var blocksGroup,blocksGroup1
var gameState="play"

function setup() {
  createCanvas(400,400);

  //engine = Engine.create();
  //world = engine.world;
 
bird=createSprite(200,200)
bird.addAnimation("birdie",birdAnimation)
bird.scale=0.3
bird.velocityY=5
block1=createSprite(400,400)
block1.addImage(block1Img)
block3=createSprite(400,80)
block3.addImage(block3Img)
block3.debug=true
block1.debug=true
block1.setCollider("rectangle",0,0,50,170)
block3.setCollider("rectangle",0,0,50,170)
blocksGroup= new Group()
blocksGroup1= new Group()
}
function preload(){
 bgImage=loadImage("bg1.png")
  birdAnimation=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png")
  block1Img=loadImage("block1.png")
  
  block3Img=loadImage("block3.png")
  block4Img=loadImage("block4.png")
  
}

function draw() 
{
    if(gameState==="play"){

    
  background(bgImage);
  //Engine.update(engine);
  drawSprites();
  blocks()
  blocks1()
  if (keyDown("space")&&bird.y>=120){
    
    bird.velocityY=-5     
  }
  bird.velocityY+=1
  console.log(bird.y)
  if(bird.isTouching(blocksGroup)||bird.isTouching(blocksGroup1)){
    gameState="end"
  }
}
if(gameState==="end"){
  textSize(30)
  text("GAME OVER",100,100)
}
}
function blocks(){
    if(frameCount%60===0){
        block1=createSprite(300,400)
        block1.addImage(block1Img)
      
        block1.velocityX=-4
        block1.lifetime=400
        block1.setCollider("rectangle",0,0,50,170)


       
blocksGroup.add(block1)

    }
    
}
function blocks1(){
    if(frameCount%60===0){
       


        block3=createSprite(300,100)
        block3.addImage(block3Img)
      
        block3.velocityX=-4
        block3.lifetime=400
blocksGroup1.add(block3)
block3.setCollider("rectangle",0,0,50,170)
    }
    
}