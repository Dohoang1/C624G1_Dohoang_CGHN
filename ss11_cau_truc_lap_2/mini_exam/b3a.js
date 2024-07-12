function calculate() {
    let a = +document.getElementById('a').value;
    let s = a * a;
    let p = a * 4;
    document.getElementById('resultA').innerHTML = (s + " cm2");
    document.getElementById('resultB').innerHTML = (p + " cm");

    let square = '';
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            square += '*';
        }
        square += '\n';
    }
    document.getElementById('square').textContent = square;
}


