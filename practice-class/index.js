//reverse integer in leetcode question 7?

//input: x = 123;
//output: 321;

// var x = 123;
// var x = -123;
// var x = 120;
// var x = 231;
// var x = 67856743;

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


//merge two sorted list in leetcode question 21?

// var list1 = [1, 2, 4];
// var list2 = [1, 3, 4];
// var mergedlist = [];

// function sortedList(list1, list2) {
//     for(i = 0; i < list1.length; i++) {
//         mergedlist.push(list1[i])
//         }
//         for(j = 0; j < list2.length; j++) {
//             mergedlist.push(list2[j])
//     }
//     return mergedlist;
// }

// console.log(sortedList(list1, list2))

//intersection of two arrays in leetcode question 349?

// var num1 = [4, 9, 5];
// var num2 = [9, 4, 9, 8, 4];

// function interSection(num1, num2) {
//     const set = new Set(num1);
//     const result = new Set();

//     for (var key of num2) {
//         if(set.has(key)) result.add(key);
//     }
//     return Array.from(result)
// }

// console.log(interSection(num1, num2))

//island primeter in leetcode question 463?


var grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

function island(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter--;
                }
                if (i < rows - 1 && grid[i + 1][j] === 1) {
                    perimeter--;
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter--;
                }
                if (j < cols - 1 && grid[i][j + 1] === 1) {
                    perimeter--;
                }
            }
        }
    }
    
    return perimeter;
}

console.log(island(grid))