let discriminant, x, x1, x2, a, b, c;
const sides = 4;
const quadrat = 2;
const promptMessage = "Enter number for";
const errorMessage = "Invalid input data";

if (confirm("Solve Quadratic equation. Example: ax2 + bx + c = 0")) {
    a = parseFloat(prompt(`${promptMessage} a =`));
    if (a === 0 || isNaN(a)) {
        alert(errorMessage);
        console.log(errorMessage);
    } else {
        b = parseFloat(prompt(`${promptMessage} b =`));
        if (isNaN(b)) {
            alert(errorMessage);
            console.log(errorMessage);
        } else {
            c = parseFloat(prompt(`${promptMessage} c =`));
            if (isNaN(c)) {
                alert(errorMessage);
                console.log(errorMessage);
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