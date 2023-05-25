let tree;
let real;
let y = 0;
let duck;
let damn;
function setup() {
  createCanvas(600, 600);
  tree = loadImage('DOODLE.png')
  real = loadImage('TREE?.jpg')
  duck = loadImage('red.jpg')
  damn = loadImage('ABC.jpg')
}

function draw() {
  background(120);
 
  
  line(400, 0, 400, 600);
  line(200, 0, 200, 600);
  
  line(0,300,20000,600)
  
  textSize(20)
  
  text('Mouse X: '+ mouseX,0,20);
  text('Mouse Y: '+ mouseY,0,40);
    
  
  if (mouseX > 0 && mouseX <= 200 && mouseY > 000 && mouseY <= 300) {
    fill(0, 0, 255);
    ellipse(mouseY,20, 40, 30,);
    
    fill(90,90,200)
    textSize(49)
    text('Wow isnt this very cool',100,200);
    
  }
  
  else if (mouseX > 200 && mouseX <= 400 && mouseY > 0 && mouseY <= 300) {
    fill(255, 0, 0);
    rect(mouseX-50, mouseY-20, 40, 40);

    fill(0,255,0)
    ellipse(mouseX+50, mouseY+20, 40, 40);
    
    fill('0,0,255')
    circle(mouseX+10, mouseY-50, 40, 40);
    textSize(50)
    text('Omg it move?..',100,200);
  }
  
  else if (mouseX > 400 && mouseX <= 600 && mouseY > 000 && mouseY <= 300) {
    fill(244, 255, 34);
    rect(mouseX, mouseY, 40, 40);
    textSize(50)
    text('Very cool drawing..',100,200);
    image(tree,300,300,200,200)
  }
    else if (mouseX > 0 && mouseX <= 200) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
      
      background(real);
      stroke(226, 204, 0);
  line(0, y, width, y);
textSize(50)
    text('Something a little off...',100,200);
  y++;
  if (y > height) {
    y = 0;
    }  
    }
      else if (mouseX > 0 && mouseX <= 400) {
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
        image(duck,300,300,200,200)
        textSize(50)
    text('Now thats a rich one',100,200);
      }
        else if (mouseX > 0 && mouseX <= 600) {
    fill(0, 255, 255);
    triangle(mouseX, mouseY, 400, 400, 500, 500);
          image(damn,100,200,300,300)
          
          fill(300,200,100)
          textSize(40)
    text('Is there even anything to say?',0,200);
    
    
    
    
    
    
    
    
  
  }
}







