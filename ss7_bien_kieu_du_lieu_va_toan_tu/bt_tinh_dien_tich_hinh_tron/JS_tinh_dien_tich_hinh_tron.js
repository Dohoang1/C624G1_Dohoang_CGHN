function submit(){

    let bankinh= +document.getElementById('bankinh').value;

    let result=bankinh*bankinh*3.14159265359

    document.getElementById('result').innerHTML="Dien tich:"+result;
}