function checkA()
{
    let number = document.getElementById('numberA').value;

    if (number==0) {
        result.textContent=('Đây là số 0')
    } else if (number > 0) {
        result.textContent=('Đây là số dương')
    } else if (number < 0) {
        result.textContent=('Đây là số âm')
    }
}