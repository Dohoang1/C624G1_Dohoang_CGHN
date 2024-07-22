function evo(a,b) {
    if ( a > b ) {
        alert("ok");
    } else if ( a < b ) {
        return a + b ;
    }
}

let a = +prompt("nhap a");
let b = +prompt("nhap b");

evo(a,b);
console.log(evo(a,b));