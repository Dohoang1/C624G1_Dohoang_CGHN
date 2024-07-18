let nums = [12, -33, 15, 6, 5, 35, 66, 87, 54, 48, 96, 1, 44];
let x = 0;
for (let i = 0 ; i < nums.length; i++) {
    if ( nums[i] > x ) {
        x = nums[i];
    }
}
document.write(x);