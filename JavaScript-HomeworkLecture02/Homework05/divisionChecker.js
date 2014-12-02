var number;

function divisonBy3(number) {
    var sum = 0;
    if (number > 9) {
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        if (!(sum %3)) {
            console.log("the number is divided by 3 without remainder");
        }
        else {
            console.log("the number is not divided by 3 without remainder");
        }
    }
    else {
        console.log("you have entered number n <= 9");
    }
}

divisonBy3(12);
divisonBy3(188);
divisonBy3(591);