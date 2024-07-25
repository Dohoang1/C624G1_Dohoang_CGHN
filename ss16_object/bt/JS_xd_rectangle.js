window.onload = function() {
    let myRectangle = function (width, height) {
        this.width = width;
        this.height = height;
        this.getArea = function () {
            return width * height;
        }
        this.getPerimeter = function () {
            return (width + height) * 2;
        }
        this.drawRectangle = function (x, y) {
            let canvas = document.getElementById("myCanvas");
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = "red";
            ctx.fillRect(x, y, this.width * 10, this.height * 10);
        }
    }

    let a = +prompt("Nhập chiều rộng:");
    let b = +prompt("Nhập chiều cao:");

    let rect = new myRectangle(a, b);
    console.log(rect.getArea());
    console.log(rect.getPerimeter());

    rect.drawRectangle(50, 50);
}