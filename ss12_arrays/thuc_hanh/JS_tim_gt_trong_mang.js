let value = prompt("enter a number : ");
let x = [5, 32, 523, 66, 74, 3, 12];

for (let i = 0 ; i < x.length ; i++) {
    if (value == x[i]) {
        alert(value + " Nam trong index " + i);
    } else alert("value not found");
    break;
}
