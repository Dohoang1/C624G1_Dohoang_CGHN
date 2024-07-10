function submit() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let bmi = (weight / (Math.pow(height, 2)));

   document.getElementById('bmi').innerHTML=("Bmi: " + bmi);

    if (bmi < 18.5) {
        result.textContent = "Underweight";
    } else if ((bmi < 25) && (bmi >= 18.5)) {
        result.textContent = "Normal";
    } else if ((bmi < 30) && (bmi >= 25)) {
        result.textContent = "Overweight";
    } else if (bmi >= 30) {
        result.textContent = "Obese";
    }
}