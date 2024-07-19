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

let k;
for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - x; y++) {
        if (arr[y] > arr[y + 1]) {
            k = arr[y];
            arr[y] = arr[y + 1];
            arr[y + 1] = k;
        }
    }
}
document.write(arr);