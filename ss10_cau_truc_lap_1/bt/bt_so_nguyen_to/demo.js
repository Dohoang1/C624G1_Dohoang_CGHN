let n=2;
let count =1;
let number= prompt("Bạn muốn hiển thị bao nhiêu số nguyên tố đầu tiên?")
while (count<=number){
    let isPrime = true;
    for ( let i = 2 ; i < n ; i++) {
        if ( n % i ===0 ) {
            isPrime = false;
            break;
        }
    }
    if (isPrime === true) {
        document.write(n + " là số nguyên tố" + "<br>")
        count++
    }
    n++;
}