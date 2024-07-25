let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

//Ve duong thang
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();


//Ve hinh tron
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();


//Ve chu
ctx.font ="30px Arial";
ctx.fillText("Phong cách",10,50);


//Ve gradient
let grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"white");
ctx.fillStyle = grd;
ctx.fillRect(10, 50, 150, 80);


//Ve gradient tron
let cgrd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
cgrd.addColorStop(0,"blue");
cgrd.addColorStop(1,"white");
ctx.fillStyle = cgrd;
ctx.fillRect(10, 70, 150, 80);