// debugger
let a;
let arr =[];
for (let i = 0; i < 10; i++) {
     a = +prompt('Vui long nhap so lan :' + (i + 1));
    if ( !a || isNaN(a) ) {
        alert('Vui long nhap theo yeu cau!')
        i--;
    } else {
        arr.push(a);
    }
}
console.log(arr);

let v = +prompt("vui long nhap V" );
let index = -1;
for ( let j = 0; j < arr.length; j++) {
    if (v === arr[j]) {
        index = j;
    }
}
if (index !== -1) {
    alert("V is in the array, index: " + index)
} else {
    alert("V is not in the array");
}