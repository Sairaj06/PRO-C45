var hero;


function preload(){
  heroAni = loadImage("Superhero-01.png");
  bgImg = loadImage("GamingBackground.png");
}

function setup(){
  createCanvas(1200,500);

  bg = createSprite(1000,250,200,200);
  bg.addImage(bgImg);
  bg.velocityX = -3;
  bg.scale = 1;

  hero = createSprite(100,250,20,20);
  hero.addImage(heroAni);
  hero.scale = 0.103;
 
}


function draw() {
  background("white");
  
 

  if(bg.x<100){
	  bg.x = bg.width/2;
  }
  if(keyDown("up")){
   hero.y = hero.y - 5;
  }

  if(keyDown("down")){
   hero.y = hero.y + 5;
  }
  
  drawSprites();
  stroke("black")
  fill("white")
  textSize(20);
  text("to move the super hero press up and down arrow",200,50);
 
}



