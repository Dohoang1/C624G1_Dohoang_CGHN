
function calculateS() {
    let r = document.getElementById('r').value;
    let calS = r * r * 3.14;
    document.getElementById('S').innerHTML = calS;
}

function calculateC() {
    let r = document.getElementById('r').value;
    let calC = r * 2 * 3.14;
    document.getElementById('C').innerHTML = calC;
}