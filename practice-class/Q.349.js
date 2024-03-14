//intersection of two arrays in leetcode question 349?

var num1 = [1, 2, 2, 1];
var num2 = [2, 2];

// function interSection(num1, num2) {
//     const set = new Set(num1);
//     const result = new Set();

//     for (var key of num2) {
//         if(set.has(key)) result.add(key);
//     }
//     return Array.from(result)
// }

// console.log(interSection(num1, num2))


let interSectionArray = num1.filter((currEle) => {
    return num2.includes(currEle)
});

// console.log([...new Set (interSectionArray)])
console.log(interSectionArray)

