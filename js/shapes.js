let x = 0; y = 0;
const vel = 1;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background (0);
    stroke ("white");
    noFill();
    rect(x, y, 100, 100);
    x += vel;
    y += vel;
    if (x > width) {
        x = 0;
    }
    if (y > height) {
        y = 0;
    }   
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
