let a = prompt("hay nhap vao mot day ky tu viet lien");
let b = prompt("hay nhap vao 1 ky tu");
let arr = a.split("");

function checkA(x,array) {
    let count = -1;
    for (let i = 0; i < array.length; i++) {
        if (x === array[i]) {
            count++;
        }
    }
    if (count !== -1) {
        return count + 1;
    } else {
        return count;
    }
}

let c = checkA(b,arr);
console.log(c);