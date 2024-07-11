function calculate() {
    let money = +document.getElementById('money').value;
    let result = 0;
    if (money >= 100000) {
     result = money * 0.1;
    } else if (money >=50000) {
         result = money * 0.07;
    } else if (money >=30000) {
         result = money * 0.05;
    } else  result = money * 0.03;
    document.getElementById('result').innerHTML = (result + "$");
}

