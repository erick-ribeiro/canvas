var display = document.querySelector("canvas");
var pen = display.getContext('2d');
let colorChose = document.querySelector('input');
let colorPen = ['green', 'red', 'blue'];
let iColor = 0;
let radius = 10;
let xRandom;
let yRandom;

// drawRect(0, 0, 'green');
// drawRect(50, 0, 'green');
display.onclick = draw;
display.oncontextmenu = changeColor;



setInterval(reloadScreen, 1000);


var x = 0;
while(x < 600) {
    // drawRect(x, 0, 'blue', 50, 50);
    x += 50;
}

function drawRect(x, y, color, width, height){
    pen.fillStyle = color;
    pen.fillRect( x, y, width, height);
    pen.fillStroke = 'black'
    pen.strokeRect(x, y, width, height);
}

function drawCirculo(x, y, r, color){
    pen.fillStyle = color;
    pen.beginPath();
    pen.arc(x, y, r, 0, 2 * Math.PI);
    pen.fill();
}

function drawTarget(x, y){
    drawCirculo(x,y, radius + 20, 'red');
    drawCirculo(x,y, radius + 10, 'white');
    drawCirculo(x,y, radius, 'red');
}

function randomTarget(max) {
    return Math.floor(Math.random() * max);
}

function cleenScreen(){
    pen.clearRect(0,0,600,400);
}

function reloadScreen(){
    cleenScreen();
    xRandom = randomTarget(600);
    yRandom = randomTarget(400);
    drawTarget(xRandom, yRandom);
}

function draw(event){
    var pageX = event.pageX - display.offsetLeft;
    var pageY = event.pageY - display.offsetTop;
    
    if((pageX > xRandom - radius)
    && (pageX < xRandom + radius)
    && (pageY > yRandom - radius)
    && (pageY < yRandom + radius)) {
        alert('Acertou!');
    }

    // pen.fillStyle = colorPen[iColor];
    pen.fillStyle = colorChose.value;
    pen.beginPath();
    if (event.shiftKey) {
       radius *= 5;
    };
    if (event.ctrlKey) {
        radius /= 5;
    }
    pen.arc(pageX, pageY, radius, 0, 2 * 3.14);
    pen.fill();

    if ((pageX > 300 - radius) &&
        (pageX < 300 + radius) &&
        (pageY > 200 - radius) &&
        (pageY < 200 + radius)) {
        alert('Acertou no centro do alvo');
    }

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

function upPen(){

}