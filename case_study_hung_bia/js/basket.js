class Basket {
    constructor(x, y, width, height, dx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.movingLeft = false;
        this.movingRight = false;
    }

    draw(ctx) {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(canvasWidth) {
        if (this.movingLeft) {
            this.x -= this.dx;
            if (this.x < 0) this.x = 0;
        }
        if (this.movingRight) {
            this.x += this.dx;
            if (this.x + this.width > canvasWidth) this.x = canvasWidth - this.width;
        }
    }
}