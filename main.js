var display = document.querySelector("canvas");
var pen = display.getContext('2d');
let colorPen = ['green', 'red', 'blue'];
let iColor = 0;

// drawRect(0, 0, 'green');
// drawRect(50, 0, 'green');
display.onclick = draw;
display.oncontextmenu = changeColor;


var x = 0;
while(x < 600) {
    drawRect(x, 0, 'blue');
    x += 50;
}

function drawRect(x, y, color){
    pen.fillStyle = color;
    pen.fillRect( x, y, 50, 50);
    pen.fillStroke = 'black'
    pen.strokeRect(x, y, 50, 50);
}

function draw(event){
    var pageX = event.pageX - display.offsetLeft;
    var pageY = event.pageY - display.offsetTop;

    pen.fillStyle = colorPen[iColor];
    pen.beginPath();
    pen.arc(pageX, pageY, 10, 0, 2 * 3.14);
    pen.fill();

    // alert(pageX + ', ' + pageY);
    console.log(event);
}

function changeColor(){
    iColor ++
    if (iColor >= colorPen.length){
        iColor = 0
    }
    console.log(iColor)
    return false;
    
}