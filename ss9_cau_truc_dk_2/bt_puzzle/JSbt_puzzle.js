let img1= document.getElementById("img1");
let img2= document.getElementById("img2");
let img3= document.getElementById("img3");
let img4= document.getElementById("img4");
let img5= document.getElementById("img5");

let ran1 = Math.floor(Math.random() * 3) + 1;
if (ran1 === 1) {
    img1.src="gau1.jpg";
} else if (ran1 === 2) {
    img1.src="khi1.jpg";
} else {
    img1.src="meo1.jpg";
}

let ran2 = Math.floor(Math.random() * 3) + 1;
if (ran2 === 1) {
    img2.src="gau2.jpg";
} else if (ran2 === 2) {
    img2.src="khi2.jpg";
} else {
    img2.src="meo2.jpg";
}

let ran3 = Math.floor(Math.random() * 3) + 1;
if (ran3 === 1) {
    img3.src="gau3.jpg";
} else if (ran3 === 2) {
    img3.src="khi3.jpg";
} else {
    img3.src="meo3.jpg";
}

let ran4 = Math.floor(Math.random() * 3) + 1;
if (ran4 === 1) {
    img4.src="gau4.jpg";
} else if (ran4 === 2) {
    img4.src="khi4.jpg";
} else {
    img4.src="meo4.jpg";
}
let ran5 = Math.floor(Math.random() * 3) + 1;
if (ran5 === 1) {
    img5.src="gau5.jpg";
} else if (ran5 === 2) {
    img5.src="khi5.jpg";
} else {
    img5.src="meo5.jpg";
}
function changeI1() {
    if(img1.getAttribute("src") === "khi1.jpg") {
        img1.src = "gau1.jpg"
    } else if(img1.getAttribute("src") === "gau1.jpg") {
        img1.src = "meo1.jpg"
    } else {
        img1.src = "khi1.jpg"
    }
}
function changeI2() {
    if(img2.getAttribute("src") === "khi2.jpg") {
        img2.src = "gau2.jpg"
    } else if(img2.getAttribute("src") === "gau2.jpg") {
        img2.src = "meo2.jpg"
    } else {
        img2.src = "khi2.jpg"
    }
}
function changeI3() {
    if(img3.getAttribute("src") === "khi3.jpg") {
        img3.src = "gau3.jpg"
    } else if(img3.getAttribute("src") === "gau3.jpg") {
        img3.src = "meo3.jpg"
    } else {
        img3.src = "khi3.jpg"
    }
}
function changeI4() {
    if(img4.getAttribute("src") === "khi4.jpg") {
        img4.src = "gau4.jpg"
    } else if(img4.getAttribute("src") === "gau4.jpg") {
        img4.src = "meo4.jpg"
    } else {
        img4.src = "khi4.jpg"
    }
}
function changeI5() {
    if(img5.getAttribute("src") === "khi5.jpg") {
        img5.src = "gau5.jpg"
    } else if(img5.getAttribute("src") === "gau5.jpg") {
        img5.src = "meo5.jpg"
    } else {
        img5.src = "khi5.jpg"
    }
    checkPerfect();
}
function checkPerfect(){
    if((img1.getAttribute("src") === "khi1.jpg"&& img2.getAttribute("src") === "khi2.jpg" && img3.getAttribute("src") === "khi3.jpg"&& img4.getAttribute("src") === "khi4.jpg" && img5.getAttribute("src") === "khi5.jpg") || (img1.getAttribute("src") === "gau1.jpg"&& img2.getAttribute("src") === "gau2.jpg" && img3.getAttribute("src") === "gau3.jpg"&& img4.getAttribute("src") === "gau4.jpg" && img5.getAttribute("src") === "gau5.jpg") || (img1.getAttribute("src") === "meo1.jpg"&& img2.getAttribute("src") === "meo2.jpg" && img3.getAttribute("src") === "meo3.jpg"&& img4.getAttribute("src") === "meo4.jpg" && img5.getAttribute("src") === "meo5.jpg")) {
        img1.style.border = "5px solid green";
        img2.style.border = "5px solid green";
        img3.style.border = "5px solid green";
        img4.style.border = "5px solid green";
        img5.style.border = "5px solid green";
    }
}