function submitN(){
    let num = +document.getElementById('number').value;
    let total = 0;
    let i = 1;
    for (;i <= num; i++) {
        total += i;
    }
    document.getElementById('result').innerHTML=total;
}