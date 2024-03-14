//let value = "101";
let x = "121";

function palindrome() {
    var reverseStr = x.toString().split("").reverse().join("")
    return (x.toString() == reverseStr)
    // let reverseVal = value.toString().split("").reverse().join("")
    // let stringVal = value.toString()
    // if(reverseVal == stringVal) {
    //     return true;
    // }
    // return false;
}

//console.log(palindrome(value))
console.log(palindrome(x))


// var x = "121";
// function checkP(x) {
//     // if(str.length < 2){
//     //     return "Str not valid"
//     // }

//     for (var i = 0; i < x.length / 2; i++) {
//         if (x[i] !== x[x.length - 1 - i]) {
//             return false
//         }
//     }
//     return true

// }

// console.log(checkP(x))