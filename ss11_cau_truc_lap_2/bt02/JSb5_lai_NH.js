function checkM() {
let money = +document.getElementById('money').value;
let month = +document.getElementById('month').value;
let rate = 0.06 / 12 ;
let interest;
let sum = 0;

for ( let i = 0 ; i < month ; i++ ) {
    interest = money * rate;
    money += interest;
    sum += interest;
}
result.textContent=("Số tiền cuối cùng là : " + money.toFixed(2))
resultI.textContent=("Tiền lãi là : " + sum.toFixed(2))
}