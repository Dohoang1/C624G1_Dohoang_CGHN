let x = [4,22, 64, 34, 54, 77, 11, 33, 31, 95, 1, 32];

let max = x[0];
let index = 0;

for (let i = 0 ; i <x.length ; i++) {
    if (x[i] > max) {
        max = x[i];
        index = i ;
    }
}
alert(max + " at index: " + index);