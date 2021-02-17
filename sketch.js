var ground;
var man;
var t1,t1grp;
var bom;
var floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8
var lvl=0;
var lives=3;
var fire,firegrp;
var Tfire,Tfiregrp;
var bulletCount=5;
var Iblock
function setup() {
  createCanvas(1200,600);
 ground = createSprite(600, 580, 5000, 10);
 man=createSprite(50,560,10,20);
 man.shapeColor="red"
 t1grp=createGroup();
 firegrp=createGroup();
 Tfiregrp=createGroup();
 bom=createSprite(3010,575,10,10);
floor1=createSprite(500,300,60,10);
floor2=createSprite(1000,300,60,10);
floor3=createSprite(1500,300,60,10);
floor4=createSprite(2000,300,60,10);
floor5=createSprite(2500,300,60,10);
floor6=createSprite(3000,300,60,10);
Iblock=createSprite(600, 380, 5000, 10);
Iblock.visible=false;
}

function draw() {
  background(0); 
  if(lvl===0){
    
  } 
  man.collide(ground);
  man.velocityY+=0.5;
  SpawnT();
camera.position.x=man.x
if(keyDown("space")){
  man.velocityY=-10
}
if(keyDown("right")){
  man.x+=5;
}
if(keyDown("left")){
  man.x-=5;
}
if(t1grp.isTouching(man)){
  lives-=1;
  man.x=50;
}
if(keyWentDown("f")&&bulletCount>0){
  fires();
  bulletCount-=1

}
if(firegrp.isTouching(t1grp)){
  t1grp[0].destroy();
  firegrp[0].destroy();
  bulletCount+=1

}
t1grp.bounceOff(Iblock);
t1grp.bounceOff(ground);
  drawSprites();
  textSize(20);
  fill("red")
  text("lives: "+lives,man.x,100);
  text("bullets: "+bulletCount,man.x-500,100)

}
function SpawnT(){
  if(frameCount%80===0){
    t1=createSprite(3000,560,20,20);
    t1.velocityX=-5
    t1.velocityY=-2
    t1.lifetime=3000/5
    t1.bounceOff(Iblock);
    t1grp.add(t1)
  }
}
function fires(){
  fire=createSprite(man.x,man.y,10,10);
  fire.velocityX=5;
  firegrp.add(fire);
}
