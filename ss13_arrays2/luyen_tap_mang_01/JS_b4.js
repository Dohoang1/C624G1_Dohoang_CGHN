
let arr = [];
function addE() {

    let ele = document.getElementById('ele').value;
    if (!ele) {
        alert("vui long nhap phan tu")
    } else arr.push(ele);

    document.getElementById('ele').value = "";
    console.log(arr);
}
function displayArr() {
    let b ;
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        b = arr[last];
        arr[last] = arr[first];
        arr[first] = b;
        first++;
        last--;
    }
    document.getElementById('result').innerHTML=(arr);
    }
