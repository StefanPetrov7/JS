// // ======> Lab Objects & Composition

// // 01. City Record ======================================================================================

// function cityRecord(name, population, treasury) {
//     const city = {
//         name: name,
//         population: population,
//         treasury: treasury
//     };
//     return city;
// }

// console.log(cityRecord('Tortuga', 7000, 15000));

// //=======================================================================================================

// // Practice


// let obj = {
//     name: 'stefan',
//     phone: 777777,
//     homeCity: 'Ruse',
// };

// const propName = 'name';

// console.log(obj[propName]);     // can access the value with the property given as a string

// obj.lastName = 'Petrov';     // adding prop;

// const eyes = 'eyes';

// obj[eyes] = 'green';

// console.log(obj.eyes);

// let number = obj.phone;

// delete obj.eyes;     // prop deleting

// console.log(obj.eyes);   // showing as defined

// console.log(number);

// obj.age = 24;

// let { age: myAge, name, homeCity } = obj;    // will look for prop with that same name

// console.log(obj.age);
// console.log(myAge);
// console.log(name);
// console.log(homeCity);

// let dictionary = {
//     'first': 5,
//     'second': 10,
//     'third': 15,
// }

// for (let key in dictionary) {
//     console.log(`dictionary.${key} = ${dictionary[key]}`);
// }

// const keys = Object.keys(dictionary)   // Will return the kyes

// for (let key of keys) {
//     console.log(key);
// }

// const values = Object.values(dictionary)  // WIll return the values

// for (let value of values) {
//     console.log(value);
// }

// const enteries = Object.entries(dictionary);

// for (let entry of enteries) {
//     console.log('Key', entry[0], 'Value', entry[1]);
// }

// for (let [key, value] of enteries) {
//     console.log('Key', key, 'Value', value);
// }

// let sampleObj = {
//     firstName: 'John',
//     lastName: 'Smith',
//     sayHi() {
//         return 'Hi!';
//     },
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// }

// console.log(sampleObj.sayHi());    // calling the method

// const fullName = sampleObj.fullName;   // passing the method on a variable

// console.log(sampleObj.fullName());

// console.log(fullName);

// const ivan = {
//     firstName: 'Ivan',
//     lastName: 'BinBin',
// }

// ivan.fullName = fullName;

// console.log(ivan.fullName());


//=================================================================================================
// OBJ composition

let name = 'Ruse';
let population = 2343432;
let country = 'Bulgaria';

let town = { name, population, country };

console.log(town);

//=================================================================================================
// Composite a function that returns OBJ, without using this

function createRect(height, width) {
    const rect = { height, width };
    rect.getArea = () => {
        return rect.height * rect.width;
    }
    return rect;
}

const rect = createRect(10,5);
console.log(rect);
console.log(rect.getArea());














