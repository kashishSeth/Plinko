  
var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var particle;
var PLAY = 1;
var END = 0;
var gameState = PLAY; 
var p=[];

function setup() {

createCanvas(800, 800);

engine = Engine.create();
world = engine.world;


ground = new Ground(width/2,height,width,20);

 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }

}

function draw() {

background("black");


if(gameState == PLAY){

textSize(20)
//text("Score : "+score,20,30);
Engine.update(engine);

fill("White");
text("SCORE : " + score, 35, 30);
fill("White");
text("500",745,520);
fill("White");
text("500",25,520); 
fill("White");
text("400",665,520);  
fill("White");
text("400",105,520);
fill("White");
text("300",185,520); 
fill("White");
text("300",585,520); 
fill("White");
text("200",265,520); 
fill("White");
text("200",505,520); 
fill("White");
text("100",345,520); 
fill("White");
text("100",425,520); 

fill("Yellow");
rect(400,465,800,4);

fill(175,0,42);
rect(795,400,10,800);
fill(175,0,42);
rect(5,400,10,800);
fill(175,0,42);
rect(400,5,800,10);
fill(175,0,42);
rect(400,795,800,10);

for(var i=0; i<p.length; i++){
particle = p[i]

if(particle){
particle.display();

var pos = particle.body.position; 
if(pos.y>650 && particle.counter==0){
if((pos.x > 10 && pos.x < 75) || (pos.x > 720 && pos.x < 780)){
  score = score + 500;
  particle.counter=1
  turn = turn + 1;
}
else if((pos.x > 80 && pos.x < 160) || (pos.x > 640 && pos.x < 720)){
  score = score + 400;
  particle.counter=1
  turn = turn + 1;
}
else if((pos.x > 160 && pos.x < 240) || (pos.x > 560 && pos.x < 640)){
  score = score + 300;
  particle.counter=1
  turn = turn + 1;
}
else if((pos.x > 240 && pos.x < 320) || (pos.x > 480 && pos.x < 560)){
  score = score + 200;
  particle.counter=1
  turn = turn + 1;
}
else if((pos.x > 320 && pos.x < 400) || (pos.x > 560 && pos.x < 620)){
  score = score + 100;
  particle.counter=1
  turn = turn + 1; 
}
}
}
}
for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();
}

for (var k = 0; k < divisions.length; k++) {
  
  divisions[k].display();
 }

}
if(turn==4){
  background("White");
  turn=0;
  gameState = END;
}
if(gameState==END){
  fill("Red");
  textSize(30);
  text("Gamer Over",200,400);
}

fill("Blue");
text(mouseX + "," + mouseY, mouseX, mouseY);
}

function mousePressed(){
 p.push (new Particle(mouseX, mouseY, 10));
 //particle = new Particle(mouseX,mouseY,10);
}