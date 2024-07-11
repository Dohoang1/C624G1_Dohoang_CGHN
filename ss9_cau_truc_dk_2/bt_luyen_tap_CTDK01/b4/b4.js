function checkAll(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let maxvalue = Math.max(a,b,c);
    result.textContent=('Giá trị lớn nhất là :'+ maxvalue)
}