var display = document.querySelector("canvas");
var pen = display.getContext('2d');

pen.fillStyle = 'lightgrey';
pen.fillRect(0, 0, 600, 400);

pen.fillStyle = 'green';
pen.fillRect(0, 0, 200, 400);

pen.fillStyle = 'red';
pen.fillRect(400, 0, 200, 400);