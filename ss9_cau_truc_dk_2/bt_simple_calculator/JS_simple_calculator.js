function clearS() {
    document.getElementById('result').value= ""
}

function display(value) {

    document.getElementById("result").value += value;
}

function calculate() {

    let math = document.getElementById("result").value;

    let result = eval(math);

    document.getElementById("result").value = result;

}