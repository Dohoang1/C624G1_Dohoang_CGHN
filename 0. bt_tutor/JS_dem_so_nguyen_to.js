let nums =[1, 2, 3, 9, 5, 7, 6, 3, 5, 11, 8];
let x = 0;
for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] % 2 !== 0 && nums[i] > 1) {
        x++;
    }
}
document.write(x);