let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let basket = new Basket(
    canvas.width / 2 - 75,
    canvas.height - 30,
    150,
    20,
    10
);

let beer1 = new Beer(
    Math.random() * (canvas.width - 20),
    0,
    20,
    30,
    3,
    getRandomColor()
);

let score = new Score();

let isGameOver = false;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


function drawGameOver() {
    ctx.fillStyle = "#FF0000";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}

function update() {
    if (isGameOver) return;

    basket.update(canvas.width);

    for (let i = 1; i <= score.value / 5; i++) {
        beer1.dy = 3 + i;
    }

    if (
        beer1.y + beer1.height >= basket.y &&
        beer1.x + beer1.width >= basket.x &&
        beer1.x <= basket.x + basket.width
    ) {
        score.increase();
        beer1.resetBeer(Math.random() * (canvas.width - 20), 0, 3, getRandomColor());
    }

    if (beer1.y + beer1.height >= canvas.height) {
        isGameOver = true;
    }
}

function gameLoop() {
    drawBackground();
    basket.draw(ctx);
    beer1.draw();
    beer1.moveDown();
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