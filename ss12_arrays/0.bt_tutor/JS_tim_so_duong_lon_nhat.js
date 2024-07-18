let nums = [4, 34, 41, 73, 88, 9, 3, 15, 96, 92, 11, 6];
let x = 0;
for (i = 0; i < nums.length; i++) {
    if ( x < nums[i])
        x = nums[i];
}
document.write(x);