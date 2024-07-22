let arr = [];
let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");
arr.push(a, b, c);
console.log(arr);

function smallest(number) {

    let min = arr[0];
    for (i = 0; i < arr.length; ++i) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

let x = smallest(a,b,c);
console.log(x);
