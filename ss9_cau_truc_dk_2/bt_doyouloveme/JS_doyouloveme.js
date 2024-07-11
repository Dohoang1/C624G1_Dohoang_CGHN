function yesB() {
    document.getElementById('result').innerHTML=('I Love You Too!');
}

document.addEventListener("DOMContentLoaded", function() {
    let noButton = document.getElementById("noButton");

    noButton.onmouseover = function() {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    };
});
