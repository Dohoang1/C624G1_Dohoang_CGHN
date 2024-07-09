function add(){
    let amountA= +document.getElementById('amountA').value;
    let amountB= +document.getElementById('amountB').value;
    let result=amountA+amountB
    let cong="cong :"
    document.getElementById('math').innerHTML=cong;
    document.getElementById('result').innerHTML=result;
}
function sub(){
    let amountA= +document.getElementById('amountA').value;
    let amountB= +document.getElementById('amountB').value;
    let result=amountA-amountB
    let tru="tru :"
    document.getElementById('math').innerHTML=tru;
    document.getElementById('result').innerHTML=result;
}
function mul(){
    let amountA= +document.getElementById('amountA').value;
    let amountB= +document.getElementById('amountB').value;
    let result=amountA*amountB
    let nhan="nhan :"
    document.getElementById('math').innerHTML=nhan;
    document.getElementById('result').innerHTML=result;
}
function div(){
    let amountA= +document.getElementById('amountA').value;
    let amountB= +document.getElementById('amountB').value;
    let result=amountA/amountB
    let chia="chia :"
    document.getElementById('math').innerHTML=chia;
    document.getElementById('result').innerHTML=result;
}