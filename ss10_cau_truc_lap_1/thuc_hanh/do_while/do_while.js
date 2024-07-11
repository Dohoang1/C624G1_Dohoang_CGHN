let value=null;
do {
    value=prompt("Enter a number from 1 to 10");
} while (value < 1 || value > 10);
alert("Number your enter is " + value);