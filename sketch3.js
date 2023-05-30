function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
//Create a variable and set it to zero
let puck_x=0 ;
let puck_y=0;

//This is the Setup Function which runs once
function setup() {
  createCanvas(windowWidth, windowHeight);

  //load the background image
  bgimg = loadImage('back.jpeg');
  // load the other images
  img1 = loadImage('sii.png');
  img2 = loadImage('three.png');
  img3 = loadImage('milk.png');
}


//This is the draw function which runs at 60 Hz
function draw() {

  //Draw the background image
  image(bgimg, 0, 0, width, height);
  
  //Draw the green jersey
  image(img1, 50, 400, 100, 100);

  //Draw the white jersey
  image(img2, 700, 100, 100, 100);

  //Draw the puck with a puck_x variable which moves it
  image(img3, 100 + puck_x, 400+ puck_y, 250, 250);
  
  //Increase the puck_x value 
  puck_x = puck_x + 1;
  puck_y = puck_y + -1;
  
  //Use this to show the coordinates of the pointer
  noStroke()
  fill('black');
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  
}