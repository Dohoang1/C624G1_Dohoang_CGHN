function confirm() {
    let month= +document.getElementById('month').value;
    switch (month) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            result.textContent = ('Tháng này có 31 ngày');
            break;
        case 4 :
        case 6 :
        case 9 :
        case 1 :
            result.textContent = ('Tháng này có 30 ngày');
            break;
        case 2 :
            result.textContent = ('Tháng này có 28 hoặc 29 ngày')
            break;
        default:
            result.textContent = ('Không hợp lệ');
            break;
    }

}