function checkAge() {
    let age= +document.getElementById('age').value;
    if (age > 0 && age < 120) {
        result.textContent = ('Đây là tuổi của một người!')
    } else
        result.textContent = ('Đây không phải là tuổi của một người!')
    }
