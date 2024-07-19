let arr=[];
function addE() {
    let eleM = document.getElementById("eleM").value;
    arr.push(eleM);
    console.log(arr);
    document.getElementById("eleM").value="";
}
function checkA() {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || isNaN(arr[i])) {
        } else {
            count++;
        }
    }
    document.getElementById('result').innerHTML=count;
}