let arr = [];
function addE() {
    let eleM = document.getElementById("eleM").value;
    document.getElementById("eleM").value = "";
    arr.push(eleM);
    console.log(arr);
    document.getElementById('count').innerHTML=("Mang arr co: " + arr.length + " phan tu") ;
}
function checkA() {
    let countA = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || isNaN(arr[i])) {
        } else {
            countA++;
        }
    }
    document.getElementById('result').innerHTML=countA;
}