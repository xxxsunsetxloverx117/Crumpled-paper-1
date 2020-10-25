
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	lbox = new Box(650,200,100,30,PI);
	rbox = new Box(650,200,145,30,PI);
	bottom = new Box(650,200,130,30,PI/2);
	paper = new Paper(200,200,20);
	ground1 = new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground1.display();
  lbox.display();
  rbox.display();
  bottom.display();

 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paper.body,paper.position,{ x: 35, y: -85});
	
    }
}



