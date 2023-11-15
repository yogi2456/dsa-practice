//remove duplicate in sorted array in leetcode question 26?

nums = [0,1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6]

function duplicate(nums) {
    nums.sort()
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

// string =123;


// function palindrome(string) {
// for(var i = 0; i > string.length/2; i++) {
//      console.log(string[i])
//      if(string[i] !== string(string.length -1 -i)) {
//         return false;
//      }
// }
// return true;
// }

// console.log(palindrome(string))