//reverse integer in leetcode question 7?

//input: x = 123;
//output: 321;

var x = 123;
var x = -123;
var x = 120;
var x = 231;
var x = 67856743;

function reverseInteger(x) {
    var reversed = 0;

    while (x !== 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    if(reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}

console.log(reverseInteger(x));


//merge two sorted list in leetcode question 21?

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];
var mergedlist = [];

function sortedList(list1, list2) {
    for(i = 0; i < list1.length; i++) {
        mergedlist.push(list1[i])
        }
        for(j = 0; j < list2.length; j++) {
            mergedlist.push(list2[j])
    }
    return mergedlist;
}

console.log(sortedList(list1, list2))

//