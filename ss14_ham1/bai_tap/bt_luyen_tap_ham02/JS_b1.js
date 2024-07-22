function calculate() {
    let num= +document.getElementById('num').value;
    let b = num * num;
    document.getElementById('result').innerHTML =`la: ${b}`;
}