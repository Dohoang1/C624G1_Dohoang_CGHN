function convertA() {
    temperC = +document.getElementById('temperC').value;
    let temperF = temperC * 9 / 5 + 32
    result.textContent=temperF;
}