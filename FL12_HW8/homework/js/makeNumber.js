let string = "erer384jjjfd123";
let newArr = [];

function makeNumber(array) {
    string = string.split();
    console.log(string);
    for (let i = 0; i < array.length; i++) {

        if (!isNaN(array[i])) {
            newArr.push(array[i]);
        }
    }

    return newArr.join("");
}
let num = makeNumber(string);
console.log(num);