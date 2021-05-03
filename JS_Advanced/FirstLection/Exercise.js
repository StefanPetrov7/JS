// 1.	Fruit

// function fruitRequest(fruit, grams, priceKg) {

//     let kgNeeded = Number(grams) / 1000

//     let moneyNeeded = kgNeeded * Number(priceKg)

//     console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kgNeeded.toFixed(2)} kilograms ${fruit}.`);

// }

// fruitRequest('orange', 2500, 1.80);

// 2.	Greatest Common Divisor - GCD

// function greatestDivisor(x, y) {

//     let bigNum = x > y ? x : y;
//     let smallNum = x > y ? y : x;

//     while (smallNum != 0) {

//         let temp = smallNum;
//         smallNum = bigNum % smallNum;
//         bigNum = temp;
//     }

//     console.log(bigNum);
// }

// greatestDivisor(15, 5)
// greatestDivisor(2154, 458)

// 3.	Same Numbers

// function sameNumbers(x) {

//     x = x.toString();

//     if (x.length > 1) {

//         let total = Number(x[0])
//         let counter = 1;

//         for (let i = 1; i < x.length; i++) {

//             let numOne = Number(x[i])
//             let numTwo = Number(x[i - 1]);
//             total += numOne;

//             if (numOne == numTwo) {
//                 counter++;
//             }
//         }

//         if (counter == x.length) {
//             console.log(true);
//             console.log(total);
//         } else {
//             console.log(false);
//             console.log(total);
//         }
//         return
//     }
//     console.log(true);
//     console.log(x);
// }


// sameNumbers(2)




