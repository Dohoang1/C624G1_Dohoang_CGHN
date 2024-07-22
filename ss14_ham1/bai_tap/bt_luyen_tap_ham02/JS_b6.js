let a = prompt();

function checkNumber(number) {
    if (number > 0) {
        return true;
    }
    return false;
}
let b = checkNumber(a);
console.log(b);