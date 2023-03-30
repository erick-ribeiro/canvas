var display = document.querySelector("canvas");
var pen = display.getContext('2d');
var x = 20;
var colid = false;
var sense = 1;

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

function drawPlayer(x, y){
    pen.fillStyle = 'green';
    pen.fillRect(x, y, 100, 100);
}

function cleenScreen(){
    pen.clearRect(0,0,600,400);
}

function reloadScreen(xPlayer, yPlayer){
    cleenScreen();

    drawBall(x, 20, 10);

    // console.log(x);
    
    if (x > 595) {
        sense = -1;
    } else if (x < 5) {
        sense = 1;
    }

    x = x + sense
    
}
