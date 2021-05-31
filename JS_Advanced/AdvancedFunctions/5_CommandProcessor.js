function solve() {

    let value = ''

    return {
        append: function (text) {
            value += text;
        },
        removeStart: function (n) {
            value = value.slice(n);
            value;
        },
        removeEnd: function (n) {
            value = value.slice(0, -n)
        },
        print: function () {
            console.log(value);
        }
    }
}

let test = solve();
test.append('hello');
test.append('again');
test.removeStart(3);
test.removeEnd(4);
test.print();