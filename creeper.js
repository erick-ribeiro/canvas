var display = document.querySelector("canvas");
var pen = display.getContext('2d');

pen.fillStyle = 'darkgreen';
pen.fillRect(0, 0, 500, 500);

pen.fillStyle = 'black';
pen.fillRect(70, 50, 130, 120);

pen.fillStyle = 'black';
pen.fillRect(300, 50, 130, 120);

pen.fillStyle = 'black';
pen.fillRect(200, 170, 100, 160);

pen.fillStyle = 'black';
pen.fillRect(150, 260, 50, 160);

pen.fillStyle = 'black';
pen.fillRect(300, 260, 50, 160);