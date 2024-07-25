// function Apple (type) {
//     this.type = type;
//     this.color = "red";
//     }
// Apple.prototype.getInfo = function() {
//     return this.color + ' ' + this.type + ' apple';
// };
// let apple = new Apple('macintosh');
// apple.color = "reddish";
// alert(apple.getInfo());


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();