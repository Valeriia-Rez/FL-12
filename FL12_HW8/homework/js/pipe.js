function _pipe(a, b) {
    return function(...args) {
        return a(b(...args));
    };
}

function pipe(num, ...fns) {
    const result = fns.reduce(_pipe);
    return result(num);
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
pipe(1, addOne, addOne, addOne);