/*let arr = ["1", 2, 3, "4"];

function convert(arg) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {

            newArr.push(parseInt(arr[i]));
        } else {
            newArr.push(String(arr[i]));
        }
    }
    return newArr;
}
convert(arr);*/



function executeforEach(el, callBackFun) {
    for (let i = 0; i < el.length; i++) {
        callBackFun(el[i]);
    }
}
console.log(executeforEach([1, 2, 3], function(el) {
    console.log(el * 2);
}));

function mapArray(el, callBackFun) {
    let arr = [];
    for (let i = 0; i < el.length; i++) {
        arr.push(executeforEach([parseInt(el[i])], callBackFun));
    }
    return arr;
}

console.log(mapArray([2, "5", 8], function(el) {
    return el + 3;
}));