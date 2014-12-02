function revealtriangles(input) {
    // initialize the output as char[][], holding the input chars
    var output = [];
    for (var row = 0; row < input.length; row++) {
        output[row] = input[row].split('');
    }

    // replace all triangles with '*' (with overlapping)
    for (var row = 1; row < input.length; row++) {
        var maxcol = math.min(
            input[row - 1].length - 2,
            input[row].length - 3);
        for (var col = 0; col <= maxcol; col++) {
            var a = input[row][col];
            var b = input[row][col + 1];
            var c = input[row][col + 2];
            var d = input[row - 1][col + 1];
            if (a == b && b == c & c == d) {
                // triangle found --> fill it with '*'
                output[row][col] = '*';
                output[row][col + 1] = '*';
                output[row][col + 2] = '*';
                output[row - 1][col + 1] = '*';
            }
        }
    }

    // print the result
    for (var row = 0; row < input.length; row++) {
        console.log(output[row].join(''));
    }
}