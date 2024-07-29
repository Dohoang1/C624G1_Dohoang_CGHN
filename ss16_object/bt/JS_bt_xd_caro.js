const canvas = document.getElementById('caroCanvas');
const ctx = canvas.getContext('2d');
const SIZE = 20;
const ROWS = 40;
const COLS = 40;
const board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
let currentPlayer = 'X';
let gameOver = false;

function drawBoard() {
    for (let i = 0; i <= ROWS; i++) {
        ctx.moveTo(i * SIZE, 0);
        ctx.lineTo(i * SIZE, ROWS * SIZE);
    }
    for (let j = 0; j <= COLS; j++) {
        ctx.moveTo(0, j * SIZE);
        ctx.lineTo(COLS * SIZE, j * SIZE);
    }
    ctx.stroke();
}

function drawX(x, y) {
    ctx.beginPath();
    ctx.moveTo(x * SIZE, y * SIZE);
    ctx.lineTo((x + 1) * SIZE, (y + 1) * SIZE);
    ctx.moveTo((x + 1) * SIZE, y * SIZE);
    ctx.lineTo(x * SIZE, (y + 1) * SIZE);
    ctx.stroke();
}

function drawO(x, y) {
    ctx.beginPath();
    ctx.arc(x * SIZE + SIZE / 2, y * SIZE + SIZE / 2, SIZE / 2, 0, 2 * Math.PI);
    ctx.stroke();
}

function checkWinner(player) {
    function checkDirection(startX, startY, dx, dy) {
        let count = 0;
        for (let i = 0; i < 5; i++) {
            const x = startX + i * dx;
            const y = startY + i * dy;
            if (x < 0 || y < 0 || x >= COLS || y >= ROWS || board[y][x] !== player) {
                return false;
            }
            count++;
        }
        return count === 5;
    }

    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            if (board[y][x] === player) {
                if (
                    checkDirection(x, y, 1, 0) ||
                    checkDirection(x, y, 0, 1) ||
                    checkDirection(x, y, 1, 1) ||
                    checkDirection(x, y, 1, -1)
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

canvas.addEventListener('click', (e) => {
    if (gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / SIZE);
    const y = Math.floor((e.clientY - rect.top) / SIZE);

    if (board[y][x] === null) {
        board[y][x] = currentPlayer;
        if (currentPlayer === 'X') {
            drawX(x, y);
        } else {
            drawO(x, y);
        }

        if (checkWinner(currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
});

drawBoard();