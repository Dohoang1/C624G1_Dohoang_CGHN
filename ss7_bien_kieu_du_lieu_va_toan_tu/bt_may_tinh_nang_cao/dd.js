function submit() {
let year = +document.getElementById('year').value;
let month = +document.getElementById('month').value;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        alert('thang co 31 ngay')
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        alert('thang co 30 ngay')
    } else if (month == 2)
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            alert('thang co 29 ngay')
        } else alert('thang co 28 ngay')
}