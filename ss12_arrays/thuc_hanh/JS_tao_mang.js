let x = 0;
let array = [];

function addE() {
    array[x] = document.getElementById('txtValue').value;
    alert("Đã thêm " + array[x]);
    x++;
    document.getElementById('txtValue').value = "";
}

function disA() {
    let e = "<hr/>";
    for (let i = 0 ; i < array.length; i++) {
        e +="At " + i + " = " + array[i] + "<hr/>";
    }
document.getElementById("result").innerHTML= e ;
}

