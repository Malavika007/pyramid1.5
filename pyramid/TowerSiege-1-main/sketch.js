const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1900,600);
    engine = Engine.create();
    world = engine.world;

    ground1= new ground(900,height,1900,20);
    ground2=new ground(390,300,300,10);

    
    block1=new block(330,235,30,40);
    block2=new block(360,235,30,40);
    block3=new block(390,235,30,40);
    block4=new block(420,235,30,40);
    block5=new block(450,235,30,40);
    block6=new block(360,195,30,40);
    block7=new block(390,195,30,40);
    block8=new block(420,195,30,40);
    block9=new block(375,155,30,40);
    block10=new block(370,155,30,40);

    
    hexagon1=new hexagon(700,200,50,50)
    slingshot = new SlingShot(hexagon1.body,{x:700, y:200});

}

function draw(){
    background(0);
   
    Engine.update(engine);


ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();


hexagon1.display();
slingshot.display();




}
function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

