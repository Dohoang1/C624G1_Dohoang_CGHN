function submit(){

    let doC= +document.getElementById('doC').value;


    let doF= doC/5*9+32;

    document.getElementById('result').innerHTML="Do F:"+doF
}