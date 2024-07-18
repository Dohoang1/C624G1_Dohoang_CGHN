nums = [-15, 2, -12, 9, -9, 7, -1, -8, -5, 5, -3];
let x = 0;
for ( i = 0; i < nums.length; i++ ) {
    if (x > nums[i] && nums[i] % 2 !== 0) {
        x = nums[i];
    }
}
document.write(x);