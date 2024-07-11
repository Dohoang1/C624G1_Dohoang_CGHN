function checkB() {
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;

    if (a%b===0){
        result.textContent=('a chia hết cho b');
    } else {
        result.textContent=('a không chia hết cho b')
    }
}