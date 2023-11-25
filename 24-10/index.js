//remove duplicate in sorted array in leetcode question 26?

nums = [1, 1, 2, 2, 3, 3, 3, 7, 7, 4, 4, 5, 6, 6]

function duplicate(nums) {
    //nums.sort()
    var j = 1;
    for(var i = 0; i < nums.length - 1; i++) {
        //console.log(nums[i])
        if(nums[i]!= nums[i+1]) {
            nums[j] = nums[i+1];
            j++;
        }
    }
    return j;
}

console.log(duplicate(nums))

