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