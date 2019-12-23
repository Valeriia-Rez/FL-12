let D, x, x1, x2, a, b, c;

if (confirm("ax2 + bx + c = 0")) {
    a = parseInt(prompt("a ="));
    if (a == 0 || isNaN(a)) {
        alert("Invalid input data");
    }

    b = parseInt(prompt("b ="));
    if (isNaN(b)) {
        alert("Invalid input data");
    }

    c = parseInt(prompt("c ="));
    if (isNaN(c)) {
        alert("Invalid input data");
    }
    alert(a + "x2" + "+" + b + "x" + "+" + c + "=" + 0);

    D = b * b - 4 * a * c;
    alert("D =" + D);
    if (D > 0) {
        x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
        x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
        console.log("x1 = " + x1 + ", x2 = " + x2);
    } else if (D == 0) {
        x = Math.round(-b / (2 * a));

        console.log(" x = " + x);
    } else if (D < 0) {
        console.log("Решения нет,так как дискриминант меньше ноля");
    }
}