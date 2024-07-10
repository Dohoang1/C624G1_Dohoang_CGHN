function submit() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let result = document.getElementById("result");

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                result.textContent = "Phương trình có vô số nghiệm.";
            } else {
                result.textContent = "Phương trình vô nghiệm.";
            }
        } else {
            let x = -c / b;
            result.textContent = "Phương trình có một nghiệm: x = " + x;
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            result.textContent = "Phương trình vô nghiệm.";
        } else if (delta === 0) {
            let x = -b / (2 * a);
            result.textContent = "Phương trình có nghiệm kép: x = " + x;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.textContent = "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
        }
    }
}