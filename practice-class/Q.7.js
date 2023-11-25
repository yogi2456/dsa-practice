//reverse integer in leetcode question 7?

//input: x = 123;
//output: 321;

// var x = 123;
// var x = -123;
// var x = 120;
// var x = 231;
var x = 67856743;

// function reverseInteger(x) {
//     var reversed = 0;

//     while (x !== 0) {
//         reversed = reversed * 10 + x % 10;
//         x = Math.trunc(x / 10);
//     }

//     if(reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return reversed;
// }

// console.log(reverseInteger(x));

function reverseInteger(x) {
    //var reversed = 0;

    for(var i = 0; i < x.length; i++) {
        console.log(i)
        x.reverse();
    }
}

console.log(reverseInteger(x))


