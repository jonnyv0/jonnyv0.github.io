function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  //head
  fill('lightgray')
  ellipse(200,200,200,300)
  //eye
  fill('')
   ellipse(250,150,40,40)
  //eye
   ellipse(150,150,40,40)

  fill('white')
  ellipse(250,150,20,20);
  
  ellipse(150,150,20,20);
  
  fill('black')
  ellipse(255,146,10,10)
  ellipse(145,154,10,10)
  
  ellipse(200,250,50,20)
  
  
  
   fill('darkgray')
  triangle(200,200,250,250,150,100)
  
  line(200,240,190,190)
  
  fill('red')
  arc(200,260,50,100,50,PI)
  
  textSize(20)
  
  text('Mouse X: '+ mouseX,0,20);
  text('Mouse Y: '+ mouseY,0,40);
}