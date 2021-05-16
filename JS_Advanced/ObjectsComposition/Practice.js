function solve1(input) {

    let [columns, ...table] = input.map(spliter);

    columns;
    table;

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, cur, i) => {
            acc[cur] = entry[i];
            return acc;
        }, {})

    }));

    function emptyString(x) {
        return x !== '';
    }

    function isNumber(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function spliter(input) {
        return input.split('|').filter(emptyString).map(x => x.trim()).map(isNumber);
    }

}



console.log(solve1(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
));

