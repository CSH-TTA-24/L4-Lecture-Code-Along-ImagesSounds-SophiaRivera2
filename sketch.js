let xPos= 25;

let direction= 1;
let img;
let Pokemonsound;


function preload() {
  image = loadImage(images/)
  Pokemonsound = loadSound("/sound/Pokemonsound.mp3")

}
function setup() {
  createCanvas(500, 500);
  noStroke();
  imageMode(CENTER)
  rectMode(CENTER);
}

function draw() {
  fill(0, 255,0 )
 ellipse(xPos, 250, 50, 50)
  background(0);

  Image(img, xPos, 250, 50, 50)

  xPos += 3* direction;
  if (xPos > 475 || xPos < 25){
    direction *= -1;
    Pokemonsound.play()
  }
}
