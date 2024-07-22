let a = +prompt('Vui lòng nhập một số bất kỳ');
if ( a > 1 && a % Math.sqrt(a) !== 0) {
    alert(a + " là số nguyên tố!");
} else alert(a + " không phải là số nguyên tố!");