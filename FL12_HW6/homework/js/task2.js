let a, b, c;

if (confirm("Identify triangle type.")) {
    a = parseInt(prompt("Enter number for tringle side a ="));
    if (typeof a === "" || typeof a === undefined) {
        alert("input values should be ONLY numbers");
    } else {
        b = parseInt(prompt("Enter number for tringle side b ="));
        if (typeof b === "" || typeof b === undefined) {
            alert("input values should be ONLY numbers");
        } else {
            c = parseInt(prompt("Enter number for tringle side c ="));
            if (typeof c === "" || typeof c === undefined) {
                alert("input values should be ONLY numbers");
            } else {
                if (a === 0 || b === 0 || c === 0) {
                    alert("A triangle must have 3 sides with a positive definite length");
                } else if (a + b <= c || a + c <= b || b + c <= a) {
                    alert("Triangle doesn’t exist");
                    console.log("Triangle doesn’t exist");
                } else if (a === b && a === c) {
                    console.log("Equilateral triangle");
                } else if (a === b || b === c || a === c) {
                    console.log("Isosceles triangle");
                } else if (a !== b && a !== c && b !== c) {
                    console.log("Scalene triangle");
                }
            }
        }
    }
}