
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Cannon1;
var Cannon2;

function preload()
{

}

function setup() {
	createCanvas(1200,800);


    

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	Cannon1= new Cannon(1000,200);
	Cannon2= new Cannon(1000,400)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Cannon1.display();
  Cannon2.display();
  
  drawSprites();
 
}



