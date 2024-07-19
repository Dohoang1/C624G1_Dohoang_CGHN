let nums = [5,32,22,1,3,111,29,9,10,77,99];
let max = 0;
big = 0;
for ( i = 0 ; i < nums.length ; i++ ) {
    if ( max < nums[i]) {
        max = nums[i]
        big = i;
    }
}
document.write(max + " nam o index: " + big);
