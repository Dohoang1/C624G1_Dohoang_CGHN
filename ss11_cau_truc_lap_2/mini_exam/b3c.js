function calculate() {

    let calT;
    calT = "<table border='1'>";
    let count = 1;
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    for (x = 1; x <= a; x++) {
        calT += "<tr>"
        for (y = 1; y <= b; y++) {
            calT += `<td> ${x} + ${y} = ${x + y} </td>`;
        }
        calT += "</tr>"
    }
    calT += "</table>"
    document.getElementById('result').innerHTML=(calT);
}

