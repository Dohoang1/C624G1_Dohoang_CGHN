function checkAB() {
    let a = document.getElementById('txtA').value;
    let b = document.getElementById('txtB').value;
    if (a === b) {
        document.getElementById('result').innerHTML=("Giong nhau");
    } else {
        document.getElementById('result').innerHTML=("Khac nhau");
    }
}