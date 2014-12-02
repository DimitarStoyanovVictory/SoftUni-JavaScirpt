var number;

function printNumbers(number) {
    var nums = [];
    if (number < 0) {
        console.log("no");
    }
    for (var i = 1; i <= number; i++) {
        if ((i % 4 != 0) && (i % 5 != 0)) {
            nums.push(i);
        }
    }
    console.log(nums.join(', '));
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
