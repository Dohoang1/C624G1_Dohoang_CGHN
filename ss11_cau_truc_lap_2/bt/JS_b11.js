function calculate() {
    let incomme = +document.getElementById('income').value;
    let mem = +document.getElementById('mem').value;
    let tax;
    if ( incomme >= 80 ) {
        tax = incomme * 0.35 - mem * 4.4;
    } else  if ( incomme >= 52 ) {
        tax = incomme * 0.3 - mem * 4.4;
    } else  if ( incomme >= 32 ) {
        tax = incomme * 0.25 - mem * 4.4;
    } else  if ( incomme >= 18 ) {
        tax = incomme * 0.2 - mem * 4.4;
    } else  if ( incomme >= 10 ) {
        tax = incomme * 0.15 - mem * 4.4;
    } else  if ( incomme >= 5 ) {
        tax = incomme * 0.1 - mem * 4.4;
    } else  tax = incomme * 0.05 - mem * 4.4;
    if (tax < 0) {
        tax = 0;
}
    result.textContent = tax.toFixed(1) + " Triệu VNĐ";
}