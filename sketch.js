const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particules = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var ground;
var particles;

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(250,height,480,20);
    divisions = new Divisions(240,height,480,20);
    divisions = new Divisions(1,height,20,480);
    divisions1 = new Divisions(80,height,20,480);
    divisions2 = new Divisions(160,height,20,480);
    divisions3 = new Divisions(240,height,20,480);
    divisions4 = new Divisions(320,height,20,480);
    divisions5 = new Divisions(400,height,20,480);
    divisions6 = new Divisions(480,height,20,480);
   

}

   
function draw() {
  background(0);
  Engine.update(engine);
  for(var l=0; l<particle.length;l++){
    particles[l].display();
    }
    for(var h=0; h<particle.length;h++){
      particles[h].display();
      }
for(var j = 40; j <=width; j = j + 50)
{
plinko.push(new Plinkos(j,75))
}
for(var k = 15; k <=width-10; k=k + 50)
{
plinko1.push(new Plinkos(k,175))
}
for(var j = 40; j <=width-10; j=j + 50)
{
plinko1.push(new Plinkos(j,275))
}
for(var k = 15; k <=width-10; k=k + 50)
{
plinko1.push(new Plinkos(k,375))
}

if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
      }
  ground.display();
  divisions.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();


 
  drawSprites();
}

