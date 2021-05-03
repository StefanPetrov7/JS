// // // 1.	Echo Function

// function echo(text){
//     console.log(text.length);
//     console.log(text);
//    }

//    echo('Here We Go Again');


// // 2.	String Length

// function calculateStrings(first, second, third){
//     let result = 0;
//     result = first.length + second.length + third.length;
//     let average = Math.floor(result/3);

//     console.log(result)
//     console.log(average)
// }

// // calculateStrings('Stef', 'Stef', 'Stef')


// // 3.	Largest Number

// function biggestNumber(numOne, numTwo, numThree){

//     let result;

//     if(numOne > numTwo && numOne > numThree){
//         result = numOne;
//     }else if (numTwo > numOne && numTwo > numThree){
//         result = numTwo
//     }else {
//         result = numThree
//     }
//     console.log(`The largest number is ${result}.`)
// }

// // biggestNumber(4,7,2);

// //4.	Circle Area

// function solve(radius){

//     let inputType = typeof(radius)

//     if (inputType ==='number'){
//         let area = Math.pow(radius,2)* Math.PI;
//         console.log(area.toFixed(2))
//     } else{
//         console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
//     }
// }

// solve(2);

// // 5.	Math Operations

// function mathOperation(numOne, numTwo, operator) {

//     let result;

//     switch (operator) {
//         case '+': result = numOne + numTwo; break;
//         case '-': result = numOne - numTwo; break;
//         case '/': result = numOne / numTwo; break;
//         case '*': result = numOne * numTwo; break;
//         case '**': result = numOne ** numTwo; break;
//         case '%': result = numOne % numTwo; break;
//     }

//     console.log(result);

// }

// mathOperation(2, 2, '**');


// // // 6.	Sum of Numbers N…M

// function sumOfNums(n, m) {

//     let numOne = Number(n);
//     let numTwo = Number(m);
//     let result = 0;

//     for (let i = numOne; i <= numTwo; i++) {

//         result += i;
//     }

//     console.log(result);

// }

// SumOfNums(1, 5);

// function dayOfWeek(day) {

//     let weekDay;

//     switch (day) {
//         case 'Monday': weekDay = 1; break;
//         case 'Tuesday': weekDay = 2; break;
//         case 'Wednesday': weekDay = 3; break;
//         case 'Thursday': weekDay = 4; break;
//         case 'Friday': weekDay = 5; break;
//         case 'Saturday': weekDay = 6; break;
//         case 'Sunday': weekDay = 7; break;
//         default: weekDay = 'error' ; break;
//     }

//     console.log(weekDay);
// }

// dayOfWeek(1);

// // 8.	Square of Stars

// function sqrStarts(n) {

//     let result = "";

//     if (n == 1) {
//         return console.log('*')
//     }

//     for (let i = 0; i < n; i++) {

//         for (let j = 0; j < n; j++) {
//             result += '* '
//         }
//         result += '\n'
//     }

//     console.log(result);
// }

// sqrStarts(2);

// // 9.	Aggregate Elements

// function arraySum(input) {

//     let arr = [];
//     let counter = 0;

//     for (let i = 0; i < input.length; i++) {

//         let num = Number(input[i]) ? input[i] : null;

//         if (num != null) {
//             arr[counter] = num;
//             counter++;
//         }
//     }

//     let totalSym = 0;
//     let inverseSum = 0;
//     let concat = "";

//     for (let i = 0; i < arr.length; i++) {

//         totalSym += arr[i];
//         inverseSum +=1/arr[i];
//         concat += arr[i];
//     }

//     console.log(totalSym);
//     console.log(inverseSum);
//     console.log(concat);
// }

// arraySum('[1, 2, 3]')




