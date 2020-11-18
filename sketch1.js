const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ground, ball;
var box1,box2;
var ground;
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    /*var ground_options = {
        isStatic:true, mass: 200
    }
    var ball_option = {
        restitution:1
    }
    

   ground = Bodies.rectangle(500,560,1000,40,ground_options);
   World.add(world,ground);
  ball=Bodies.circle(200,200,50,ball_option);
  World.add(world,ball);
  
   

   console.log(ball);*/
   ground=new Ground(600,500,1200,20);
   box1 = new Box(800,480,50,50);
   box2 = new Box(1000,480,50,50); 
   pig1= new pig(900,480);
   log1= new log(900,430,250,PI/2);
   box3= new Box(800,420,50,50);
   box4= new Box(1000,420,50,50);
   log2= new log(900,400,250,PI/2);
   pig2=new pig(900,420);
   box5=new Box(900,390,50,50);
   log3=new log(850,370,120,PI/7);
   log4=new log(950,370,120,-PI/7);
   bird1=new bird(200,200)
}

function draw(){
    background(100,50,20);
    Engine.update(engine);
    /*rectMode(CENTER);
   // rect(200,200,50,50);
    rect(ground.position.x,ground.position.y,1000,40);
    ellipseMode(RADIUS);
    
    ellipse(ball.position.x,ball.position.y,50,50);*/
    pig1.display();
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    pig2.display();
    bird1.display();
    
}