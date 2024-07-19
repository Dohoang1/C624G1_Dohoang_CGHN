let str = prompt('Nhap chu');
let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lower = 'abcdefghijklmnopqrstuvwxyz';
let result=[];

for (let x = 0; x < str.length; x++) {
    if (Upper.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    } else result.push(str[x].toUpperCase());
}
document.write(result.join(''));