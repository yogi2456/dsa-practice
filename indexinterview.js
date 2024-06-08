// console.log(console.log("abc"));



// console.log(NaN == NaN)



// console.log("a"+"b" + + "d"+ + "c")




// hii()

// function hii() {
//     console.log("hello")
// }



// a = 5
// b = 6
// console.log(++a + b++)



// let x = 1 > 2 > 3;
// console.log(x)



// num = 7;

// the input is 4 and the output is 1+2+3+4+5+6+7 = 28 question 1?
// function addUp(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(addUp(7));



// print 1 to 10 number sequence by using while loop question 9?
//output 1234, 123, 12, 1

// function sequence(num) {
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             console.log(j + " ")
//         }
//             console.log("\n")
//     }
// }

// console.log(sequence(4);

// function printNumberPattern() {
//     let row = 4; // Number of rows

//     while (row >= 1) {
//         let num = '';
//         for (let i = 1; i <= row; i++) {
//             num += i;
//         }
//         console.log(num);
//         row--;
//     }
// }

// printNumberPattern();



//print pyramid pattern 77 question 
// function printPattern(n) {
//     for ( let i = 1; i <= n; i++) {
//         let row = "*".repeat(i);
//         console.log(row);
//     }
// }

// printPattern(5)

// let string = "";
// for (let i = 0; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         string += "*";
//     }
//     string += "\n"; // newline after each row
// }
// console.log(string);




// draw this pattern using while loop question 8?

// function printPattern(rows) {
//     let i = 1;
//     while (i <= rows) {
//         if (i % 2 === 0) {
//             console.log('*'); // Double asterisks
//         } else {
//             console.log('*'.repeat(2)); // Single asterisk
//         }
//         i++;
//     }
// }

// printPattern(4); // Example with 4 rows

// function printPattern1(rows) {
//     for (let i = 1; i <= rows; i++) {
//         if(i % 2 === 0) {
//             console.log("*");
//         } else {
//             console.log("*".repeat(2));
//         }
//     }
// }

// printPattern1(4)


// first log the variable then define will it given an error on run, try using var, let, const  question 104?

let a = "abc"

console.log(a)

const b = "abc"

console.log(b)

var c = "abc"

console.log(c)
