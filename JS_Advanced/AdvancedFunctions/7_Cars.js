function solve(array) {

    const cars = {};

    const createCar = () => {
        return {
            create: (name, inherit, parentName) => {
                cars[name] = inherit ? Object.create(cars[parentName]) : {};
            },
            set: (name, key, value) => (cars[name][key] = value),
            print: (name) => {
                let logs = [];
                for (const key in cars[name]) {
                    logs.push(`${key}:${cars[name][key]}`)
                }
                console.log(logs.join(', '));
            }
        }
    }

    const action = createCar();
    array.map(el => el.split(' ')).forEach(([cmd, ...args]) => action[cmd].apply(null, args));

    // map => el => split(' ').
    // forEach => destruction [cmd, ...args]. 
    // cmd use as prop and apply rest of the args fpr each function.

}


solve(
    ['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2']
);