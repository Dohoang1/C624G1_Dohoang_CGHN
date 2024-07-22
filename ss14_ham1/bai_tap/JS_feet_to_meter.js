function ftm() {
    let f = document.getElementById("feet").value;
    let converttoMeter = (f * 0.305);
    converttoM.textContent= `${converttoMeter.toFixed(3)} meter`;
}

function mtf() {
    let m = document.getElementById("meter").value;
    let converttoFeet = (m * 3.279);
    converttoF.textContent= `${converttoFeet.toFixed(3)} feet `;
}