function printArea() {
    while (true) {
        var r = prompt("Enter the radius you want \"r\"\n If you wish to stop, press enter only whitdout enteering a number");
        var area = Math.PI * Math.pow(r, 2);
        if (r == "") {
            break;
        }
        var p = document.getElementById('area');
        p.innerHTML += "r = " + r + "; " + "area = " + area + "<br>";
    }
}

printArea();
