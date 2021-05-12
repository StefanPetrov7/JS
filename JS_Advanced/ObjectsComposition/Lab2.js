//  ======> 2.	Town Population

function solve2(arr) {

    let towns = {};

    for (let element of arr) {
        // let town = element.split(' <-> ').filter(x => x.length > 0).slice(0, 1).toString();
        // let population = Number(element.split(' <-> ').filter(x => x.length > 0).slice(1, 2));

        let [town, population] = element.split(' <-> ');
        population = Number(population);

        // if (towns[town] == undefined) {       //   if (towns[town])  //   if (typeof(towns[town]) == 'indefined') 
        //     towns[town] = population;
        // } else {
        //     towns[town] += population;
        // }

        if (towns.hasOwnProperty(town)) {
            towns[town] += population;
        }
        towns[town] = population;

    }

    // for (let town in towns) {
    //  console.log(`${town} : ${towns[town]}`);
    // }

    for (let [key, value] of Object.entries(towns)) {
        console.log(`${key} : ${value}`);
    }
}

console.log(solve2(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
));


//=================================================================================================
// ====> 3.	City Taxes

function solve3(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    };
    return city;
}

const city = solve3('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

//=================================================================================================
// ====> 4.	Object Factory


function factoryMap(library, orders) {

    const result = orders.map(order => {
        const composed = Object.assign({}, order.template);
        for (const part of order.parts) {
            composed[part] = library[part];
        }
        return composed;
    });
    return result;
}


function factory(library, orders) {

    const result = [];

    for (const order of orders) {
        const composed = Object.assign({}, order.template);

        for (const part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }
    return result;
}


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

const products = factory(library, orders);

console.log(products);

const player = products[3];

console.log(player);

console.log(player.play('BinBin', 'Konami Forever'));



//=================================================================================================
// =====> 5.	Assembly Line

function createAssemblyLine() {
    const assemblyLine = {

        hasClima: function (car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            }
        },
        hasAudio: function (car) {
            car.currentTrack = { name: null, artist: null };
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function (car) {
            car.checkDistance = (distance) => {
                let msg = 'Beep';
                if (distance < 0.1) {
                    msg = (msg + ' ').repeat(3).trim();
                } else if (0.1 <= distance && distance < 0.25) {
                    msg = (msg + ' ').repeat(2).trim();
                } else if (distance >= 5) {
                    msg = '';
                };
                console.log(msg);
            }
        }
    }
    return assemblyLine;
}

const assemblyLine = createAssemblyLine();

const binbin = {
    make: 'Toyota',
    model: 'Rav4Hybrid'
};

assemblyLine.hasClima(binbin);
console.log(binbin.temp);
binbin.tempSettings = 18;
binbin.adjustTemp();
console.log(binbin.temp);

assemblyLine.hasAudio(binbin);
binbin.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
binbin.nowPlaying();

assemblyLine.hasParktronic(binbin);
binbin.checkDistance(0.4);
binbin.checkDistance(0.2);

console.log(binbin);







