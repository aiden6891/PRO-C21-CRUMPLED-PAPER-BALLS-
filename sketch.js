const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;

var ground;
var leftSide;
var rightSide;
var top_wall;
var right;
var left;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(200,390,1000,20);
	rightSide = new Ground(600,330,20,100);
	leftSide = new Ground(500,330,20,100);

	top_wall = new Ground(200,10,1000,20);
	right = new Ground(670,200,20,700);
    left = new Ground(10,200,20,400);
	
	var ball_option = {
		isStatic:false,
		restitution: 0.3,
		friction:0
    };

	
	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_option);
	World.add(world,ball);
  
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
 
  background(0);
  
  drawSprites();
 
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);


}


function keyPressed() {

	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05,y:0});
	}

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y:-0.05});
	}

}
