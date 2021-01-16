const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var engine,world;
var bgImage;
var ground,hero,fly,monster,block;

function preload() {
//preload the images here
bgImage=loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(2000, 800);
  engine=Engine.create();
  world=engine.world
  // create sprites here
  ground=new Ground(700,600,1400,20);
  hero=new Hero(280,500,200);
  fly=new Fly(hero.body,{x:500,y:200});
  monster=new Monster(1280,500,200);


  block1=new Block(900,570);
  block2=new Block(960,570);
  block3=new Block(1020,570);
  block4=new Block(1080,570);
  block5=new Block(900,520);
  block6=new Block(960,520);
  block7=new Block(1020,520);
  block8=new Block(1080,520);
  block9=new Block(900,470);
  block10=new Block(960,470);
  block11=new Block(1020,470);
  block12=new Block(1080,470);
  block13=new Block(900,420);
  block14=new Block(960,420);
  block15=new Block(1020,420);
  block16=new Block(1080,420);
  block17=new Block(900,370);
  block18=new Block(960,370);
  block19=new Block(1020,370);
  block20=new Block(1080,370);

  Engine.run(engine);

}

function draw() {
  image(bgImage,1000,400,2000,800);
  ground.display();
  hero.display();
  monster.display();

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
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}