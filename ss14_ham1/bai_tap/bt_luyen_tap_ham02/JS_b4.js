function checkB1(Array) {
    let nums = ['0','1','2','3','4','5','6','7','8','9']
    for ( i = 0; i < Array.length; i++ ) {
        let index = nums.indexOf(Array[i]);
       if (index != -1)
           return true;
    }
    return false;
}
let a = prompt();
let arr = a.split("");
console.log(arr)

let b = checkB1(arr);
console.log(b);

