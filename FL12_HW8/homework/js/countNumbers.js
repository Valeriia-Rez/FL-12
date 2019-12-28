function makeNumber(str) {
    let newArr = [];
    let arrayFromString = str.split("");
    for (let i = 0; i < arrayFromString.length; i++) {

        if (!isNaN(arrayFromString[i])) {
            newArr.push(arrayFromString[i]);
        }
    }

    return newArr.join("");
}

function countNumbers(str) {
    const justNumbersString = makeNumber(str);
    let numbersObj = {};
    for (let stringEL of justNumbersString) {
        numbersObj[stringEL] = numbersObj[stringEL] + 1 || 1;
    }
    return numbersObj;
}
countNumbers("erer384jj4444666888jfd123");
countNumbers("jdjjka000466588kkkfs662555");
countNumbers("");