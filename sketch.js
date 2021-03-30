
 let m,h,s ;
 


function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES)

}

function draw() {
  background("black");  
  translate (200,150)
  m = minute();
  h = hour();
  s = second();
  
  sAngle=map(s,0,60,0,360);
  hAngle=map(h,0,60,0,360);
  mAngle=map(m,0,60,0,360);
  noFill();
  strokeWeight (5)
  stroke ("blue")
//drawing the arcs 
strokeWeight(10); 
noFill(); 
//Seconds 
stroke(255,0,0); 
arc(0,0,300,300,0,sAngle); 
//Minutes 
stroke(0,255,0); 
arc(0,0,280,280,0,mAngle); 
//Hour 
stroke(0,0,255); 
arc(0,0,260,260,0,hAngle);

  push ();
  rotate (sAngle)
  stroke("red");
  strokeWeight(5);
  line (0,0,100,0)
  pop ();

  push ();
  rotate (hAngle)
  stroke("blue");
  strokeWeight(7);
  line (0,0,50,0)
  pop ();

  push ();
  rotate (mAngle)
  stroke(12,255,0);
  strokeWeight(7);
  line (0,0,80,0)
  pop ();
  
  drawSprites();
}