var hojfj,hudjd;


function setup() {
  createCanvas(800,400);
  hojfj=createSprite(400, 200, 50, 50);
  hojfj.shapeColor=("red");
  hudjd=createSprite(200,200,50,50);
  hudjd.shapeColor=("red");
  hudjd.debug=true;
  hojfj.debug=true;
}

function draw() {
  background(0); 
  hudjd.x=World.mouseX;
  hudjd.y=World.mouseY;
  if (hudjd.x-hojfj.x<hudjd.width/2+hojfj.width/2 && 
    hojfj.x-hudjd.x<hudjd.width/2+hojfj.width/2 && 
    hudjd.y-hojfj.y<hudjd.height/2+hojfj.width/2 &&
    hojfj.y-hudjd.y<hudjd.height/2+hojfj.width/2){
    hojfj.shapeColor=("green");
    hudjd.shapeColor=("green"); 
  }
  else {
    hudjd.shapeColor=("red");
    hojfj.shapeColor=("red");
  }
  drawSprites();
}