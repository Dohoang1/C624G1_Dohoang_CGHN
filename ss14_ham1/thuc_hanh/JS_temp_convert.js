function tempConvert(valNum) {
    valNum=document.getElementById('faH').value;
    console.log(valNum);
    document.getElementById('ceL').innerHTML = (valNum - 32) / 1.8;
}
