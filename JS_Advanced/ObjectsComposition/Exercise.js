// ======> Exercise Objects & Composition

// 1.	Calorie Object

function solve1(arr) {

    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }
    return result;
}


//console.log(solve1(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

// ==========================================================================================================
// ===> 2.	Construction Crew

function solve2(worker) {

    if (worker.dizziness == true) {
        worker.levelOfHydrated += (0.1 * worker.weight * worker.experience);
        worker.dizziness = false;
    }
    return worker;
}

// console.log(solve2({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true 
// }
// ));


// ==========================================================================================================
// ===> 3.	Car Factory


function solve3(carInput) {

    const car = {};
    const assemblyLine = {

        hasModel: function (carInput) {

            car.model = carInput['model'];
        },
        hasEngine: function (carInput) {
            const smallEngine = {
                power: 90,
                volume: 1800,
            }
            const normalEngine = {
                power: 120,
                volume: 2400,
            }
            const monsterEngine = {
                power: 200,
                volume: 3500,
            }

            if (carInput.power <= 90) {
                car.engine = smallEngine;
            } else if (carInput.power <= 120) {
                car.engine = normalEngine;
            } else {
                car.engine = monsterEngine;
            }
        },
        hasCarriage: function (carInput) {

            const hatchBack = {
                type: 'hatchback',
                color: carInput['color']
            }
            const coupe = {
                type: 'coupe',
                color: carInput['color']
            }

            if (carInput.carriage == 'hatchback') {
                car.carriage = hatchBack;
            } else {
                car.carriage = coupe;
            }
        },
        hasWheels: function (inputCar) {
            let wheelsSize = inputCar.wheelsize % 2 != 0 ? inputCar.wheelsize : inputCar.wheelsize - 1;
            car.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];
        }
    }

    assemblyLine.hasModel(carInput);
    assemblyLine.hasEngine(carInput);
    assemblyLine.hasCarriage(carInput);
    assemblyLine.hasWheels(carInput);
    return car;
}

function solve3Update(input) {

    const {           // destructing an obj to variables from its properties
        model,
        power,
        carriage,
        color,
        wheelsize
    } = input;

    return {
        model,     // => property is matching the value
        engine: getEngine(power),
        carriage: getCarrieage(carriage, color),
        wheels: getWheels(wheelsize)
    }

    function getWheels(size) {

        let wheelSize = size % 2 != 0 ? size : size - 1;
        return Array(4).fill(wheelSize, 0, 4)
    }

    function getCarrieage(cerriage, color) {

        return {
            type: cerriage,
            color
        }
    }

    function getEngine(power) {

        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        let result = engines.find(x => x.power >= power);
        return result;
    }
}


console.log(solve3Update({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve3Update({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));

// ===========================================================================================================
// ====> 4.	Heroic Inventory

function solve4(input) {

    const result = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({ name, level, items });
    }

    let resultStr = JSON.stringify(result);
    return resultStr;
}

console.log(solve4(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
));


//===========================================================================================================
// ====> 5.	Lowest Prices in Cities

function solve6(input) {

    const products = {};

    while (input.length != 0) {

        let data = input.shift();
        let [town, product, price] = data.split(' | ');

        if (!products[product]) {
            products[product] = { town, price: Number(price) };
        } else {
            products[product] = products[product].price <= Number(price) ?
                products[product] : { town, price: Number(price) };
        }
    }

    let result = [];

    for (let item in products) {
        result.push(`${item} -> ${products[item].price} (${products[item].town})`);
    }
    return result.join('\n');
}

// console.log(solve6(
//     ['Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10']
// ));



//===========================================================================================================
// ====> 6.	Store Catalogue.  ====>>>>>>> TODO not completed


function solve6(input) {

    const catalog = {};

    while (input.length) {

        let [product, price] = input.shift().split(' : ');
        let letter = product[0];

        if (!catalog[letter]) {
            catalog[letter] = [];
        }

        catalog[letter].push({ name: product, Number(price) });
        catalog[letter].sort((a, b) => (a.name).localeCompare(b.name))

    }


    let result = [];

    for (const letter in object) {
        let values = catalog[letter].map(x => `  ${x.name}: ${x.price}`);
    }


    return catalog;

}



console.log(solve6(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
));


