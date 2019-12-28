let arrayOfNumbers = [2, 4, 5, -2, 6];

function getMinValue(arrayOfNumbers) {
    let min = arrayOfNumbers[0];
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (min > arrayOfNumbers[i]) {
            min = arrayOfNumbers[i];
        }
    }
    return min;
}
getMinValue(arrayOfNumbers);