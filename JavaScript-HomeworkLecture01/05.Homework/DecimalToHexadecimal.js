function entering() {
    while (true) {
        var number = prompt("Enter a number");
        var hexadecimalNum = Number(number).toString(16).toUpperCase();
        alert(hexadecimalNum);
    }
}