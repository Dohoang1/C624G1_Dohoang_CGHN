function translateT() {
    let text = document.getElementById('txtValue').value;
    let eng = ["banana", "apple", "lemon", "coconut"];
    let vn = ["chuối", "táo", "chanh", "dừa"];

    for (let x = 0 ; x <eng.length; x++) {
        if (text === eng[x]) {
            result.textContent = vn[x];
        } else result.textContent = "khong tim thay";
    }

}