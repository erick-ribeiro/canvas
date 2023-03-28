var display = document.querySelector("canvas");
var pen = display.getContext('2d');
var x = 20;

pen.fillStyle = 'lightGray';
pen.fillRect(0, 0, 600, 400);

// drawBall(20,20,10);
setInterval(reloadScreen, 10);

function drawBall(x, y, radius){
    pen.fillStyle = 'blue';
    pen.beginPath();
    pen.arc(x, y, radius, 0, 2 * Math.PI);
    pen.fill();
}

function cleenScreen(){
    pen.clearRect(0,0,600,400);
}

function reloadScreen(){
    cleenScreen();
    drawBall(x, 20, 10);
    x++;
}
