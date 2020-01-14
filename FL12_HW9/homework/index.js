let arr = ["1", 2, 3, "4"];

function convert(arg) {
    let newArr = [];
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] === "string") {

            newArr.push(parseInt(arg[i]));
        } else {
            newArr.push(String(arg[i]));
        }
    }
    return newArr;
}
console.log(convert(arr));

function executeforEach(el, callBackFun) {

    for (let i = 0; i < el.length; i++) {
        el[i] = callBackFun(el[i]);
    }
}
executeforEach([1, 2, 3], function(el) {
    console.log(el * 2);
});

function mapArray(el, callBackFun) {
    executeforEach(el, callBackFun);
    return [...el];
}

console.log(mapArray([2, "5", 8], function(el) {
    return parseInt(el) + 3;
}));


function filterArray(el, callBackFun) {

    executeforEach(el, callBackFun);
    return [...el];
}

console.log(filterArray([2, 5, 8], function(el) {
    return el % 2 === 0;
}));



function flipOver(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}
console.log(flipOver("hey world"));



function makeListFromRange(arr) {
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }
    return newArr;
}
console.log(makeListFromRange([2, 7]));

const date = new Date(2019, 0, 2);

function getPastDay(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)

function formatDate(date) {
    let curr_year = date.getFullYear();
    let curr_month = date.getMonth() + 1;
    let curr_date = date.getDate();
    let curr_hours = date.getHours();
    let curr_minutes = date.getMinutes();
    if (curr_hours < 10) {
        curr_hours = `0${curr_hours}`;
    }
    if (curr_minutes < 10) {
        curr_minutes = `0${curr_minutes}`;
    }
    return `${curr_year}/${curr_month}/${curr_date} ${curr_hours}:${curr_minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00'))); //"2018/6/15 09:15"
console.log(formatDate(new Date())); // "2020/1/7 12:56" // gets current local time4fr4