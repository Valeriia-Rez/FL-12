let array = [2, 4, 5, -2, 6];
let min = getMinValue(array);

function getMinValue(array) {
    let min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
console.log(min);