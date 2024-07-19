let num = prompt();
let str = num.toString();
let result = [];

for ( let x = 0; x < str.length; x++) {
if ( str[x + 1 ] % 2 === 0 && str[x] % 2 === 0 ) {
    result.push(str[x], '-');
} else result.push(str[x]);
}
document.write(result.join(''));