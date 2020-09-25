//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const engine = Engine.create();
const world = engine.world;

var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;
var bottomGround, topGround, leftGround, rightGround;

function setup() {

  //canvas
  createCanvas(480,800);

  //create divisions
  for(var i = 80; i <= width; i += 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinkos
  //row 1
  for(var j = 40; j <= width; j += 50){
    plinkos.push(new Plinko(j, 75));
  }
  //row 2
  for(var j = 15; j <= width-10; j += 50){
    plinkos.push(new Plinko(j, 175));
  }
  //row 3
  for(var j = 40; j <= width; j += 50){
    plinkos.push(new Plinko(j, 275));
  }
  //row 4
  for(var j = 15; j <= width-10; j += 50){
    plinkos.push(new Plinko(j, 375));
  }

  //borders
  bottomGround = new Ground(240, 800, 480, 20);
  topGround = new Ground(240, 0, 480, 20);
  leftGround = new Ground(0, 400, 20, 800);
  rightGround = new Ground(480, 400, 20, 800);

}


function draw() {

  //update engine
  Engine.update(engine);

  ///background
  background("black");  

  //display divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //display plinkos
  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  //create particles
  if(frameCount%40 === 0){
    particles.push(new Particle(random((width/2)-10, (width/2)+10), 50));
  }
  //display particles
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  //display ground 
  leftGround.display();
  rightGround.display();
  topGround.display();
  bottomGround.display();

}