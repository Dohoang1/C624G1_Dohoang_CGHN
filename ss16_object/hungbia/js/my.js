class Game {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.beers = [];
        this.catcher = new Basket(this.canvas.width / 2 - 25, this.canvas.height - 30, 50, 20, 15, 'blue');
        this.score = new Score();
        this.initialBeerCount = 1;
        this.spawnInitialBeers();
        this.update();
    }

    spawnBeer() {
        const x = Math.random() * (this.canvas.width - 30);
        const beer = new Beer(x, 0, 30, 30, 1, 'brown');
        this.beers.push(beer);
    }

    spawnInitialBeers() {
        for (let i = 0; i < this.initialBeerCount; i++) {
            this.spawnBeer();
        }
    }

    update() {
        this.clear();
        this.catcher.draw();
        for (let i = 0; i < this.beers.length; i++) {
            const beer = this.beers[i];
            beer.move();
            if (this.checkCollision(beer, this.catcher)) {
                this.beers.splice(i, 1);
                this.score.increment();
                if (this.score.score % 10 === 0) {
                    this.spawnBeer();
                }
            } else if (beer.y + beer.height > this.canvas.height) {
                this.endGame();
                return;
            }
        }
        if (Math.random() < 0.02) {
            this.spawnBeer();
        }
        requestAnimationFrame(this.update.bind(this));
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkCollision(beer, catcher) {
        return (
            beer.x < catcher.x + catcher.width &&
            beer.x + beer.width > catcher.x &&
            beer.y < catcher.y + catcher.height &&
            beer.y + beer.height > catcher.y
        );
    }

    endGame() {
        alert(`Game Over! Final Score: ${this.score.score}`);
        document.location.reload();
    }
}

const game = new Game();