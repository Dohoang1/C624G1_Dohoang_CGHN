let canvas = document.getElementById('gameCanvas');

let beer1 = new Beer (Math.random()*canvas.width - 20 , 0, 20, 30, 3, "red");

console.log(beer1);

requestAnimationFrame(beer1.move);