let blob



function setup() {
  createCanvas(windowWidth, windowHeight)
  blob = new Blobbo()

}

function draw() {
  // background(253, 171, 159, 100)
    background(242, 219, 222)



  stroke(200, 0, 0, 8);
  strokeWeight(25)
  
  for(var x=0; x <= width; x+=50) {
    for(var y=0; y <= height; y+=50)  {
    line(x, 0, x, height);
    line(0, y, width, y);      }
  }






  noStroke();


  blob.draw()
}