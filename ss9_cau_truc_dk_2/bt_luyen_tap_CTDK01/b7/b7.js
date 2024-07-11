function phoneBill() {
    let minutes = +document.getElementById('minutes').value;
    const fee = 25000;
    const firstRate = 600;
    const secondRate = 400;
    const thirdRate = 200;

    let totalCost = 0;

    if (minutes <= 50) {
        totalCost = fee + minutes * firstRate;
    } else if (minutes <= 200) {
        totalCost = fee + (50 * firstRate + (minutes - 50) * secondRate);
    } else {
        totalCost = fee + (50 * firstRate + 150 * secondRate + (minutes - 200) * thirdRate);
    }
    document.getElementById('totalCost').innerHTML = totalCost;
}
