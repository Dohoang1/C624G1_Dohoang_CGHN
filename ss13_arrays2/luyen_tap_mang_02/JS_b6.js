let arr = [];
function addE() {
    let eleM = document.getElementById("eleM").value;
     arr = Array.from(eleM);
}
    function checkA() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '-') {
                arr[i] = '_';
            }

        }
        c = arr.toString();
        document.getElementById("result").innerHTML = c;
    }
