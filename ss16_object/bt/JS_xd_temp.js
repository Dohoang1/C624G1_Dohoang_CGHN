function Temperature(tempC) {

    this.tempC = tempC;

    this.convertToF = function () {
        return tempC * 1.8 + 32;
    }
    this.convertToK = function () {
        return tempC + 273.15;
    }
}
let todayTemp = new Temperature( +prompt("Inputt Cel"));
document.write(`Nhiệt độ F: ${todayTemp.convertToF()} <br>`);
document.write(`Nhiệt độ K: ${todayTemp.convertToK()}`)
