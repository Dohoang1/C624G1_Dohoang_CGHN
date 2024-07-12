let a= +document.getElementById('a').value;
let b= +document.getElementById('b').value;

function calA() {
    let a= +document.getElementById('a').value;
    let s = Math.pow(a,2);
    document.getElementById('resultA').innerHTML=(s);
}
function calB() {
    let a1= +document.getElementById('a').value;
    let b= +document.getElementById('b').value;
    let x = Math.pow(a1,b);
    document.getElementById('resultB').innerHTML=(x);
}