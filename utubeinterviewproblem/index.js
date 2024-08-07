// 1. write a function that returns the reverse of a string?
// 1.
function reverseString(str) {
    var reversed = "";

    for (var i = str.length-1; i>=0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("Interview Happy"))

//2.
function reverseString1(str1) {
    return str1.split("").reverse().join("")
}

console.log(reverseString1("I am Happy"))
//___________________________________________________________________________________________________________________________________________

// 2. write a function that returns the longest word in the sentence?
// 1.
function findLongestWord(sentence){
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("I love coding in Javascript"));

// let sentence = "I love coding in Javascript"
// function yogesh(sentence) {
//     return sentence.split(" ");
// }

// console.log(yogesh(sentence))

//______________________________________________________________________________________________________________________________________________

// 3. write a function that checks whether a given string is a palindrome or not?
// 1.
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("")
    return str === reversedStr
}

console.log(isPalindrome("racecar"))
// 2.
var x = "121";
function checkP(x) {
    if(x.length < 2){
        return "Str not valid"
    }

    for (var i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            return false
        }
    }
    return true

}

console.log(checkP(x))

//___________________________________________________________________________________________________________________________________________________

// 4. write a function to remove duplicate elements from an array?
// 1.
function removeDuplicate(array) {
    uniqueElements = [];

    for ( var i = 0; i < array.length; i++) {
        if(uniqueElements.indexOf(array[i]) === -1) {
            uniqueElements.push(array[i])
        }
    }
    return uniqueElements;
}

console.log(removeDuplicate([1,2,3,4,4,5,6,6,35,35,35,45]))

// 2.
function remove(arr) {
    return [...new Set(arr)];
}

console.log(remove([1,2,3,4,5,6,7,7,7,4,5,8,34,34,45,]))

// 5. write a function that checks whether two strings are anagrams or not?
//anagrams means An anagram is a word formed by rearranging the letters of another word? ex: listen => silent

// 1.
function areAnagrams(str1, str2) {
    const sortedArray = str1.split("").sort().join("");
    const sortedArray1 = str2.split("").sort().join("");

    return sortedArray === sortedArray1
}

console.log(areAnagrams("listen", "silent"))

// 6. write a function that returns the number of vowels in a string?

// 1.
function vowelsString(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;

    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowelsString("Hello World"));

// 7. write a function to find  a largest number in an array?

// 1.
function largestNumber(arr) {
    let largest = arr[0];

    for ( var i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(largestNumber([2, 4, 6, 9, 3, 15, 1000]));

// 8. write a function to find a smallest number i an array?

// 1. 
function smallestNumber(arr) {
    let smallest = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber([50, 100, 200, 400, 500, 700, 900]));

// 9. write a function to check if a given number is prime or not?

// 1.
function isPrime(number) {
    for (var i = 2; i <= number/2; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));

// 10. write a function to calculate the factorial of a number?

// 1.
function factorialNumber(num) {
    if (num === 0) {
        return 1;
    }

    let factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialNumber(5));

// 11. write a program to remove all whitespace characters from a string?

// 1.
function removeWhitespace(str) {
    const result = str.replace(/\s/g, "");
    return result;
}

const inputString = " Interview,     Happy "
console.log(removeWhitespace(inputString));