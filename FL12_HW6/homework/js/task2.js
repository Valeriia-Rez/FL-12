let a, b, c;

if (
    typeof a === "" ||
    undefined ||
    typeof b === "" || undefined ||
    typeof c === "" || undefined
) {
    alert("input values should be ONLY numbers");
} else {
    a = parseInt(prompt("a ="));
    b = parseInt(prompt("b ="));
    c = parseInt(prompt("c ="));
}