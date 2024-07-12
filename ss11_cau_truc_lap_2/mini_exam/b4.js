function checkN() {
    let n = +document.getElementById('n').value;
    let result="Là số nguyên tố";
    if (n <= 1) {
        result = "Không phải số nguyên tố";
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = "Không phải số nguyên tố";
            }
        }
    }
 document.getElementById('result').innerHTML=result;
}