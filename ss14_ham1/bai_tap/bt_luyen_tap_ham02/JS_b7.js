
function swapNum(num1, num2) {
    [a, b] = [b, a];
    return [a, b];
}
let a = prompt();
let b = prompt();

swapNum(a,b);

console.log(a);
console.log(b);