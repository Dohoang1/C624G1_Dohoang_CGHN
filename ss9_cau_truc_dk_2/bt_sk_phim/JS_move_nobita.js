function upArrow() {
    let element = document.getElementById('nobita');
    element.style.top=parseInt(element.style.top) - 5 +'px';
}
function downArrow() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrow() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrow() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrow();
            break;
        case 39:
            rightArrow();
            break;
        case 38:
            upArrow();
            break;
        case 40:
            downArrow();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSelection);
}