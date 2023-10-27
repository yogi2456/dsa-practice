//permutation 2 in leetcode question 47?

//input = [1, 1, 2]
//output = [[1,1,2], [1,2,1], [2,1,1]]

nums = [1, 1, 2];

function permutation(nums) {
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        //console.log(nums[i])
        for(var j=0; j<nums.length; j++) {
            if(nums[i] == nums[j]) {
                result.push(nums[i])
                result.push(nums[j])
            }
        }
        
        // for(var j = 0; j < nums.length - 1; i++) {
        //     for(var k = 0; k < nums.length - 2; k++) {
        //         //console.log(nums[i], nums[j], nums[k])
        //         result.push(nums[i], nums[j], nums[k])
        //     }
        // }
    }
    return result;
}
console.log(permutation(nums))
