let a, b, c, aAsNumber, bAsNumber, cAsNumber;
const promptMessage = "Enter number for tringle side";
const isNanErrorMessage = "input values should be ONLY numbers";
const sidesErrorMessage =
    "A triangle must have 3 sides with a positive definite length";
const notExistMessage = "Triangle doesn’t exist";

if (confirm("Identify triangle type.")) {
    a = prompt(`${promptMessage} a `);
    aAsNumber = parseInt(a);
    if (a === "" || a === undefined || isNaN(a)) {
        alert(isNanErrorMessage);
    } else if (aAsNumber === 0) {
        alert(sidesErrorMessage);
    } else {
        b = prompt(`${promptMessage} b `);
        bAsNumber = parseInt(b);
        if (b === "" || b === undefined || isNaN(b)) {
            alert(isNanErrorMessage);
        } else if (bAsNumber === 0) {
            alert(sidesErrorMessage);
        } else {
            c = prompt(`${promptMessage} c `);
            cAsNumber = parseInt(c);
            if (c === "" || c === undefined || isNaN(c)) {
                alert(isNanErrorMessage);
            } else if (cAsNumber === 0) {
                alert(sidesErrorMessage);
            } else if (
                aAsNumber + bAsNumber <= cAsNumber ||
                aAsNumber + cAsNumber <= bAsNumber ||
                bAsNumber + cAsNumber <= aAsNumber
            ) {
                alert(notExistMessage);
                console.log(notExistMessage);
            } else if (aAsNumber === bAsNumber && aAsNumber === cAsNumber) {
                console.log("Equilateral triangle");
            } else if (
                aAsNumber === bAsNumber ||
                bAsNumber === cAsNumber ||
                aAsNumber === cAsNumber
            ) {
                console.log("Isosceles triangle");
            } else if (
                aAsNumber !== bAsNumber &&
                aAsNumber !== cAsNumber &&
                bAsNumber !== cAsNumber
            ) {
                console.log("Scalene triangle");
            }
        }
    }
}