function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.floor(Math.random() * 1368);
    let y = Math.floor(Math.random() * 768);
    let dx = (Math.random() -0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    let circle= new Circle(x, y, radius, dx, dy);
    circle.color = color;
    return circle;
}
function drawCircle (ctx, circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
}

function updateCircle(circle, canvas) {
    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        circle.dx = -circle.dx;
    }
    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        circle.dy = -circle.dy;
    }
    circle.x += circle.dx;
    circle.y += circle.dy;
}

function animateCircles(circles, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        updateCircle(circle, canvas);
        drawCircle(ctx, circle);
    });
    requestAnimationFrame(() => animateCircles(circles, ctx, canvas));
}

function CreatMulCircle(num) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let circles = [];
    for (let i = 0; i < num; i++) {
        circles.push(createCircle());
    }
    animateCircles(circles, ctx, canvas);
}
let a = prompt("tao hinh tron")
CreatMulCircle(a);