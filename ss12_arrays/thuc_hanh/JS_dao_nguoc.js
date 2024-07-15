let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
let b;
while (first < last) {
    b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x);