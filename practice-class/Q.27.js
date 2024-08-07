// remove element in leetcode question 27?

//var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var nums = [1, 2, 2, 3, 4, 4, 5];
var val = 2;

function removeElement(nums, val) {
    for(var i = nums.length - 1; i >= 0; i--) {
        //console.log(nums[i])
        if(nums[i] == val) {
            nums.splice(i,1)
        }
    }
}

console.log(removeElement(nums))