debugger
function swapNum(num1, num2) {
    let x =  num1 ;
    num1 = num2;
    num2 = x ;
}

let a = prompt();
let b = prompt();

swapNum(a,b);

console.log(a);
console.log(b);