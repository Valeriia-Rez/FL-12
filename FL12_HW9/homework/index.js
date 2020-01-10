let arr = ["1", 2, 3, "4"];

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
convert(arr);




/*function flipOver(str) {
    return str.split("").reverse().join("");
}
console.log(flipOver("hey world"));*/