function pipe(num, fun) {
    return function addOne(x) {
        return x + 1;
    }

}

let newFun = pipe(1, addOne);
console.log(newFun);