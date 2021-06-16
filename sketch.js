const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
const Body=Matter.Body
var tank,tankI
var sniper,sniperI
var fireball,fireballI
var smoke,smokeI
var backdrop
var backdropI
var fireballGroup
var EX,engine,world,bullet1
var bulletGroup
var power=0
var fireball
var button
function preload(){
    tankI = loadImage("TransparentTank.png");
    sniperI = loadImage("SniperMonkey.png");
    fireballI = loadImage("TransparentFireball.png");
    smokeI = loadImage("transparentExplosion.png");
    backdropI = loadImage("Backdrop.png")
   bulletI=loadImage("bullet.png")
}
  
function setup(){
createCanvas(displayWidth,displayHeight)

engine=Engine.create()
world=engine.world
bulletGroup= new Group()


tank = createSprite(595,699,10,10)
tank.addImage(tankI)
tank.scale = 0.25
tank.debug=true
push()
tint(tankI,255,120)
pop()
sniper = createSprite(180,180,10,10)
sniper.addImage(sniperI)
sniper.scale =0.75
fireballGroup = new Group()
three = createSprite(650,400,100,2)
four = createSprite(1090,430,30,300)
five = createSprite(990,194,100,30)
six = createSprite(781,210,50,30)
seven = createSprite(854,480,50,3)
tank.velocityX=0
tank.velocityY=-2
hb=createSprite(780,60,100,1)
 hb2=createSprite(780,90,100,1) 
 hb3=createSprite(730,75,1,30) 
 hb4=createSprite(830,75,1,30) 
 bh5=createSprite(835,75,10,20)
 var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });

  Engine.run(engine);
  Render.run(render);
  
 //Render.run(render);

}
function draw(){
    background(backdropI)
    Engine.update(engine)
        if (keyDown("UP_ARROW")){
            bullet1.addSpeed(25,mouseX+45)
           bullet1.visible=true
        } 

    if(bulletGroup.isTouching(tank)){
        power+=2
        bulletGroup.destroyEach()
    } 
    console.log(power)
    if(power===0){ 
        fill("red")
       rect(735,62,90,25)
       
        }
   
    if(power===2){ 
        fill("red")
       rect(735,62,60,25)
       
        }
        if(power===4){ 
            fill("red")
           rect(735,62,30,25)
           
            }
            if(power>=6){ 
                fill("red")
               rect(735,62,05,25)
               tank.addImage(smokeI)
               tank.velocityX=0
               tank.velocityY=0
               fireball.visible=false
                button=createButton("next")
               button.position(500,500)
               
                }
                button.mousePressed(()=>{
                    text("hi",100,100)
                })
    
    three.visible= true

   // console.log(mouseX,mouseY)
    if(tank.isTouching(three)){
        tank.velocityX=2
        tank.velocityY=0
        
        
    }
    if(tank.isTouching(four)){
        tank.velocityX=0
        tank.velocityY=-2
        
    }
    if(tank.isTouching(five)){
        tank.velocityX=-2
        tank.velocityY=0
        
    }
    if(tank.isTouching(six)){
        tank.velocityX=0
        tank.velocityY=2
        
    }
    if(tank.isTouching(seven)){
        tank.velocityX=-2
        tank.velocityY=0
        
    }
   
   

  
    spawnFireballs()
    drawSprites()
    bullets()
    sniper.rotation = mouseX
    
}

function spawnFireballs(){
    if(frameCount%20 === 0){
     fireball = createSprite(tank.x-55,tank.y-75,30,30)
        fireball.addImage(fireballI)
        fireball.scale = 0.02
        var rand = Math.round(random(1,10))
        //console.log(rand)
        if(rand === 1){ 
        fireball.velocityX = 10
        fireball.velocityY = -10
    }
    if(rand === 2){ 
        fireball.velocityX = -10
        fireball.velocityY = 10
    }
    if(rand === 3){ 
        fireball.velocityX = -15
        fireball.velocityY = 15
    }
    if(rand === 4){ 
        fireball.velocityX = -15
        fireball.velocityY = 12
    }
    if(rand === 5){ 
        fireball.velocityX = 20
        fireball.velocityY = -15
    }
    if(rand === 6){ 
        fireball.velocityX = -15
        fireball.velocityY = -10
    }
    if(rand === 7){ 
        fireball.velocityX = 15
        fireball.velocityY = 0
    }
    if(rand === 8){ 
        fireball.velocityX = 0
        fireball.velocityY = -20
    }
    if(rand === 9){ 
        fireball.velocityX = 7
        fireball.velocityY = 15
    }
    if(rand === 10){ 
        fireball.velocityX = 20
        fireball.velocityY = 15
    }
        //fireballGroup.add(fireball)
        fireball.lifetime = 100

    }
}
function bullets(){

    bullet1= createSprite(180,180,20,20)
    bullet1.addImage(bulletI)
    bullet1.visible=false
    bullet1.scale=0.4
    bulletGroup.add(bullet1)
    
}