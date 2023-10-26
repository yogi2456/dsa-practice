//permutation 2 in leetcode question 47?

//input = [1, 1, 2]
//output = [[1,1,2], [1,2,1], [2,1,1]]

nums = [1, 1, 2];

function permutation(nums) {
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        //console.log(nums[i])
        // if(nums[i] != nums[i+1]) {
        //     result.push(nums[i])
        // }
        for(var j = i + 1; j < nums.length; i++) {
            for(var k = j + 1; k < nums.length; k++) {
                console.log(i,j,k)
            }
        }
    }
    return result;
}

console.log(permutation(nums))