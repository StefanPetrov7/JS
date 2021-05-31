function solve(n) {
    const num = n;
    return function add5(x) {
        return x + num;
    }
}

let addNum = solve(5);
console.log(addNum(2));
console.log(addNum(3));