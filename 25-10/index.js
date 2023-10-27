//zigzag conversion in leetcode question 6 ?

let str = "PAYPALISHIRING";

function convert(s, numRows) {
    if (numRows === 1) return s;

    let rows = Math.min(numRows, s.length);
    let res = Array(rows).fill('');
    let currRow = 0;
    let goingDown = false;

    for (let char of s) {
        res[currRow] += char;
        if (currRow == 0 || currRow == rows - 1) goingDown = !goingDown;
        currRow += goingDown ? 1 : -1;
    }

    return res.join('');
}


console.log(convert(str, 3)); 