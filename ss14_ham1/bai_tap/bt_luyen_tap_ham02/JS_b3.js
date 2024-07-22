let a = prompt("tinh giai thua cho so")

function factorial(num) {
    let sum = num;
   for ( i = 1 ; i < num ; i++) {
       sum = sum * i;
   }
   return sum;
}
let b = factorial(a);
document.write(b);
