const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

function preload() {
  balloon1=loadImage("balloon.png")
  balloon2=loadImage("ballon2.png")
  bullimage=loadImage("arrow.png");
  bg=loadImage("background1.png");
  bg2=loadImage("background2.png");


  
}

function setup() {
	var canvas = createCanvas(1000,500);

 
  


  engine = Engine.create();
  world = engine.world;

	
 

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(bg);
  arrow();
  Engine.update(engine);

  

  drawSprites();
 
}
function arrow(){
  if(frameCount %20 === 0){
    bull=createSprite(random(100,400),0,100,100);
    bull.addImage("arrow.png",bullimage);
    bull.scale=0.2;
    

  }



}
