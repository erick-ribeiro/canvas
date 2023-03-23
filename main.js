var display = document.querySelector("canvas");
var pen = display.getContext('2d');

// drawRect(0, 0, 'green');
// drawRect(50, 0, 'green');

var x = 0;

while(x < 600) {
    drawRect(x, 0, 'green');
    x += 50;
}

function drawRect(x, y, color){
    pen.fillStyle = color;
    pen.fillRect( x, y, 50, 50);
    pen.fillStroke = 'black'
    pen.strokeRect(x, y, 50, 50);
}