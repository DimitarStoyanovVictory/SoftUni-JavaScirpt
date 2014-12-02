function buildTable(arr) {
    var start = arr[0];
    var end = arr[1];
    var fib = [];
    console.log("<table>");
    console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");
    for (var i = start; i <= end; i++) {
        var str = "yes";
        checkForFibonacci(start);
        console.log("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", start, start * start, str);
        start++;
    }

    console.log("</table>");

    function checkForFibonacci(start) {
        fib[0] = 0;
        fib[1] = 1;
        for (var i = 2; i <= end + 1; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
            if (start == fib[i]) {
                break;
            }
            else if (start < fib[i]) {
                str = "no";
                break;
            }
        }
    }
}