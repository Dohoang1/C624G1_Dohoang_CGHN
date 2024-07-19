let nums = [5,32,22,1,3,111,29,9,333,77,99];
let total = 0;
let big = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    console.log(total);
    if (big < nums[i]) {
        big = nums[i];
    }
}
let ave = total / nums.length;
document.write("So lon nhat: " + big + "<br>" + "Trung binh tong: " + ave.toFixed(2));