class Score {
    constructor() {
        this.score = 0;
        this.scoreElement = document.getElementById("score");
    }

    increment() {
        this.score += 1;
        this.updateDisplay();
    }

    updateDisplay() {
        this.scoreElement.innerText = `Score: ${this.score}`;
    }

    reset() {
        this.score = 0;
        this.updateDisplay();
    }
}