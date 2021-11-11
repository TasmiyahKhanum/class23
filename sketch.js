const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimg;
var tower,towerimg;
var cannon;
function preload() {
 backgroundimg = loadImage("assets/background.gif");
 towerimg = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 var ground_op = {
   isStatic : true
 }

 ground = Bodies.rectangle(0,height-1,width*2,1,ground_op);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,ground_op);
 World.add(world,tower);

 cannon = new Cannon(180,110,130,100,20);


}

function draw() {
  background(189);
  image(backgroundimg,0,0,1200,600);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);
  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x,tower.position.y,160,310);
  pop();
  cannon.display();
 
}
