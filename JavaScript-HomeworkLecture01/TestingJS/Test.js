var parametur = document.getElementById('outerDiv');

function printNumbers() {
    for (var i = 0; i < 10; i++) {
        parametur.innerHTML += i + "<br>";
    }
}

printNumbers();