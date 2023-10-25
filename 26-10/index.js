//search insert position in leetcode question 35?


var array = [1, 3, 5, 6];
var target = 5;

function sortedArray(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}

console.log(sortedArray(array));