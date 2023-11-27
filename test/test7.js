// remove duplicates element?

//input = [1, 2, 2, 3, 4, 4, 5];
//output = [1, 2, 3, 4, 5]

var array = [1, 2, 2, 3, 4, 4, 5];
var val = 2;

function removeDuplicateElement(array, val) {
    for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] == val) {
            array.splice(i,1)
        }
    }
}

console.log(removeDuplicateElement(array))