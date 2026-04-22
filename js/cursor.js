let size = 50; 
let x = 0, y = 0, friction = 0.5;
let fill_color = "orange";
let stroke_color = "white";

function setup() {
    // esto hace el canvas del tamaño de la pantalla 
    createCanvas(windowWidth, windowHeight);
    // pinta el fondo 
    background(18, 10, 184);
    frameRate(64);
}


function draw() {
    background(18, 10, 184, 50); 
    updateCursor();
}

function updateCursor() {
    //
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    //
    noStroke();
    fill(fill_color);
    ellipse(x, y, size, size);
}