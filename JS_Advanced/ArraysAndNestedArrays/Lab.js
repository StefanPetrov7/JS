// // LAB

// // new [forof] loop

// // for (const element of arr) {    // forof => iterate trough elements, no i is required
// //     console.log(element);
// // }

// // // 01. Even Position Elements ;

// function evenElement(stringArr) {
//     let arr = [];

//     for (let i = 0; i < stringArr.length; i += 2) {
//         arr[arr.length] = stringArr[i];
//     }
//     return arr.join(' ');
// }

// //console.log(evenElement(['20', '30', '40', '50', '60']));


// let arr = [10, 20, 30, 40, 50];

// let [first, second, ...newArr] = arr;  //   => rest operator => taking all the left elements into arr

// //console.log(newArr);

// function takeRest(...params) {   // => ... rest operator 
//     console.log(...params);     // => ... spread operator 
// }

// //takeRest(1, 2, 3, 4)

// // 2.	Last K Numbers Sequence


// // TODO

// // 3.	Sum First Last

// function SumArrElements(input) {

//     return result = Number(input.shift()) + Number(input.pop());
// }

// //console.log(SumArrElements(['20', '30', '40']));

// // 4.	Negative / Positive Numbers

// function ArrangeArr(input) {

//     let arr = [];

//     for (let i = 0; i < input.length; i++) {

//         if (Number(input[i]) < 0) {
//             arr.unshift(Number(input[i]))
//         } else {
//             arr.push(Number(input[i]))
//         }
//     }
//     return arr.join('\n')
// }

// //console.log(ArrangeArr([7, -2, 8, 9]));

// // // SORT 

// const numbers = [2, 5, 6, 8, 1, 4, 6, 13, -13];

// function sortnumbers(a, b) {
//     return a - b;
// }

// numbers.sort(sortnumbers);   // function sort

// numbers.sort((a, b) => { return a - b });  // Lambda

// numbers.sort((a, b) => a - b);  // Lambda implicit 

// const names = ['Stefan', 'BinBin', 'stefan', 'binbinius', 'Pachik'];

// names.sort();   // will sort by ASCII 

// names.sort((a, b) => a.localeCompare(b))  //=> will compare lecuricographical the strings 

// // // 6.	Bigger Half

// function biggerHalf(input) {

//     return input
//         .sort((a, b) => a - b)
//         .slice(Math.floor(input.length / 2));;

// }

// // //console.log(biggerHalf([4, 7, 2, 5]));
// // //console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

// // // REDUCE 

// let sampleOne = [10, 10, 10, 10, 10];

// let sampleTwo = [12, 34, 2, 3, 6, 12];

// const sum = sampleOne.reduce((acc, cur) => acc + cur);   // reduce => lambda sum function

// const avg = sampleOne.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);   // lambda  => lambda avg function

// const max = sampleTwo.reduce((acc, cur) => acc > cur ? acc : c);  // lambda  => lambda max element function

// //console.log(sum)
// //console.log(avg)
// //console.log(max);

// // 10.	Diagonal Sums

// function sumMatrix(matrix) {

//     let x = 0;
//     let y = 0;

//     let c = matrix.length;

//     for (let i = 0; i < matrix.length; i++) {
//         x += matrix[i][i];
//         y += matrix[i][c - i - 1];
//     }

//     const result = [x, y];
//     return result.join(' ');

// }

// // console.log(sumMatrix([
// //     [20, 40],
// //     [10, 60]
// // ]));


// let matrix = [
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ];

// // for (let row of matrix) {         // print matrix
// //     console.log(row.join('\t'));
// // }

// function matrixReducer(acc, cur) {
//     return acc.concat(cur);
// }

// let flatArray = matrix.reduce(matrixReducer);

// //console.log(flatArray.join(' '));


// 11.	Equal Neighbors. // => Not completed TODO 

function equalNeighbors(matrix) {

    let pairs = 0;

    let colLengts = [];

    for (let i = 0; i < matrix.length; i++) {
        colLengts[i] = matrix[i].length
    }

    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 1; j < matrix[i].length; j++) {

    //         if (matrix[i][j - 1] == matrix[i][j]) {
    //             pairs++;
    //         }
    //     }
    // }

    for (let c = 0; c < colLengts[c]; c++) {
        for (let r = 1; r < matrix.length; r++) {

            if (matrix[r - 1][c] == matrix[r][c]) {
                pairs++;
            }
        }
    }

    return pairs;

}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
