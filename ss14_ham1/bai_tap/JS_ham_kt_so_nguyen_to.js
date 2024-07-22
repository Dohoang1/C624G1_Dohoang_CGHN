function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
let a = +prompt("enter a number");
if ( isPrime(a) === true) {
    alert( a + " la so nguyen to");
} else {
    alert(a + " khong phai la so nguyen to");
}