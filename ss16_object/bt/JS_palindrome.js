function addT() {

    let txt = document.getElementById("txtValue").value;
    if (!txt) {
        alert("please enter a valid string");
    } else {
        let arr = txt.split("");
        console.log(arr);

    document.getElementById("txtValue").value = "";
    checkT(arr);
    console.log(checkT(arr));
    }
}
function checkT(array) {
    let j = array.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (array[i] !== array[j]) {
            return false;
        } else {
            return true;
        }
    }
}