let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let basket = {
    width: 100,
    height: 20,
    x : canvas.width / 2,
    y : canvas.height,
    dx : 10,
    movingLeft : false,
    movingRight: false
};

let beer = {
    x : Math.random() * (canvas.width - this.width),
    y : 0,
    width: 20,
    height: 30,
    dy : 3,
}

let score = 0;
let isGameOver = false;

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 37) {
        basket.movingLeft = true;
    } else if (e.keyCode === 39) {
        basket.movingRight = true;
    }
});
document.addEventListener("keyup", (e) => {
    if(e.keyCode === 37) {
        basket.movingLeft = false;
    } else if (e.keyCode === 39) {
        basket.movingRight = false;
    }
})

function getRandomColor() {
    let list = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += list[Math.floor(Math.random() * list.length)];
    }
    return color;
}

function drawBackground() {
    let gradientBG = ctx.createLinearGradient(0,0,0,canvas.height);
    gradientBG.addColorStop(0,getRandomColor());
    gradientBG.addColorStop(1,getRandomColor());
    ctx.fillStyle = gradientBG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBasket() {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
}

function drawBeer() {
    let gradientBeer = ctx.createLinearGradient(0,0,0,beer.height);
    gradientBeer.addColorStop(0,getRandomColor());
    gradientBeer.addColorStop(1,getRandomColor());
    ctx.fillStyle = gradientBeer;
    ctx.fillRect(0, 0, beer.width, beer.height);
}

function drawScore() {
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 20, 30);
}

function drawGameOver() {
    ctx.fillStyle = "#FF0000";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}

function resetBeer() {
    beer.x = Math.random() * (canvas.width - beer.width)
    beer.y = 0;
    beer.dy = 3;
}

function gameOperator() {
    if (isGameOver) return;

    if (basket.movingLeft) {
        basket.x -= basket.dx;
    }
    if (basket.movingRight) {
        basket.x += basket.dx;
    }
    for (let i = 1; i <= score / 5; i++) {
        beer.dy += i;
    }
    if (beer.y + beer.height >= basket.y && beer.x + beer.width >= basket.x && beer.x <= basket.x + basket.width) {
        score++;
        resetBeer();
    }

    if (beer.y + beer.height >= basket.y) {
        isGameOver = true;
    }
}

function gameRun() {
    drawBackground();
    drawBasket();
    drawBeer();
    drawScore()

    let img = document.getElementById("avt");

    if (isGameOver) {
        img.src = "frog2.jfif"
        drawGameOver();
    } else {
        if (score >=10) img.src = "imgs/frog4.jpg"
        if (score >=20) img.src = "imgs/frog5.jpg"
        if (score >=30) img.src = "imgs/frog6.jpg"
        if (score >=40) img.src = "imgs/frog7.jpg"
        gameOperator();
        requestAnimationFrame(gameRun);
    }

}

requestAnimationFrame(gameRun);
