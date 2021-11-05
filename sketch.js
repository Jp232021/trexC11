
var trex ,trex_running;
var ground,invisbleground;
var groundImage;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);

 
 //crea sprite del suelo
  ground=createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
  ground.x=ground.width/2
  //CREA EL PISO INVISIBLE
  invisbleground=createSprite(200,190,400,10)
  invisbleground.visible=false;
 //agregar tamaño y posiciòn al t-rex
  trex.scale=0.5;
  trex.x=50;
 
}

function draw(){
 background(220);
 console.log(trex.y);
 //pone velocidad al piso
  ground.velocityX=-2;



  //hacemos el piso infinito
 if(ground.x<0){
    ground.x=ground.width                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              /2;
 }


 if(keyDown("space"&&trex.y<=100)){
   trex.velocityY=-10;
 }
   trex.velocityY=trex.velocityY+0.8;


 //evitar que el trex se caiga
   trex.collide(invisbleground);



 drawSprites();

 }
