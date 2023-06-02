let nums = [2,5,1,3,4,7], n = 3
var maximizesum = function(nums, n) {
    let x = [];
    for (i = 0; i < n; i++) {
        x.push(nums[i],nums[i+n]);
    }
    return x;
};
console.log(maximizesum(nums,n))