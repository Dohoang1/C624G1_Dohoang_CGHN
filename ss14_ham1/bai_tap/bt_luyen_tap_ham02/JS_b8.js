let a = prompt("nhap vao 1 day so viet lien k dau");
let arrNum = a.split("");

function swapArr(array) {
    let j = array.length -1;
    let x ;
    for (let i = 0; i < j; i++, j--) {
            x = array[i];
            array[i] = array[j];
            array[j] = x;
    }
    return array;
}
let b = swapArr(arrNum);
console.log(b);