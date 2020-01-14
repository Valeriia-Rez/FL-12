let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let seven = 7;
let eight = 8;
let ten = 10;
let year = 2019;
let days = 365;

let arr = [`${one}`, two, three, `${four}`];

function convert(arg) {
    let newArr = [];
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] === 'string') {

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
executeforEach([one, two, three], function(el) {
    console.log(el * two);
});

function mapArray(el, callBackFun) {
    executeforEach(el, callBackFun);
    return [...el];
}

console.log(mapArray([two, `${five}`, eight], function(el) {
    return parseInt(el) + three;
}));


function filterArray(el, callBackFun) {
    let originalArrayElements = [...el];
    let filteredArray = [];
    executeforEach(el, callBackFun);
    for (let i = 0; i < el.length; i++) {
        if (el[i]) {
            filteredArray = [...filteredArray, originalArrayElements[i]];
        }
    }
    return filteredArray;
}
console.log(filterArray([two, five, eight], function(el) {
    return el % two === 0;
}));



function flipOver(str) {
    let newStr = '';
    for (let i = str.length - one; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}
console.log(flipOver('hey world'));



function makeListFromRange(arr) {
    let newArr = [];
    for (let i = arr[0]; i <= arr[one]; i++) {
        newArr.push(i);
    }
    return newArr;
}
console.log(makeListFromRange([two, seven]));



/*function getArrayOfKeys() {
    const actors = [
        { name: "tommy", age: 36 },
        { name: "lee", age: 28 }
    ];

}
getArrayOfKeys(actors, "name");*/


const date = new Date(year, 0, two);

function getPastDay(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

console.log(getPastDay(date, one));
console.log(getPastDay(date, two));
console.log(getPastDay(date, days));

function formatDate(date) {
    let curr_year = date.getFullYear();
    let curr_month = date.getMonth() + one;
    let curr_date = date.getDate();
    let curr_hours = date.getHours();
    let curr_minutes = date.getMinutes();
    if (curr_hours < ten) {
        curr_hours = `0${curr_hours}`;
    }
    if (curr_minutes < ten) {
        curr_minutes = `0${curr_minutes}`;
    }
    return `${curr_year}/${curr_month}/${curr_date} ${curr_hours}:${curr_minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));