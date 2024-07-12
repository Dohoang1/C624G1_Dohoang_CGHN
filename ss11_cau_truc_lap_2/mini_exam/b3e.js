function checkTriangle() {
    let a = +(document.getElementById('sideA').value);
    let b = +(document.getElementById('sideB').value);
    let c = +(document.getElementById('sideC').value);
    let result = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Vui lòng nhập các số hợp lệ cho các cạnh.";
    } else {
        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            result = "Ba cạnh a, b, c tạo thành một tam giác.";

            if (a === b && b === c) {
                result += " Đây là một tam giác đều.";
            }
        } else {
            result = "Ba cạnh a, b, c không tạo thành một tam giác.";
        }
    }

    document.getElementById('result').textContent = (result);
}