let discriminant, x, x1, x2, a, b, c;
const sides = 4;
const quadrat = 2;

if (confirm("Solve Quadratic equation. Example: ax2 + bx + c = 0")) {
    a = parseFloat(prompt("Enter number for a ="));
    if (a === 0 || isNaN(a)) {
        alert("Invalid input data");
        console.log("Invalid input data");
    } else {
        b = parseFloat(prompt("Enter number for b ="));
        if (isNaN(b)) {
            alert("Invalid input data");
            console.log("Invalid input data");
        } else {
            c = parseFloat(prompt("Enter number for c ="));
            if (isNaN(c)) {
                alert("Invalid input data");
                console.log("Invalid input data");
            } else {
                alert(a + "x2" + "+" + b + "x" + "+" + c + "=" + 0);
                discriminant = b * b - sides * a * c;
                alert("discriminant =" + discriminant);

                if (discriminant > 0) {
                    x1 = Math.round((-b + Math.sqrt(discriminant)) / (quadrat * a));
                    x2 = Math.round((-b - Math.sqrt(discriminant)) / (quadrat * a));
                    console.log("x1 = " + x1 + ", x2 = " + x2);
                } else if (discriminant === 0) {
                    x = Math.round(-b / (quadrat * a));

                    console.log(" x = " + x);
                } else {
                    console.log("no solution,discriminant < 0");
                }
            }
        }
    }
}