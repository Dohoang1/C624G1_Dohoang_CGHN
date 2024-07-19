let arr= [];
function addE() {
    let eleM = document.getElementById('eleM').value;
    if (!eleM) {
        alert('Vui long nhap noi dung kha di')
    }
    else {
        arr.push(eleM);
    }
    document.getElementById('eleM').value="";
    console.log(arr);
}
function displayArr() {
    let b;
    let fisrt = 0;
    let last = arr.length-1
    while (fisrt < last) {
        b = arr[last];
        arr[last] = arr[fisrt];
        arr[fisrt] = b;
        fisrt++;
        last--;
    }
    document.getElementById('result').innerHTML=arr.join('');
}

