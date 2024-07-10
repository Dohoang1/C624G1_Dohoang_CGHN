function submit() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;//doi cm sang m

    let bmi = weight / (height * height);
    let resultText = "Your BMI is " + bmi + ". ";

    if (bmi < 18.5) {
        resultText += "Underweight";
    } else if (bmi < 25) {
        resultText += "Normal weight";
    } else if (bmi < 30) {
        resultText += "Overweight";
    } else {
        resultText += "Obese";
    }

    document.getElementById('result').innerText = resultText;
}