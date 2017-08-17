var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var radius = (width < height ? width : height) / 2;

var radiusArray = [102, 39, 39, 43, 43, 46, 46];
var circleColorArray = ["#00f", "#555", "#eee", "#f00", "#0f0", "#fff", "#666"];

var cirleAngle = 2 * Math.PI;


console.log(radiusArray.length);
initRadiusArray();
drawCircle();
drawYear();

function initRadiusArray() {
    var baseRadius = 0;
    for (var i = 0; i < radiusArray.length; i++) {
        baseRadius += radiusArray[i];
        radiusArray[i] = baseRadius;
        console.log(radiusArray[i]);
    }
}

function drawCircle() {
    ctx.translate(width / 2, height / 2);
    ctx.clearRect(0, 0, width, height);
    for (var i = radiusArray.length - 1; i >= 0; i--) {
        ctx.beginPath();
        ctx.fillStyle = circleColorArray[i];
        ctx.arc(0, 0, radiusArray[i], 0, cirleAngle, false);
        ctx.fill();
    }
    var image = new Image();
    image.src = 'img/a1.png';
    image.onload = function () {
        ctx.drawImage(image, -42, -42, 84, 84);
        console.log("success");
    };
}

function drawYear() {
    var array = ["2017", "龙之日"];
    ctx.font="30px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    ctx.strokeStyle = "#f00";
    for (var i = 0; i < array.length; i++) {
        ctx.save();
        degree = cirleAngle / array.length * i;
        ctx.rotate(degree);
        ctx.strokeText(array[i], 0, -80);
        ctx.restore();
    }


}

function drawHour() {
    var hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    ctx.font="40px Arial";
    ctx.textAlign = "middle";


}




