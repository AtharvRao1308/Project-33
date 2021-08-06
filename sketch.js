var bgImg;
var bg;

var snow,snowImg,snowGroup;

var snowman,snowmanImg;

function preload() {

  bgImg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");
  snowmanImg = loadImage("snowman_PNG99814.png");
}

function setup() {
  createCanvas(800,400);

  snowGroup = new Group();

  snowman = createSprite(200,200,50,50);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.5;
}

function draw() {
  background(bgImg);  

  if(keyDown("UP_ARROW")){
    snowman.y = snowman.y - 30;
  }

    if(keyDown("DOWN_ARROW")){
      snowman.y = snowman.y + 30;
    }
  

  if(keyDown("LEFT_ARROW")){
    snowman.x = snowman.x - 30;
  }

  if(keyDown("RIGHT_ARROW")){
    snowman.x = snowman.x + 30;
  }

  snowFall();
  
  drawSprites();
}

function snowFall(){
   if(frameCount%10===0){
     snow = createSprite(random(500,1100),random(100,500),10,10);
     
     snow.addImage(snowImg);
     snow.scale = 0.1;
     snow.velocityY = 3;
     snow.lifetime = 200;
     snowGroup.add(snow);
     
   }
}