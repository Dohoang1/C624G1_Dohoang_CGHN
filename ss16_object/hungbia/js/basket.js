
class Basket {
    constructor(x, y, width, height, dx, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.color = color;
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.initEventListeners();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveLeft() {
        this.x -= this.dx;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    moveRight() {
        this.x += this.dx;
        if (this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    initEventListeners() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.moveLeft();
            } else if (event.key === "ArrowRight") {
                this.moveRight();
            }
        });
    }
}