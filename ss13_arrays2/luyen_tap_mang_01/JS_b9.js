let a;
let arrA =[];
for (let i = 0; i < 10; i++) {
    a = +prompt('Vui long nhap vao mang A 10 so, so lan :' + (i + 1));
    if ( !a || isNaN(a) ) {
        alert('Vui long nhap theo yeu cau!')
        i--;
    } else {
        arrA.push(a);
    }
}
console.log(arrA);

let b;
let arrB =[];
for (let i = 0; i < 10; i++) {
    b = +prompt('Vui long nhap vao mang B 10 so, so lan :' + (i + 1));
    if ( !b || isNaN(b) ) {
        alert('Vui long nhap theo yeu cau!')
        i--;
    } else {
        arrB.push(b);
    }
}
console.log(arrB);

let arrC = arrB.concat(arrA);
console.log(arrC);
document.write(arrC);