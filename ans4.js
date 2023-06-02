let nums = [1,4,3,2]
const maximumpossibleSum = function(nums) {
        let x = nums.length;
        let y = 0;
        for (let i = 0; i < x - 1; i += 2) {
            y += nums[i];
        }
        return y;
    }
console.log(maximumpossibleSum(nums));