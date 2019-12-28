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
makeNumber("erer384jjjfd123");
makeNumber("123098h76gfdd");
makeNumber("ijifjgdj");