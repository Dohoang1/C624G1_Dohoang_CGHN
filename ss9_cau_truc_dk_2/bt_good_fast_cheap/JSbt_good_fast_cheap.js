function checkA() {
    let good = document.getElementById('good').value;
    let fast = document.getElementById('fast').value;
    let cheap = document.getElementById('cheap').value;
    if (good.checked &&  fast.checked && cheap.checked) {
        if (good.checked && cheap.checked) {
            fast.checked = fasle;
        }
    }

}