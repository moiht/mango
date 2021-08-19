
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boyimage,boy
var treeimage,tree
function preload()
{
boyimage = loadImage("Plucking mangoes/boy.png");
treeimage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);

  boy=createSprite(100,500,100,200);
  boy.addImage(boyimage);
  boy.scale=0.1;  
  tree = createSprite(500,350,600,700);
  tree.addImage(treeimage);
  tree.scale = 0.5;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    stone1= new Stone(100,500);
	Engine.run(engine);
    slingshot1=new SlingShot(stone1.body,{x:100,y:350})
 
   mango1 = new Mango(500,300,50); 
   mango2 = new Mango(400,350,50); 
   mango3 = new Mango(300,350,50);
   mango4 = new Mango(250,300,50); 
   mango5 = new Mango(600,300,50);  
   mango6 = new Mango(700,300,50);  
   mango7 = new Mango(796,260,50);  
   tree = new Tree(500,350,600,700); 
   
}


function draw() {
  rectMode(CENTER);
  background(257);
  
  drawSprites();
  stone1.display();
  slingshot1.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  
}

function mouseDragged(){  
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function detectcollision(lstone,lmango){
mangoBodyposition=lmango.body.position;
stoneBodyposition=lstone.body.position;

var distance=dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)

if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false);
}

}
