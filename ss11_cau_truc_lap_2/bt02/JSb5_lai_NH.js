function checkM() {
let money = +document.getElementById('money').value;
let month = +document.getElementById('month').value;
let rate = 0.06;
let period = month / 12;
let monthlyrate = rate / 12;
let amount = money * Math.pow(1 + monthlyrate, period * 12);
let interestA = amount - money;
result.textContent = ("Số tiền cuối cùng là : " + amount.toFixed(2) + "VNĐ");
interest.textContent = ("Tền lãi : " + interestA.toFixed(2) + "VNĐ");
}