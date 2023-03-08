/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = [];
    let init = 0;
    nums.forEach((el)=>{
        init += el;
        result.push(el)
    })
    return result
};