class Beer {
    constructor(x, y, width, height, dy, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dy = dy;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    moveDown() {
        this.y += this.dy;
    }

    resetBeer(x, y, dy, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.color = color;
    }
}