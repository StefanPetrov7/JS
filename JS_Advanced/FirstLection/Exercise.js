// 1.	Fruit

function fruitRequest(fruit, grams, priceKg) {

    let kgNeeded = Number(grams) / 1000

    let moneyNeeded = kgNeeded * Number(priceKg)

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kgNeeded.toFixed(2)} kilograms ${fruit}.`);

}

// fruitRequest('orange', 2500, 1.80);

// 2.	Greatest Common Divisor - GCD

function greatestDivisor(x, y) {

    let bigNum = x > y ? x : y;
    let smallNum = x > y ? y : x;

    while (smallNum != 0) {

        let temp = smallNum;
        smallNum = bigNum % smallNum;
        bigNum = temp;
    }

    console.log(bigNum);
}

// greatestDivisor(15, 5)
// greatestDivisor(2154, 458)

// 3.	Same Numbers

function sameNumbers(x) {

    x = x.toString();

    if (x.length > 1) {

        let total = Number(x[0])
        let counter = 1;

        for (let i = 1; i < x.length; i++) {

            let numOne = Number(x[i])
            let numTwo = Number(x[i - 1]);
            total += numOne;

            if (numOne == numTwo) {
                counter++;
            }
        }

        if (counter == x.length) {
            console.log(true);
            console.log(total);
        } else {
            console.log(false);
            console.log(total);
        }
        return
    }
    console.log(true);
    console.log(x);
}


// sameNumbers(2)


// 4.	Time to Walk
// calculateing formula => time = distance ÷ speed.

function timeNeeded(steps, stepLength, kmH) {

    const distanceM = Number(stepLength) * Number(steps);
    const meetersPs = Number(kmH) / 3.6;
    const rest = Math.floor(distanceM / 500) * 60;

    const timeInSec = distanceM / meetersPs + rest;

    const hours = Math.floor(timeInSec / 3600).toFixed(0).padStart(2, "0");
    const min = Math.floor(timeInSec / 60).toFixed(0).padStart(2, "0");
    const sec = Math.ceil(timeInSec % 60).toFixed(0).padStart(2, "0");

    //console.log(`${strH = hours < 10 ? '0' + hours.toString() : hours}:${strm = min < 10 ? '0' + min.toString() : min}:${strS = sec < 10 ? '0' + sec.toString() : sec}`);
    console.log(`${hours}:${min}:${sec}`);

}

// timeNeeded(4000, 0.6, 5)
// timeNeeded(2564, 0.70, 5.5)

// 5.	Road Radar

function speedLimit(inputSpeed, area) {

    let speed = Number(inputSpeed);

    const residentalLimit = 20;
    const cityLimit = 50;
    const interstateLimt = 90;
    const motorwayLimit = 130;

    let speedLimit;

    switch (area) {

        case 'residential': speedLimit = residentalLimit; break;
        case 'city': speedLimit = cityLimit; break;
        case 'interstate': speedLimit = interstateLimt; break;
        case 'motorway': speedLimit = motorwayLimit; break;
    }

    let difference = speed - speedLimit;

    if (difference <= 0) {

        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }

    let status;

    if (difference <= 20) {

        status = 'speeding';

    } else if (difference <= 40) {

        status = 'excessive speeding';

    } else {

        status = 'reckless driving';
    }

    return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;

}

// console.log(speedLimit(40, `city`));
// console.log(speedLimit(21, `residential`));
// console.log(speedLimit(120, `interstate`));
// console.log(speedLimit(200, `motorway`));


// 6.	Cooking by Numbers


function cookingByNumbers(input) {

    let num = Number(input.shift());

    for (let i = 0; i < input.length; i++) {

        switch (input[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    }
}

//cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);


// 7.	Validity Checker

function validyChecke(x1, y1, x2, y2) {


    let firstPointFromZero = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let secondPointFromZero = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let xFromY = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let first;
    let second;
    let third;

    if (Number.isInteger(firstPointFromZero)) {
        first = `{${x1}, ${y1}} to {0, 0} is valid`;
    } else {
        first = `{${x1}, ${y1}} to {0, 0} is invalid`;
    }

    if (Number.isInteger(secondPointFromZero)) {
        second = `{${x2}, ${y2}} to {0, 0} is valid`;
    } else {
        second = `{${x2}, ${y2}} to {0, 0} is invalid`;
    }

    if (Number.isInteger(xFromY)) {
        third = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
        third = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    console.log(first);
    console.log(second);
    console.log(third);

}

// validyChecke(3, 0, 0, 4)
// validyChecke(2, 1, 1, 1)

// 8.	*Words Uppercase

function upeerCase(text) {
    
    let paragraph = text.toString();

    let words = paragraph.match(/\w+/g);

    for (let i = 0; i < words.length; i++) {
         words[i] =  words[i].toUpperCase();
    }
    console.log(words.join(', '));
}

//upeerCase('Hi, how are you?');

