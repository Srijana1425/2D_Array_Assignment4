let nums = [-4,-1,0,3,10]
var sortedSquares = function(nums) 
{
    const squreSorted = new Array(nums.length);
    let leftIndx = 0;
    let rightIndx = nums.length - 1; 
    let pointer = nums.length;
    while(pointer)
    {
        pointer--;
        let leftValue = nums[leftIndx] ** 2;
        let rightValue = nums[rightIndx] ** 2;
        if(leftValue > rightValue) 
        {
            squreSorted[pointer] = leftValue;
            leftIndx++;
        }
        else{ 
            squreSorted[pointer] = rightValue;
            rightIndx--;
        }
    }
    return squreSorted 
};
console.log(sortedSquares(nums));