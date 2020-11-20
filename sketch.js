var background0, backgroundImage,edges;
var ballonRed, ballonImageRed,edges;
var ballonGreen, ballonImageGreen,edges;
var ballonBlue, ballonImageRed,edges;
var ballonPink, ballonImagePink,edges;
var bow, bowImage;


function preload() {

  backgroundImage = loadImage("background0.png");
  
  bowImage = loadImage("bow0.png");
  
  ballonImageRed = loadImage("red_balloon0.png");
  ballonImageGreen = loadImage("");
  ballonImageBlue = loadImage("blue_balloon0.png");
  ballonImagePink = loadImage("pink_balloon0.png");
  
}

function setup() {

  createCanvas(400, 400);


   background0 = createSprite(0, 0, 400, 400);
   background0.addImage(" background0", backgroundImage);
   background0.x =  background0.width / 2;
   background0.scale = 2


  bow = createSprite(380, 200, 50, 50);
  bow.addImage("bow", bowImage);


  for (var i = 60; i < 380; i = i + 60) {
    ballonRed = createSprite(50, i, 20, 50);
    ballonRed.addImage("ballonRed", ballonImageRed);
    ballonRed.scale = 0.1;
  }

  for (i = 110; i < 380; i = i + 60) {
    ballonGreen = createSprite(100, i, 20, 50);
    ballonGreen.addImage("ballonGreen", ballonImageGreen);
    ballonGreen.scale = 0.1;
  }

  for (i = 130; i < 360; i = i + 60) {
    ballonBlue = createSprite(150, i, 20, 50);
    ballonBlue.addImage("ballonBlue", ballonImageBlue);
    ballonBlue.scale = 0.1;
  }
  for (i = 150; i < 289; i = i + 70) {
    ballonpink = createSprite(199, i, 20, 50);
    ballonpink.addImage("ballonPink", ballonImagePink);
    ballonpink.scale = 0.900;
  }
}

function draw() {

  background("white");

   background0.velocityX=-5;
  if (background0.x<0) {
     background0.x=background0.width/2;
  }

  bow.y = mouseY;

  

  drawSprites();
}






