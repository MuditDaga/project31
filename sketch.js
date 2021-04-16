const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var canvas;
var engine, world;
var maxDrops= 100;
var drops=[];


function preload(){
    
}

function setup(){
   canvas= createCanvas(600,600);
   engine= Engine.create();
   world= engine.world;

   for(var i= 0; i<maxDrops; i++){
    drops.push(new Drops(random(0,600),random(0,600)))    ;

}

}

function draw(){
    background("black");
    Engine.update(engine);
    
    for(var i= 0; i<maxDrops; i++){
        drops[i].display();
    drops[i].update();
    }
    drawSprites();
}   

