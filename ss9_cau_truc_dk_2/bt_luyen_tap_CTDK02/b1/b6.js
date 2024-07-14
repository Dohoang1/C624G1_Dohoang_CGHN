function calculate() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    if (a === 0) {
        if (b === 0) {
            result.textContent=("Phương trình có vô số nghiệm");
        } else {
            result.textContent=("Phương trình vô nghiệm");
        }
    } else {
        let x = -b / a;
        result.textContent=(`Phương trình có nghiệm x = ${x}`);
    }
}