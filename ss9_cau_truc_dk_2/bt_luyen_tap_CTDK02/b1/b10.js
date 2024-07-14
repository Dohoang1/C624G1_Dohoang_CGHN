function checkFee() {
    let kWh = +document.getElementById("kWh").value;
    let x;
    if (kWh < 0) {
        alert("Vui lòng nhập số điện hợp lệ")
    } else if (kWh <=50) {
        x = kWh * 1806;
    } else if (kWh <= 100) {
        x = (kWh - 50) * 1866 + 50 * 1806;
    } else if (kWh <= 200) {
        x = (kWh - 100) * 2167 + 50 * 1866 + 50 * 1806;
    } else if (kWh <= 300) {
        x = (kWh - 200) * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    } else if (kWh <= 400) {
        x = (kWh - 300) * 3050 + 100 * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    } else {
        x = (kWh - 400) * 3151 + 100 * 3050 + 100 * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    }
    result.textContent=x + " vnđ";
}