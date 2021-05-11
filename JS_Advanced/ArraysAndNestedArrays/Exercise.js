// Exercise: Arrays

// => 1.	Print an Array with a Given Delimiter

// function solve1(arr, delimeter) {
//     result = arr.reduce((acc, cur) => acc.concat(delimeter + cur));
//     return result;
// }

// console.log(solve1(
//     ['One',
//         'Two',
//         'Three',
//         'Four',
//         'Five'],
//     '-'
// ));


// => 2.	Print Every N-th Element from an Array 

// function solve2(arr, n) {
//     let result = [];
//     result.push(arr[0]);

//     for (let i = n; i < arr.length; i += n) {
//         result.push(arr[i])
//     }
//     return result;
// }

// console.log(solve2(
//     ['5',
//         '20',
//         '31',
//         '4',
//         '20'],
//     2
// ));

// => 1.	Add and Remove Elements  

// function solve3(arr) {

//     let result = [];
//     let num = 0;

//     for (let item of arr) {
//         num++;
//         switch (item) {
//             case 'add': result.push(num); break;
//             case 'remove': result.pop(); break;
//         }
//     }

//     if (result.length == 0) {
//        return 'Empty';
//     }

//     return result.join('\n');
// }

// console.log(solve3(
//     ['remove', 
//     'remove', 
//     'remove'
//     ]
// ));


// => 4.	Rotate Array

// function solve4(arr, n) {

//     for (let i = 0; i < n; i++) {
//         let item = arr.pop();
//         arr.unshift(item);
//     }
//     return arr.join(' ');
// }


// console.log(solve4(
//     ['Banana',
//         'Orange',
//         'Coconut',
//         'Apple'],
//     15
// ));


// => 5.	Extract Increasing Subsequence from Array

// function solve5(input) {

//     let max = Number.MIN_SAFE_INTEGER;

//     input = input.filter(x => {
//         if (x >= max) {
//             max = x
//             return true;
//         }else{
//             return false;
//         }
//     });

//     return input;
// }

// function solve5(input) {

//     let max = Number.MIN_SAFE_INTEGER;

//     input = input.reduce((acc, cur) => {
//         if (cur >= max) {
//             max = cur;
//             acc.push(max);
//         }
//         return acc;
//     }, []);

//     return input;
// }

// function solve5(arr) {

//     arr = arr.reduce((acc, cur) => {
//         if (cur >= acc[acc.length - 1] || acc.length === 0) {
//             acc.push(cur);
//         }
//         return acc;
//     }, [])

//     return arr;
// }

// console.log(solve5([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24
// ]));


// => 6.	List of Names

// function solve6(arr) {
//      arr.sort((a,b)=> a.localeCompare(b));
//      arr = arr.reduce((acc, cur,i)=> 
//      {
//          i+=1;
//         acc.push(`${i}.${cur}`);
//         return acc;
//      }, []);

//      return arr.join('\n')
// }

// function solve6(arr) {

//     arr.sort((a,b)=> a.localeCompare(b));
//     let sorted = [];
//     let counter = 1;
//     for (let name of arr) {
//         sorted.push(`${counter}.${name}`);
//         counter++;
//     }
//     return sorted.join('\n')
// }

// function solve6(arr) {

//     arr = arr.sort((a, b) => a.localeCompare(b)).map((x, i) => {
//         arr = `${i + 1}.${x}`
//         return arr;
//     })

//     return arr.join('\n')
// }

// console.log(solve6(["John", "Bob", "Christina", "Ema"]));

// => 7.	Sorting Numbers

// function solve7(arr) {

//     arr.sort((a, b) => a - b);
//     let sorted = [];
//     while (arr.length) {

//         if (arr.length > 0) {
//             sorted.push(arr.shift())
//         }

//         if (arr.length > 0) {
//             sorted.push(arr.pop())
//         }
//     }
//     return sorted;
// }

// console.log(solve7([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// => 8.	Sort an Array by 2 Criteria

// function solve8(arr) {

//     let result = [];
//     result = arr.sort((x, y) => {
//         if (x.length - y.length != 0) {
//            return  x.length-y.length;
//         } else {
//            return x.localeCompare(y);
//         }
//     })
//     return result.join('\n');
// }

// console.log(solve8(
//     ['alpha',
//         'beta',
//         'gamma']
// ));


// => Multidimensional Arrays (Matrices)

// => 9.	Magic Matrices

// function solve9(matrix) {

//     let flag = true;
//     let sum = matrix[0].reduce((acc, cur) => acc += cur);

//     for (let i = 1; i < matrix.length; i++) {

//         let curSum = matrix[i].reduce((acc, cur) => acc += cur);

//         if (curSum != sum) {
//             return flag = false;
//         }
//     }

//     for (let c = 0; c < matrix[0].length; c++) {

//         let curSum = 0;

//         for (let i = 0; i < matrix.length; i++) {

//             curSum += matrix[i][c]
//         }

//         if (curSum != sum) {
//             return flag = false;
//         }
//     }
//     return flag;
// }


// function solve9(matrix) {

//     return matrix
//         .map(row => row
//             .reduce((acc, c) => acc + c))
//         .every((element, r, arr) => element === arr[0])
//         && matrix
//             .reduce((acc, c) => acc
//                 .map((element, r) => element + c[r]))
//             .every((element, r, arr) => element === arr[0]);
// }

// console.log(solve9([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
// ));

// console.log(solve9([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
// ));

// console.log(solve9([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]
// ]));

// => 10.	*Tic-Tac-Toe    ========> TODO not finished.  ====> 90 points from Judge

// function solve10(arr) {

//     const ocupiedSlot = 'This place is already taken. Please choose another!';
//     const draw = 'The game ended! Nobody wins :(';
//     let player = 'X';

//     let matrix = [
//         [false, false, false],
//         [false, false, false],
//         [false, false, false]
//     ];

//     for (let i = 0; i < arr.length; i++) {
//         let row = Number(arr[i].split(' ').slice(0, 1));
//         let col = Number(arr[i].split(' ').slice(1, 2));

//         if (matrix[row][col] == false) {
//             if (player == 'X') {
//                 matrix[row][col] = player;
//                 if (isGameWon(matrix, player)) {
//                     return `Player ${player} wins!\n ${printMatrix()}`;
//                 }
//                 player = 'O'
//             }
//             else {
//                 matrix[row][col] = player;
//                 if (isGameWon(matrix, player)) {
//                     return `Player ${player} wins!\n ${printMatrix()}`;
//                 }
//                 player = 'X'
//             }
//         } else if (matrix[row][col] == 'X' || matrix[row][col] == 'O') {

//             if (isDraw(matrix)) {
//                 return `${draw}\n${printMatrix()}`;
//             }
//             console.log(`${ocupiedSlot}`);
//         }
//     }

//     function isGameWon(matrix, player) {

//         for (let i = 0; i < matrix.length; i++) {
//             if ((matrix[i][0] == player && matrix[i][1] == player && matrix[i][2] == player) ||
//                 (matrix[0][i] == player && matrix[1][i] == player && matrix[2][i] == player)) {
//                 return true;
//             }
//         }

//         if (matrix[0][0] == player && matrix[1][1] == player && matrix[2][2] == player) {
//             return true;
//         }

//         if (matrix[0][2] == player && matrix[1][1] == player && matrix[2][0] == player) {
//             return true;
//         }

//         return false;
//     }

//     function isDraw(matrix) {
//         let arr = matrix.reduce(returnArr);
//         let draw = arr.some(x => x == false) ? false : true;
//         return draw;
//     }

//     function returnArr(acc, cur) {
//         return acc.concat(cur);
//     }

//     function printMatrix() {
//         let printed = '';
//         matrix.forEach(row => printed += row.join('\t') + '\n');
//         return printed;
//     }
// }

//-----------------------------------------------------------------------------------------------

// console.log(solve10(
//     ["0 1",
//         "0 0",
//         "0 2",
//         "2 0",
//         "1 0",
//         "1 1",
//         "1 2",
//         "2 2",
//         "2 1",
//         "0 0"]
// ));

// console.log(solve10(
//     ["0 0",
//         "0 0",
//         "1 1",
//         "0 1",
//         "1 2",
//         "0 2",
//         "2 2",
//         "1 2",
//         "2 2",
//         "2 1"]
// ));

// console.log(solve10(
//     ["0 1",
//         "0 0",
//         "0 2",
//         "2 0",
//         "1 0",
//         "1 2",
//         "1 1",
//         "2 1",
//         "2 2",
//         "0 0"]
// ));