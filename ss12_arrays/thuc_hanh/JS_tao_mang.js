let x = 0;
let array = Array();
function addEle() {
    array[x] = document.getElementById('txtValue').value;
    alert("Element: " +array[x] + " added at index " + x);
    x++;
    document.getElementById('txtValue').value = "";
}
function dis() {
    let e = "<hr/>";
    for (let i = 0 ; i <array.length ; i++) {
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}