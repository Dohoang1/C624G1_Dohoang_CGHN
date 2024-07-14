function calculate() {
    let a= +document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=+document.getElementById("c").value;
    if ((a + b > c) && (a + c > b ) && (b + c >a)) {
        result.textContent = ('a, b, c đều là cạnh của một tam giác')
    } else if (a <= 0 || b <= 0 || c <=0 ) {
        result.textContent = ('a, b, c không phải cạnh của một tam giác')
    } else {
        result.textContent = ('a, b, c không phải cạnh của một tam giác')
    }
}