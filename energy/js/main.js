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
drawMonth();
drawDay();
dayWeek();

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
    ctx.font="26px SimHei";
    ctx.fillStyle = "#f00";
    var offsetY = 70;
    drawCircleText(ctx, array, offsetY);
}

function drawMonth() {
    var hourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    ctx.font="26px SimHei";
    ctx.fillStyle = "#f00";
    var offsetY = radiusArray[1] - (radiusArray[1] - radiusArray[0]) / 2;
    drawCircleText(ctx, hourArray, offsetY);
}

function drawDay() {
    var dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    // for (var day = 1; day < 31; day++) {
    //     dayArray[day] = day;
    // }
    ctx.font="20px SimHei";
    ctx.fillStyle = "#f00";
    var offsetY = radiusArray[2] - (radiusArray[2] - radiusArray[1]) / 2;
    drawCircleText(ctx, dayArray, offsetY);

}

function dayWeek() {
    var weekArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    ctx.font="26px SimHei";
    ctx.fillStyle = "#000";
    var offsetY = radiusArray[3] - (radiusArray[3] - radiusArray[2]) / 2;
    drawCircleText(ctx, weekArray, offsetY);
}

function () {
    
}

function drawCircleText(ctx, textArray, radius) {

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (var i = 0; i < textArray.length; i++) {
        ctx.save();
        var degree = (cirleAngle / textArray.length * i) - Math.PI / 2;
        var y = Math.sin(degree) * radius;
        var x = Math.cos(degree) * radius;
        ctx.fillText(textArray[i].toString(), x, y);
        ctx.restore();
    }
}




