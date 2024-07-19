// debugger
let a;
let arr =[];
for (let i = 0; i < 10; i++) {
    a = +prompt('Vui long nhap so 10 lan, so lan :' + (i + 1));
    if ( !a || isNaN(a) ) {
        alert('Vui long nhap theo yeu cau!')
        i--;
    } else {
        arr.push(a);
    }
}
console.log(arr);

let v = +prompt("vui long nhap V" );
for ( let j = 0; j < arr.length; j++) {
    if (v === arr[j]) {
        arr.splice( j, 1);
        arr.push("0");
    }
}
document.write(arr);
