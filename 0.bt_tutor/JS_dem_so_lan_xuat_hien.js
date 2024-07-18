let nums = [-15, 2, -12, 9, -9, 7, -1, -8, -5, 5, -3];
let x = 0;
for ( i = 0; i < nums.length; i++) {
    if ( nums[i] < 0) {
        x++;
    }
}
document.write(x);