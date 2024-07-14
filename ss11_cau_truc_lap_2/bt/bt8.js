function playG() {
    let max = +prompt('Hãy nhập số lớn nhất để giới hạn trò chơi!')
    rdn = Math.floor(Math.random() * max) + 1;
    let att = 0;
    while (att < 3) {
        let guess = +prompt("Nhập số bạn đoán (lần " + (att + 1) + "):" );
        att++;
        if (guess === rdn) {
            alert("Chúc mừng! Bạn đã đoán đúng số!");
            break;
        } else if (guess > rdn) {
            alert("Số bạn đoán lớn hơn số ngẫu nhiên. Hãy thử lại.");
        } else {
            alert("Số bạn đoán bé hơn số ngẫu nhiên. Hãy thử lại.");
        }
        if (att === 3) {
            alert("Bạn đã hết lượt đoán. Số đúng là: " + rdn);
        }
        }
}