function checkA() {
    let age = document.getElementById('age').value;
    if (age < 15 || age >= 18) {
        result.textContent = ('Không đủ điều kiện vào học lớp 10')
    } else {
        result.textContent = ('Đủ điều kiện vào học lớp 10')
    }
}