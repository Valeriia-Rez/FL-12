const one = 1;
const two = 2;
const three = 3;
const seven = 7;
const ten = 10;
const thirty = 30;
const forty = 40;
const fifty = 50;
const year = 2019;
const days = 365;



const arr = [`${one}`, two, three, `${seven}`];

function convert(el) {
    let newArr = [];
    for (let i = 0; i < el.length; i++) {
        if (typeof el[i] === 'string') {

            newArr.push(parseInt(el[i]));
        } else {
            newArr.push(String(el[i]));
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

console.log(mapArray([one, `${two}`, three], function(el) {
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
console.log(filterArray([one, two, three, ten], function(el) {
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



/*function getArrayOfKeys(actors, key) {
    const actors = [
        { name: "tommy", age: 36 },
        { name: "lee", age: 28 }
    ];
    executeforEach(el, callBackFun);
}
getArrayOfKeys(actors, "name");*/

function substitute(el) {
    let originalArray = [...el];
    let arr = [];
    mapArray(el, (el) => el > thirty);
    for (let i = 0; i < el.length; i++) {
        if (el[i]) {
            arr = [...arr, originalArray[i]];
        } else {
            arr.push('*');
        }
    }
    return arr;
}
console.log(substitute([fifty, two, forty, three]));



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