let size = 50; 
let x = 0, y = 0, friction = 0.5;
let fill_color = "pink";
let stroke_color = "white";

function setup() {
    // esto hace el canvas del tamaño de la pantalla 
    createCanvas(windowWidth, windowHeight);
    // pinta el fondo 
    background(0, 35);
    frameRate(64);
}


function draw() {
    background(0, 35); 
    updateCursor();
}

function updateCursor() {
     fill(fill_color);
    noStroke();
    //
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    rect(x, y, size, size);
}