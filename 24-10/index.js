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

let value = "10";

function palindrome() {
    let reverseVal = value.toString().split("").reverse().join("")
    let stringVal = value.toString()
    if(reverseVal == stringVal) {
        return true;
    }
    return false;
}

console.log(palindrome(value))


var x = "-121";
function checkP(x) {
    // if(str.length < 2){
    //     return "Str not valid"
    // }

    for (var i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            return false
        }
    }
    return true

}

console.log(checkP(x))