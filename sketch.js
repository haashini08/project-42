var bg, issimg, sc1img, sc2img, sc3img, sc4img;
var iss, spacecraft;
var hasDocked = false;

function preload(){
  bg=loadImage("spacebg.jpg");
  sc1img=loadImage("spacecraft1.png");
  sc2img=loadImage("spacecraft2.png");
  sc3img=loadImage("spacecraft3.png");
  sc4img=loadImage("spacecraft4.png");
  issimg=loadImage("iss.png");
}

function setup() {
  createCanvas(600,350);
  iss = createSprite(330, 130);
  iss.addImage(issimg);
   iss.scale = 0.25;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sc1img);
  spacecraft.scale = 0.15
}

function draw() {
  background(bg);  
  if(!hasDocked){
      spacecraft.x = spacecraft.x + random(-1, 1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(sc1img); 
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(sc3img);
    spacecraft.x = spacecraft.x - 1;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(sc2img);
    spacecraft.x = spacecraft.x + 1;
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ 
    hasDocked = true; 
    textSize(25); 
    fill("white") 
    text("Docking Successful!", 200, 300); }
  drawSprites();
}