const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine, world; 

var boyImage, boy;
 var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var slingshot, tree, stone, ground;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new GROUND(650,580,1300,20);
	tree= new TREE(1000,350);
stone=new STONE(399,436,50);

slingshot=new SlingShot(stone.body,{x:399,y:436});
mango1=new MANGO(863,272,50);
mango2=new MANGO(850,338,50);
mango3=new MANGO(952,160,50);
mango4=new MANGO(1065,243,50);
mango5=new MANGO(900,300,50);
mango6=new MANGO(976,235,50);
mango7=new MANGO(1053,157,50);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
 tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
    image(boyImage,230,350,200,300);
  console.log("mouseX"+mouseX);
  console.log("mouseY"+mouseY);
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);

  drawSprites();
 
}


function detectCollision(a,b){
	mangoBodyPosition=a.body.position;
	stoneBodyPosition=b.body.position;
	 
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=a.radius+b.radius){
		Matter.Body.setStatic(a.body,false);
	}

}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});   
}


function mouseReleased(){
    slingshot.fly();
}

