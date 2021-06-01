function solve(arr) {

    let result = [];

    arr.map(el => {
        const cmd = el.split(' ');
        switch (cmd[0]) {
            case 'add':
                return add(cmd[1]);
            case 'remove':
                return remove(cmd[1]);
            case 'print':
                return print();
        }
    })

    function add(word) {
        return result.push(word)
    }

    function remove(text) {
       return result = result.filter(x => x !== text);
    }

    function print() {
        return console.log(result.join(','));
    }
}


console.log(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']));



