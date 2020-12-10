const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24,block25,slingShot;
var gameState="onSling"

function setup() 
{
  
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  surface=new Ground(390,265,200,15)
  surface2=new Ground(600,200,200,15)

  // T.P
  block1=new Box(330,300,30,40)
  
  

  //level 1
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  
  //level 2
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);

  //top
  block16=new Box(390,155,30,40)

  //level 1
  block17=new Box(540,170,30,40)
  block18=new Box(570,170,30,40)
  block19=new Box(600,170,30,40)
  block20=new Box(630,170,30,40)
  block21=new Box(660,170,30,40)

  //level 2
  block22=new Box(570,130,30,40)
  block23=new Box(600,130,30,40)
  block24=new Box(630,130,30,40)

  //top
  block25=new Box(600,90,30,40)

  
  
  rope1=new stone(100,220,40,40)  //polygon
  slingShot=new rope(rope1.body,{x:100,y:200}) //rope

  Engine.run(engine);
}

function draw() 
{
  background("black")
  drawSprites();

surface.display()
surface2.display()
//block1.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()

rope1.display()
slingShot.display()

fill("pink")
textSize(20)
text("Drag the square block and drag to realease",200,30)
}


function mouseDragged()
{
  Matter.Body.setPosition(rope1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}
