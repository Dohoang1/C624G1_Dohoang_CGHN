function submit(){
    let number= +document.getElementById('number').value;
    switch (number) {
        case 0 : result.textContent = 'số Không'; break;
        case 1 : result.textContent = 'số Một'; break;
        case 2 : result.textContent = 'số Hai'; break;
        case 3 : result.textContent = 'số Ba'; break;
        case 4 : result.textContent = 'số Bốn'; break;
        case 5 : result.textContent = 'số Năm'; break;
        case 6 : result.textContent = 'số Sáu'; break;
        case 7 : result.textContent = 'số Bảy'; break;
        case 8 : result.textContent = 'số Tám'; break;
        case 9 : result.textContent = 'số Chín'; break;
        case 10 : result.textContent = 'số Mười'; break;
        default : result.textContent = 'Vui lòng nhập số theo yêu cầu'; break;
    }

}