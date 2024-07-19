let arr = [];
function addE() {

    let ele = document.getElementById('ele').value;
    if (!ele) {
        alert("vui long nhap phan tu")
    } else arr.push(ele);

    document.getElementById('ele').value = "";
    console.log(arr);
}
let count = 0;
function displayArr() {
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] < 0 ) {
            count++;
        }
    }
    document.getElementById('result').innerHTML=(count);
    count=0;
}