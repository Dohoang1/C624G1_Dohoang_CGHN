function checkY() {
    const yearInput = +document.getElementById('yearInput').value;
    const year = +(yearInput);
    if (isNaN(year) || year <= 0) {
        document.getElementById('result').textContent = "Vui lòng nhập một năm hợp lệ.";
    } else {
        let century = Math.ceil(year / 100);
        document.getElementById('result').textContent = `Năm ${year} thuộc thế kỷ ${century}.`;
    }
}