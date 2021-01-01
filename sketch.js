var eng;
var world;
var bodies;
var bodies2;
var options2;
var options;

const MBODIES = Matter.Bodies
const MWORLD = Matter.World


function setup() {
  createCanvas(500,500);
  
  rectMode(CENTER);

  options = {
    isStatic: true
  }

  options2 = {
    restitution: 0.8
  }


  eng = Matter.Engine.create(); 

  world = eng.world;

  bodies = MBODIES.rectangle(250,490,30,30,options);

  bodies2 = MBODIES.circle(300,300,30,options2);

  Matter.World.add(world,bodies2);

  MWORLD.add(world,bodies);

  console.log(bodies2);


  
}

function draw() {
  background(255,255,255);

  Matter.Engine.update(eng)

  rect(250,250, 50, 50)  

  rect(bodies.position.x,bodies.position.y,500,20);


  ellipse(bodies2.position.x,bodies2.position.y,30,30);

  //drawSprites();  
}