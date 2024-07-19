let nums = [5,32,22,1,3,16,29,9,10,77];
let big = [];
let total = 0;
let count = 0;
for ( let i= 0 ; i< nums.length; i++ ) {
    if ( nums[i] >= 10) {
        count++;
        big.push(nums[i])
        total += nums[i];
    }
}
document.write(big + "<br>" + count + "<br>" + total);