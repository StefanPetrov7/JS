// => 1.	Echo Function

function echo(text) {
    console.log(text.length);
    console.log(text);
}

//    echo('Here We Go Again');


// ========================================================================================================================================================>


// => 2.	String Length

function calculateStrings(first, second, third) {
    let result = 0;
    result = first.length + second.length + third.length;
    let average = Math.floor(result / 3);

    console.log(result);
    console.log(average);
}

// calculateStrings('Stef', 'Stef', 'Stef');


// ========================================================================================================================================================>


// => 3.	Largest Number

function biggestNumber(numOne, numTwo, numThree) {

    let result;

    if (numOne > numTwo && numOne > numThree) {
        result = numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
        result = numTwo;
    } else {
        result = numThree;
    }
    console.log(`The largest number is ${result}.`);
}

// biggestNumber(4,7,2);


// ========================================================================================================================================================>


//  => 4.	Circle Area

function circleArea(radius) {

    if (typeof (radius) === 'number') {
        return console.log((Math.PI * radius ** 2).toFixed(2));
    }
    else {
        return console.log(`We can not calculate the circle area, because we receive a ${typeof (radius)}.`);
    }

}

// circleArea('test');


// ========================================================================================================================================================>


// => 5. Math Operations 

function mathCalculation(num1, num2, operator) {

    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);

}

// mathCalculation(4, 2, '**');


// ========================================================================================================================================================>


// => 6. Sum of Numbers N…M 

function sumOfNUmbers(x, y) {
    let sum = 0;
    let numOne = Number(x);
    let numTwo = Number(y);

    for (let index = numOne; index <= numTwo; index++) {
        sum += index;
    }

    console.log(sum);
}

// sumOfNUmbers(-8, 20);


// ========================================================================================================================================================>


// => 7. Day of Week 


function dayOfWeek(day) {
    let weekDay;

    switch (day) {
        case 'Monday': weekDay = 1; break;
        case 'Tuesday': weekDay = 2; break;
        case 'Wednesday': weekDay = 3; break;
        case 'Thursday': weekDay = 4; break;
        case 'Friday': weekDay = 5; break;
        case 'Saturday': weekDay = 6; break;
        case 'Sunday': weekDay = 7; break;
        default: weekDay = 'error'; break;
    }

    console.log(weekDay);
}


// dayOfWeek('test');


// ========================================================================================================================================================>


// => 8. Square of Stars 

function printRectangle(size = 5) {

    let result = '';

    if (size == 1) {
        return console.lo('*');
    }

    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {
            result += '* ';
        }

        result += '\n';
    }

    console.log(result);
}

// printRectangle(12);


// ========================================================================================================================================================>


// => 9. Aggregate Elements 


function arrayManipulation(inputArray) {

    let sumArray = inputArray.reduce((a, b) => a + b, 0);

    let inverseSum = 0;

    for (let i = 0; i < inputArray.length; i++) {

        inverseSum += 1 / inputArray[i];
    }

    let concatArray = inputArray.join('');

    console.log(sumArray);
    console.log(inverseSum);
    console.lg(concatArray);
}


// arrayManipulation([1, 2, 3] );


// ========================================================================================================================================================>


// => Exercise: Syntax, Functions and Statements 

// => 1. Fruit

function moneyForFruits(inputFruit, inputWeight, priceKG) {

    let pricePerKg = Number(priceKG);
    let weight = Number(inputWeight / 1000);
    let fruit = String(inputFruit);

    return `I need $${(pricePerKg * weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`;

}

//console.log(moneyForFruits('orange', 2500, 1.80));


// ========================================================================================================================================================>


// => 2. Greatest Common Divisor - GCD 

function GCD(numOne, numTwo) {

    let biggestNum = Math.max(Math.abs(numOne), Math.abs(numTwo));
    let smallerNum = Math.min(Math.abs(numOne), Math.abs(numTwo));

    while (smallerNum != 0) {

        let tempNum = smallerNum;
        smallerNum = biggestNum % smallerNum;
        biggestNum = tempNum;

    }
    return biggestNum;

}


//console.log(GCD(2154, 458));


// ========================================================================================================================================================>


// => 3. Same Numbers 

function isNUmbersSame(number) {

    let isValid = true;

    let array = String(number).split('').map((x) => {
        return Number(x);
    });

    let totalSum = array.reduce((acc, cur) => acc + cur, 0);

    if (Number.isInteger(number)) {

        for (let i = 0; i < array.length - 1; i++) {

            let curElement = array[i];

            if (curElement == array[i + 1]) {
                continue;
            }
            else {
                isValid = false;
                break;
            }

        }

        if (isValid) {
            console.log(isValid);
            console.log(totalSum);
        }
        else {
            console.log(isValid);
            console.log(totalSum);
        }

    }
    else {
        throw new Error('Not an integer number');
    }

}

//isNUmbersSame(23456);


// ========================================================================================================================================================>


// => 4. Time to Walk 

// working only with small values


function calculateTime(steps, stepLenght, kmH) {

    const distanceM = Number(steps) * Number(stepLenght);
    const metersPerHour = kmH * 1000;
    const speedMeterPerSecond = 3600 / metersPerHour;    // should be opposite however answer is correct !!!! 
    const breaks = (Math.floor(distanceM / 500) * 60);
    let sec = (distanceM * speedMeterPerSecond) + breaks;

    let hours = Math.floor(sec / 3600);
    sec -= (hours * 3600);
    let min = Math.floor(sec / 60);
    sec -= (min * 60);

    hours = hours.toFixed(0).padStart(2, '0');
    min = min.toFixed(0).padStart(2, '0');
    sec = sec.toFixed(0).padStart(2, '0');

    return `${hours}:${min}:${sec}`;
}


//console.log(calculateTime(4000, 0.60, 5));


// ========================================================================================================================================================>


// => 5. Road Radar 


function speedLimit(speedInput, area) {

    const driverSpeed = Number(speedInput);
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentaLimit = 20;

    let result = '';
    let speedVariance = 0;
    let areaSpeed = 0;
    let speedTooken = '';

    if (area == 'motorway') {
        speedVariance = driverSpeed > motorwayLimit ? driverSpeed - motorwayLimit : 0;
        areaSpeed = motorwayLimit;
    } else if (area == 'interstate') {
        speedVariance = driverSpeed > interstateLimit ? driverSpeed - interstateLimit : 0;
        areaSpeed = interstateLimit;
    } else if (area == 'city') {
        speedVariance = driverSpeed > cityLimit ? driverSpeed - cityLimit : 0;
        areaSpeed = cityLimit;
    } else if (area == 'residential') {
        speedVariance = driverSpeed > residentaLimit ? driverSpeed - residentaLimit : 0;
        areaSpeed = residentaLimit;
    }

    if (speedVariance > 0) {

        if (speedVariance <= 20) {
            speedTooken = 'speeding';
        } else if (speedVariance <= 40) {
            speedTooken = 'excessive speeding';
        } else {
            speedTooken = 'reckless driving';
        }

        return `The speed is ${speedVariance} km/h faster than the allowed speed of ${areaSpeed} - ${speedTooken}`;

    } else {
        return `Driving ${speedInput} km/h in a ${areaSpeed} zone`;
    }

}


// ========================================================================================================================================================>

//  => 6. Cooking by Numbers

function numberOperations(num, cmd1, cmd2, cmd3, cmd4, cmd5) {

    let number = Number(num);
    let cmdArray = [cmd1, cmd2, cmd3, cmd4, cmd5];
    let resultArray = [];

    for (let i = 0; i < cmdArray.length; i++) {

        switch (cmdArray[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number /= Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.8; break;
        }

        resultArray.push(number);
    }

    return resultArray.join('\n');
}

//console.log(numberOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet' ));


// console.log(speedLimit(40, 'city'));


// ========================================================================================================================================================>


// => 7. Validity Checker 


function validityChecker(x1, y1, x2, y2) {

    const n1 = 0;
    const n2 = 0;

    let resultOne = Math.sqrt(Math.pow((n1 - x1), 2) + Math.pow((n2 - y1), 2));
    let resultTwo = Math.sqrt(Math.pow((n1 - x2), 2) + Math.pow((n1 - y2), 2));
    let resultThree = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let resultOneIsValid = Number.isInteger(resultOne) ? 'valid' : 'invalid';
    let resultTwoIsValid = Number.isInteger(resultTwo) ? 'valid' : 'invalid';
    let resultThreeIsValid = Number.isInteger(resultThree) ? 'valid' : 'invalid';

    return `{${x1}, ${y1}} to {${n1}, ${n2}} is ${resultOneIsValid}\n{${x2}, ${y2}} to {${n1}, ${n2}} is ${resultTwoIsValid}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${resultThreeIsValid}`;

}


// console.log(validityChecker(2, 1, 1, 1 ));


// ========================================================================================================================================================>


// => 8. Words Uppercase 


function wordsToUpperCase(text) {

    let words = text.match(/\b(\w+)\b/g);
    words = words.map(word => word.toUpperCase());
    return words.join(', ');
}

//console.log(wordsToUpperCase('Hi, how are you?'));

// ========================================================================================================================================================>


// => ARRAYS AND NESTED ARRAYS LAB + EXERCISE 

// => Exercise:

// => 1. Print an Array with a Given Delimiter 


function print(array, delimeter) {

    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i] + delimeter;
    }
    result = result.slice(0, -1);
    return result;
}

function printSecond(array, delimeter) {

    let joinedArr = array.join(delimeter);
    return joinedArr;

}

//console.log(printSecond(['One','Two', 'Three', 'Four', 'Five'], '-' ));


// ========================================================================================================================================================>


// => 2. Print Every N-th Element from an Array  

function returnArray(array, n) {

    return array.filter((value, index) => index % n == 0);
}

//console.log(returnArray(['5', '20', '31', '4', '20'], 2));


// ========================================================================================================================================================>


// => 3. Add and Remove Elements

function modifyArr(cmd) {

    const arr = [];

    for (let i = 1; i <= cmd.length; i++) {

        if (cmd[i - 1] == 'add') {
            arr.push(i);
        } else {
            arr.pop();
        }
    }

    return arr.length > 0 ? arr.join('\n') : 'Empty';
}

//console.log(modifyArr(['add', 'add', 'add', 'add']));
//console.log(modifyArr(['remove', 'remove', 'remove']));
//console.log(modifyArr(['add', 'add', 'remove', 'add', 'add']));


// ========================================================================================================================================================>


// => 4. Rotate Array 

function rotateArray(array, n) {

    let rotations = n % array.length;

    let elements = array.splice(array.length - rotations, rotations);
    array.splice(0, 0, elements);  // note that the modified array has different structure as array on the first element;


    return array.join(' ');
}

//console.log(rotateArray(['1', '2', '3', '4'], 2));
//console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));

// ========================================================================================================================================================>


// => 5. Extract Increasing Subsequence from Array 


// function orderBy(array) {

//     let curBiggestEl = array[0];

//     for (let i = 0; i < array.length - 1; i++) {

//         let curElement = array[i + 1];

//         if (curElement >= curBiggestEl) {
//             curBiggestEl = curElement;
//         } else {
//             array.splice(i + 1, 1);
//             i--;
//         }
//     }

//     return array;
// }


// => Example for reduce and all the argumentns 
// => acc => previous element or the accumlated value 
// => culEl => will be the current element 
// => index is an optional element which tracks the current index of iteration 
// => initialArray is the array on which we execute the reduce method, also optional in the call back function 


function orderByIncreasing(array) {

    return array.reduce((acc, curEl, index, initialArray) => {

        if (acc.length === 0 || curEl >= acc[acc.length - 1]) {
            acc.push(curEl);
        }

        return acc;

    }, []);

}


// console.log(orderByIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));


// ========================================================================================================================================================>


// => 6. List of Names 

function sortNames(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b)).reduce((accResult, prev, index, initialArray) => {

        let counter = index + 1;
        let element = counter + '.' + prev;
        accResult.push(element);
        return accResult;
    }, []);;

    return sorted.join('\n');
}

// console.log(sortNames(['John', 'Bob', 'Christina', 'Ema']));


// ========================================================================================================================================================>


// => 7. Sorting Numbers 

function sortArray(array) {

    let sorted = [];
    let count = array.length;
    let next = true;

    for (let i = 0; i < count; i++) {

        let element;
        if (next) {
            element = Math.min(...array);
            next = false;
        } else {
            element = Math.max(...array);
            next = true;
        }
        sorted.push(element);
        let index = array.indexOf(element);
        array.splice(index, 1);
    }

    return sorted;
}


// ========================================================================================================================================================>


// console.log(sortArray([1, 65, 3, 52, 48, 63, 31, -3, 18]));


function sortByTwoCriteria(array) {

    array.sort((x, y) => mySort(x, y));
    return array.join('\n');

    function mySort(x, y) {

        if (x.length < y.length) {
            return -1;
        } else if (y.length < x.length) {
            return 1;
        } else {
            return x.localeCompare(y);
        }
    }
}


// ========================================================================================================================================================>


//console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']));


function magicNumber(matrix) {

    let arr = matrix.reduce((acc, p, i, a) => {

        let result = p.reduce((sum, p) => sum + p);
        acc.push(result);
        return acc;

    }, []);


    for (let col = 0; col < matrix.length; col++) {

        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {

            let curElement = matrix[row][col];
            colSum += curElement;
        }

        arr.push(colSum);
    }

    let areSame = arr.every(x => x === arr[0]);

    if (areSame) {
        return true;
    } else {
        return false;
    }

}

function solve9Advanced(matrix) {

    return matrix
        .map(row => row
            .reduce((acc, c) => acc + c))
        .every((element, r, arr) => element === arr[0])
        && matrix
            .reduce((acc, c) => acc
                .map((element, r) => element + c[r]))
            .every((element, r, arr) => element === arr[0]);
}


// console.log(solve9Advanced([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
// ]));


// ========================================================================================================================================================>


// 10. => *Tic-Tac-Toe


function game(moves) {

    let field = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = ['X'];
    let winCombination = [player[0].repeat(3)];
    let takenSquares = 0;

    for (let i = 0; i < moves.length; i++) {

        if (takenSquares == 9) {
            break;
        }

        let turn = moves[i].split(' ').map(x => Number(x));

        if (play(turn[0], turn[1])) {

            if (isGameWon()) {

                let printedField = field.map(row => row.join('\t')).join('\n');
                return `Player ${winCombination[0]} wins!\n${printedField}`;
            }
        }
    }

    function isGameWon() {

        let combination = String(winCombination[0]).repeat(3);

        let result = false;

        result = field    // checking the rows 
            .map(row => row
                .reduce((acc, c) => acc + c))
            .some((element, r, arr) => element == combination)
            || field
                .reduce((acc, c) => acc
                    .map((element, r) => element + c[r]))
                .some((element, r, arr) => element == combination);

        if (result == false) {    // checking diagonals
            let primeDiagonal = field[0][0] + field[1][1] + field[2][2];
            let secondaryDiagonal = field[0][2] + field[1][1] + field[2][0];

            result = primeDiagonal == combination || secondaryDiagonal == combination ? true : false;

        }

        return result;
    }

    function play(r, c) {

        if (field[r][c] == false) {

            field[r][c] = String(player[0]);
            player = player[0] == 'X' ? player[0] = ['O'] : player[0] = ['X'];
            winCombination = player[0] == 'X' ? winCombination = ['O'] : winCombination = ['X'];
            takenSquares++;
            return true;

        } else {
            console.log('This place is already taken. Please choose another!');
            return false;
        }
    }

    let noBodyWins = 'The game ended! Nobody wins :(';
    return `${noBodyWins}\n${field.map(row => row.join('\t')).join('\n')}`;
}


//console.log(game(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0'] ));
//console.log(game(['0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1']));
//console.log(game(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0'] ));



// ========================================================================================================================================================>


function spiralMatrix(x, y) {

    const matrix = Array(x).fill().map(() => Array(y).fill(0));
    let r = 0;
    let c = 0;
    let direction = 'right';
    let counter = 1;

    while (true) {

        matrix[r][c] = counter;

        if (counter == x * y) {
            break;
        }

        if (direction == 'right') {
            c++;

            if (isValid(x, y, r, c)) {
                counter++;
                continue;
            } else {
                c--;
                direction = 'down';
            }
        }

        if (direction == 'down') {
            r++;

            if (isValid(x, y, r, c)) {
                counter++;
                continue;
            } else {
                r--;
                direction = 'left';
            }
        }

        if (direction == 'left') {
            c--;

            if (isValid(x, y, r, c)) {
                counter++;
                continue;
            } else {
                c++;
                direction = 'up';
            }
        }

        if (direction == 'up') {
            r--;

            if (isValid(x, y, r, c)) {
                counter++;
                continue;
            } else {
                r++;
                direction = 'right';
            }
        }
    }

    return matrix.map(row => row.join(' ')).join('\n');

    function isValid(rSize, cSize, r, c) {

        let rowSize = rSize;
        let colSize = cSize;
        if (r >= 0 && r <= rowSize - 1 && c >= 0 && c <= colSize - 1 && matrix[r][c] == 0) {
            return true;
        } else {
            return false;
        }
    }
}


// console.log(spiralMatrix(5, 5));
// console.log(spiralMatrix(3, 3));

// ====================================================================================================================================================>

// => Objects practice 


// => Obj declaration 

// const person = {
//     firstName: 'Stefan',
//     lastName: 'Petrov',
//     age: 38
// };


// => declaring empty obj, on which later on we can add properties and methods

const objEmpty = {};

// => Lab task 1. City Record 

function createCityObject(name, population, treasury) {

    const city = {
        name: String(name),
        population: Number(population),
        treasury: Number(treasury)
    };

    return city;
}


//console.log(createCityObject('Ruse', 150000, 5000000));

// => working with the properties 

const ruse = createCityObject('Ruse', 150000, 5000000);

// console.log(ruse.name);

// console.log(ruse['name']);   // name of the properties [keys] are strings, New properties can also be added the same way. 

let population = 'population';

// console.log(ruse[population]);  // with literal 

// => adding property 

ruse.location = 'Bulgaria';

// console.log(ruse.location);

// => adding propery with spacing it is possible, however it has to be reached via the indexing brackts afterwords 

ruse['Old Name'] = 'Prista';

// console.log(ruse);

// => delete property 

delete ruse['Old Name'];

// console.log(ruse);

ruse.array = [1, 2, 3, 4, 5];

let newArray = Array.from(ruse.array);

ruse.array.shift();;

// console.log(ruse.array);
// console.log(newArray);

// destructing an object 

let { name, population: newPopulation } = ruse;

// console.log(name, newPopulation);

const assocArray = {
    'first': 5,
    'second': 10,
    'third': 15,
};

// for (let key in assocArray) {
//     console.log(key);
// }

const keys = Object.keys(assocArray);  // Method to take all the key values, returns an iterator 
const values = Object.values(assocArray);  // Method to take all the key values , returns iterator
const entries = Object.entries(assocArray); // Returns tuples (kvp pairs)

// for (let [k, v] of entries) {  // destructing with for of loop 
//     console.log(k, 'key');
//     console.log(v, 'value');
// }

// console.log(keys);
// console.log(values);
// console.log(entries);


// Lab task => 2. Town Population 

function townPopulation(twonsArray) {

    let towns = {};

    for (let i = 0; i < twonsArray.length; i++) {
        let [townName, population] = twonsArray[i].split(' <-> ').filter(x => x.length > 0);
        population = Number(population);

        if (towns[townName] != undefined) {
            population += towns[townName];
        }

        towns[townName] = population;
    }

    for (let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}


// townPopulation(
// ['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000',
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']
// );



// => using function in objects (aka methods)

const methodObj = {
    firstName: 'Stefan',
    lastName: 'Petrov',
    age: 23,
    sayHi() {
        return 'Hello';
    },
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

//console.log(methodObj.fullName());

const sayHi = methodObj.sayHi;
const fullName = methodObj.fullName;

//console.log(sayHi());
//console.log(fullName());   // function is deatched from the object and this. is for the context of the objects !!!! this should avoid to be used when possible


const methodObj2 = {
    firstName: 'Luben',
    lastName: 'Vulchev',
};


methodObj2.fullName = fullName;

//console.log(methodObj2.fullName());   // same function was passed to new object by reference !!!!


function cityTaxes(name, population, treasury) {

    const city = {
        name: String(name),
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentToIncrease) {
            this.population += Math.floor(this.population * percentToIncrease) / 100;
        },
        applyRecession(percentToDecrease) {
            this.treasury -= Math.ceil(this.treasury * percentToDecrease) / 100;
        },
    };

    return city;
}

// const city = cityTaxes ('Tortuga', 7000, 15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);


// => Composing objects 

let cityName = 'Sofia';
let peopleCount = 1000000;
let country = 'BG';

let sofia = { cityName, peopleCount, country };

//console.log(sofia);

// => factory function avoiding to use .this

function createRect(height, width) {

    const rect = { width, height };

    rect.getArea = () => {
        return width * height;
    };

    return rect;
}


// => Lab taks 4. Object Factory 


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];


function factory(library, orders) {
    const resultArray = [];

    for (let order of orders) {
        const composed = Object.assign({}, order.template);

        for (let part of order.parts) {
            composed[part] = library[part];
        }

        resultArray.push(composed);
    }
    return resultArray;
}

const products = factory(library, orders);
//console.log(products);

const player = products[3];
//player.play('Lil Wayne', 'Fireman');


// => Deep copy method

// function deepCopy(target) {

//     if (Array.isArray(target)) {
//         return target.map(deepCopy);
//     } else if (typeof target == 'object') {
//         return [...Object.entries(target)].reduce((acc, [k, v]) => Object.assign(acc, { [k]: deepCopy(v) }), {});
//     } else {
//         return target;
//     }
// }


// ====================================================================================================================================================>
// => Exercises: Objects & Composition 
// => Task 1. Calorie Object 

function taskOne(array) {

    let resultObj = {};

    for (let i = 0; i < array.length; i += 2) {

        resultObj[array[i]] = Number(array[i + 1]);
    }
    return resultObj;
}


// console.log(taskOne(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

// ====================================================================================================================================================>

// => Taks 2. Construction Crew 


function taskTwo(workerObj) {

    if (workerObj.dizziness == false) {
        return workerObj;
    }

    workerObj.levelOfHydrated += workerObj.weight * 0.1 * workerObj.experience;
    workerObj.dizziness = false;
    return workerObj;
}

//console.log(taskTwo({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));

// ====================================================================================================================================================>

// => Task 3. Car Factory 


function taskThree(carOrder) {

    const parts = {
        engine: {
            small: { power: 90, volume: 1800 },
            normal: { power: 120, volume: 2400 },
            monster: { power: 200, volume: 3500 }
        },
        carriage: {
            hatchback: { type: 'hatchback', color: 'requiered' },
            coupe: { type: 'coupe', color: 'requiered' }
        },
    };

    const car = {};
    car.model = carOrder.model;

    for (let engineType in parts.engine) {

        const engine = parts.engine[engineType];

        if (carOrder.power <= engine.power) {
            car.engine = engine;
            break;
        }
    };

    const carriage = parts.carriage[carOrder.carriage];
    carriage.color = carOrder.color;
    car.carriage = carriage;
    let wheelSize = carOrder.wheelsize % 2 != 0 ? carOrder.wheelsize : carOrder.wheelsize - 1;
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    return car;
}

//console.log(taskThree({ model: 'VW Golf II', power: 110, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));

//====================================================================================================================================================>

// Task 4. Heroic Inventory 

function taskFour(data) {

    const heroes = [];
    for (let i = 0; i < data.length; i++) {
        const curData = data[i].split(' / ').filter(x => x.length > 0);
        const hero = createHero(curData);
        heroes.push(hero);
    }

    return JSON.stringify(heroes);

    function createHero(arr) {
        return {
            name: arr[0],
            level: Number(arr[1]),
            items: arr[2] ? arr[2].split(', ') : [],
        };
    }
}

//console.log(taskFour(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));

//====================================================================================================================================================>


function taskFive(data) {
    const products = {};

    for (let i = 0; i < data.length; i++) {

        let [town, product, price] = data[i].split(' | ');

        if (products.hasOwnProperty(product) == false) {
            products[product] = {};
        }
        price = Number(price);
        products[product][town] = price;
    }

    let result = [];

    for (let key in products) {
        let productsSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let cheapestTown = productsSorted[0];
        result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
    }

    return result.join('\n');
}


// console.log(taskFive(
//     ['Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10']
// ));

// console.log(taskFive(
//     ['Sofia City | Audi | 100000',
//         'Sofia City | BMW | 100000',
//         'Sofia City | Mitsubishi | 10000',
//         'Sofia City | Mercedes | 10000',
//         'Sofia City | NoOffenseToCarLovers | 0',
//         'Mexico City | Audi | 1000',
//         'Mexico City | BMW | 99999',
//         'Mexico City | Mitsubishi | 10000',
//         'New York City | Mitsubishi | 1000',
//         'Washington City | Mercedes | 1000']
// ));


//====================================================================================================================================================>

// => Task 6. Store Catalogue 

function solve6(inputArr) {

    let catalog = {};

    for (let i = 0; i < inputArr.length; i++) {
        let [product, price] = inputArr[i].split(' : ');
        price = Number(price);
        const firtstLetter = product[0];

        if (catalog.hasOwnProperty(firtstLetter) == false) {
            catalog[firtstLetter] = {};
        }

        catalog[firtstLetter][product] = price;
    }

    let sortedKeys = Object.keys(catalog).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedCatalog = {};

    for (let key of sortedKeys) {
        sortedCatalog[key] = catalog[key];
    }

    let result = [];

    for (let keyLetter in sortedCatalog) {

        let curLetter = Object.entries(catalog[keyLetter]).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));
        result.push(keyLetter);

        let productsAsStrings = curLetter
            .map(pro => `  ${pro[0]}: ${pro[1]}`)
            .join('\n');

        result.push(productsAsStrings);

        // for (const key in curLetter) {
        //     let values = Object.values(curLetter[key]);
        //     result.push(`  ${values[0]}: ${values[1]}`);
        // }
    }

    return result.join('\n');
}

// console.log(solve6(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
// 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']));

//=====================================================================================================================================================>

// Task 7. Towns to JSON 

function solve7(inputArr) {

    let result = [];
    let [Town, Latitude, Longitude] = inputArr[0].split(' | ');

    for (let i = 1; i < inputArr.length; i++) {

        let [city, lat, long] = inputArr[i].replace(/^\|\s*|\s*\|$/g, '').split(/ \| /);

        let obj = {
            Town: city,
            Latitude: parseFloat(Number(lat).toFixed(2)),
            Longitude: parseFloat(Number(long).toFixed(2))
        };
        result.push(obj);

    }
    return JSON.stringify(result);
}

function solve7Updated(inputArr) {

    let titles = serializeStr(inputArr[0]);
    let rows = inputArr
        .slice(1)
        .map(row => serializeStr(row).reduce(accObject, {}));

    return JSON.stringify(rows);

    function serializeStr(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => parseNumber(x));
    }

    function parseNumber(x) {
        return isNaN(Number(x)) ? x : Number(Number(x).toFixed(2));
    }

    function accObject(obj, el, i) {
        obj[titles[i]] = el;
        return obj;
    }
}

// console.log(solve7Updated(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']));


//=====================================================================================================================================================>

// Task 8. Rectangle 

function rectangle(width, height, color) {

    return {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.substring(1),
        calcArea: function () {
            return this.width * this.height;
        }
    };
}


//let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


//=====================================================================================================================================================>

// Task 9. Sorted List* 

function createSortedList() {

    const array = [];
    return {
        add(x) {
            if (isNaN(x)) {
                throw new Error('Invalid input data for number');
            }
            array.push(x);
            this.size++;
            array.sort((a, b) => a - b);
        },
        remove(index) {
            if (isNaN(index) || index < 0 || index > array.length - 1) {
                throw new Error('Invalid input data for index');
            }
            array.splice(index, 1);
            this.size--;
            array.sort((a, b) => a - b);
        },
        get(index) {
            if (isNaN(index) || index < 0 || index > array.length - 1) {
                throw new Error('Invalid input data for index');
            }
            return array[index];
        },
        size: 0
    };
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
// console.log(list.size);

//=====================================================================================================================================================>

// Task 10. Heroes !!!! Decorator function 

function solve10() {

    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    });

    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe`);
            state.stamina--;
        }
    });

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        };

        return Object.assign(state, canFight(state));
    };

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        };

        return Object.assign(state, canCast(state));
    };

    return { mage: mage, fighter: fighter };
}

// let create = solve10();
// const scorcher = create.mage('Scorcher');
// scorcher.cast('fireball');
// scorcher.cast('thunder');
// scorcher.cast('light');
// const scorcher2 = create.fighter('Scorcher 2');
// scorcher2.fight();
// console.log(scorcher2.stamina);
// console.log(scorcher.mana);


//=====================================================================================================================================================>

// => Task 11. Jan's Notation * 

function solveNotation(array) {

    const numbers = array.filter(x => Number(x));
    const operations = array.filter(x => isNaN(x));

    if (numbers.length - 1 != operations.length) {
        return numbers.length - 1 > operations.length ? 'Error: too many operands!' : 'Error: not enough operands!';
    }

    for (let i = 0; i < operations.length; i++) {

        let op = operations[i];
        let op1 = numbers.pop();
        let op2 = numbers.pop();
        let result = applyOperation(op1, op2, op);
        numbers.push(result);
    }

    return numbers[0];

    function applyOperation(op1, op2, op) {
        const result = {
            '+': () => op1 + op2,
            '-': () => op1 - op2,
            '*': () => op1 * op2,
            '/': () => op1 / op2,
        };
        return result[op]();
    }
}

function solveUpdated(array) {

    const numbers = array.filter(x => Number(x)).reverse();
    const operations = array.filter(x => isNaN(x));

    if (numbers.length - 1 != operations.length) {
        return numbers.length - 1 > operations.length ? 'Error: too many operands!' : 'Error: not enough operands!';
    }

    return numbers.reduce((acc, p, i) => {

        if (operations[i - 1] == '+') {
            return p + acc;
        } else if (operations[i - 1] == '-') {
            return p - acc;
        } else if (operations[i - 1] == '/') {
            return p / acc;
        } else {
            return p * acc;
        }
    });

}

// console.log(solveNotation([5, 3, 4, '*', '-']));
// console.log(solveNotation([7, 33, 8, '-']));
// console.log(solveNotation([15, '/']));
// console.log(solveNotation([11, 2, 31, '+', '/']));
// console.log(solveNotation([3, 18, 101, 1, -1, '+', '*', '+', '/']));

//=====================================================================================================================================================>

// Task 5. => Assembly Line  // Decorator Function 

function createAssemblyLine() {

    const assemblyLine = {

        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 22;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            };
        },
        hasAudio: (car) => {
            car.currentTrack = {
                name: null,
                artist: null,
            };
            car.nowPlaying = () => {
                if (car.currentTrack != null) {
                    console.log(`${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };

    return assemblyLine;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


//=====================================================================================================================================================>

// => Using Obj as dictioneries, FOR IN loop iterates over keys in the obj
// => In summary, for...in is used to loop through properties of an object
// => Example:
// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(key); // logs "a", "b", "c"
// }

// => loops => FOR OF => for...of is used to loop over arrays, strings, maps
// Example:
// let arr = [3, 5, 7];
// for (let value of arr) {
//     console.log(value); // logs "3", "5", "7"
// }

// => IN OBJECTS
// => OF COLLECTIONS
// FOR EACH => forEach can only be used with array

//=====================================================================================================================================================>
