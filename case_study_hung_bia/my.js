
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let basket = new Basket(canvas.width / 2 - 50, canvas.height - 30, 150, 20, 10);
let score = new Score();
let background = new Background(getRandomColor(),"white");
let isGameOver = false;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

let beers = [
    new Beer(Math.random() * (canvas.width - 20), 0, 20, 30, 3, getRandomColor())
];

function drawGameOver() {
    ctx.fillStyle = "#FF0000";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}

function update() {
    if (isGameOver) return;

    basket.update(canvas.width);

    beers.forEach((beer, index) => {
        beer.moveDown();

        Math.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        if (
            beer.y + beer.height >= basket.y &&
            beer.x + beer.width >= basket.x &&
            beer.x <= basket.x + basket.width
        ) {
            score.increase();
            beer.resetBeer(Math.random() * (canvas.width - 20), Math.randomInt(-600,-200), 3, getRandomColor());

            if (score.value % 10 === 0) {
                beers.push(new Beer(Math.random() * (canvas.width - 20), Math.randomInt(-1400,-600), 20, 30, 3, getRandomColor()));
            }
        }

        if (beer.y + beer.height >= canvas.height) {
            isGameOver = true;
        }
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    basket.draw(ctx);
    beers.forEach(beer => beer.draw(ctx));
    score.draw(ctx);

    let img = document.getElementById("frog");

    if (isGameOver) {
        img.src = "imgs/frog2.jfif";
        drawGameOver();
    } else {
        if (score.value >= 10) img.src = "imgs/frog4.jpg";
        if (score.value >= 20) img.src = "imgs/frog5.jpg";
        if (score.value >= 30) img.src = "imgs/frog6.jpg";
        if (score.value >= 40) img.src = "imgs/frog7.jpg";
        update();
        requestAnimationFrame(gameLoop);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        basket.movingLeft = true;
    } else if (event.keyCode === 39) {
        basket.movingRight = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode === 37) {
        basket.movingLeft = false;
    } else if (event.keyCode === 39) {
        basket.movingRight = false;
    }
});

requestAnimationFrame(gameLoop);