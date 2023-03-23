var display = document.querySelector("canvas");
var pen = display.getContext('2d');

pen.fillStyle = 'green';
pen.fillRect(0, 0, 600, 400);

pen.fillStyle = 'yellow';
pen.beginPath();
pen.moveTo(300,45);
pen.lineTo(45, 200);
pen.lineTo(300, 355);
pen.lineTo(555, 200);
pen.fill();


pen.fillStyle = 'darkblue';
pen.beginPath();
pen.arc(300, 200, 80, 0, 2 * 3.14);
pen.fill();