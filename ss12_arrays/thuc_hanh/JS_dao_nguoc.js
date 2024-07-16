let x = [-3, 5, 1, 3, 2, 10];
first = 0 ;
last = x.length - 1 ;
let b;

while (first < last ) {
    b = x[last];
    x[last] = x[first] ;
    x[first] = b;
    first++;
    last--;
}
document.write(x);