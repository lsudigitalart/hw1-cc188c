function setup() {
    createCanvas(400, 800);
}

function draw() {
    background(200);
    fill(0, 0, 0);
    ellipse(200, 400, 200, 400);
    fill(255, 255, 255);
    ellipse(200, 400, 160, 300)
    fill(0, 0, 0);
    ellipse(200, 200, 200, 200);
    fill(255, 255, 255);
    ellipse(150, 194, 25, 40);
    ellipse(250, 194, 25, 40);
    fill(0, 0, 0);
    ellipse(250, 200, 25, 25);
    ellipse(150, 200, 25, 25);
    fill(255, 255, 255);
    ellipse(255, 195, 15, 15);
    ellipse(155, 195, 15, 15);
    fill(225, 165, 0);
    ellipse(200, 230, 50, 25);
    ellipse(200, 230, -50, 20);
    fill(255, 192, 203);
    ellipse(150, 215, 50, 10);
    ellipse(250, 215, 50, 10);
    fill(0, 0, 0);
    push()
    rotate(QUARTER_PI / 2)
    ellipse(220, 350, 50, 270);
    pop()
    push()
    rotate(QUARTER_PI / -2)
    ellipse(150, 500, 50, 270);
    pop()
    fill(225, 165, 0);
    ellipse(150, 590, 80, 30)
    ellipse(255, 590, 80, 30)


    

}
