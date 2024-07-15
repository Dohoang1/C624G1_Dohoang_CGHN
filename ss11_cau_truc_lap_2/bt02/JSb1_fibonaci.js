function printF() {
let numF = +document.getElementById("numF").value;
let a = 1;
let b = 1;
let c;
let i;

    document.write(a + "<br>");
    document.write(b + "<br>");

for (i = 3 ; i <= numF ; i++) {
    c = a + b;
    document.write(c + "<br>");
    a = b;
    b = c;
}
}