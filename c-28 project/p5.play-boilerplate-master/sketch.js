const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4;
var boxes=[],i=0,j,c=0,x,y;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

    p1 = new Platform(1050,200,200,10);
    p2 = new Platform(800,300,200,10);
    p3 = new Platform(650,100,250,10);
    p4 = new Platform(500,250,150,10);

    x=970;
    y=190;
    for(i=5;i<=1;i--){
      for(j=1;j<=i;j++){
        boxes[c]= new Box(x,y,10,10);
        x=x+10;
        c=c+1; 
      }
      x=x+10;
      y=y-10;
    }


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  for(i=0;i<=14;i++){
  boxes[i].display();
  }
  drawSprites();
}