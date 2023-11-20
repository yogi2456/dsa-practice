var array = [2, 7, 11, 15];
var target = 9;

function twoSum(array) {
    for (var i = 0; i < array.length - 2; i++) {
        for (var j = i; j < array.length - 1; j++) {
            if(array[i] + array[j] == target) {
                console.log(i, j)
            }
        }
    }
}

console.log(twoSum(array))