var display = document.querySelector("canvas");
var pen = display.getContext('2d');

pen.fillStyle = 'lightgrey';
pen.fillRect(0, 0, 600, 400);

pen.fillStyle = 'green';
pen.fillRect(0, 0, 200, 400);

pen.fillStyle = 'red';
pen.fillRect(400, 0, 200, 400);

pen.fillStyle = 'yellow';
pen.beginPath();
pen.moveTo(300, 200);
pen.lineTo(200, 400);
pen.lineTo(400, 400);
pen.fill();


pen.fillStyle = 'blue';
pen.beginPath();
pen.arc(300, 200, 50, 0, 2 * 3.14);
pen.fill();
