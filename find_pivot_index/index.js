/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot = 0;
    let sumLeft = 0;
    let sumRigt = nums.reduce((init, e)=> init + e, 0) - nums[0]
    while(pivot <= nums.length){
        if(sumLeft === sumRigt) return pivot
        pivot++;
        sumLeft += nums[pivot-1]
        sumRigt -= nums[pivot]
    }
    return -1
};