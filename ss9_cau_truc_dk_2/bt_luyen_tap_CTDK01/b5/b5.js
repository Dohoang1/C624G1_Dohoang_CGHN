function calculate(){
    let exam1 = +document.getElementById('exam1').value;
    let exam2 = +document.getElementById('exam2').value;
    let exam3 = +document.getElementById('exam3').value;
    let exam4 = +document.getElementById('exam4').value;
    let mid = +document.getElementById('mid').value;
    let final = +document.getElementById('final').value;
    let score = ((exam1 + exam2 + exam3 + exam4 + (mid * 3) + (final * 3)) / 10);
    document.getElementById('score').innerHTML=(score);
    if (score >= 8.5) {
        result.textContent=('Học lực Giỏi');
    } else if (score >= 7) {
        result.textContent=('Học lực Khá');
    } else if (score >= 5) {
        result.textContent=('Học lực Trung Bình');
    } else if (score >= 3.5) {
        result.textContent=('Học lực Yếu');
    } else result.textContent=('Học lực Kém')
}