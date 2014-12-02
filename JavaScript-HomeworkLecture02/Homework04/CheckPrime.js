var number;
var divider = 2;
var maxDivider = Math.Floor(Math.Sqrt(number));
var prime = true;
function primeCheck(number) {
    while (prime && (divider <= maxDivider)) {
        if (num % divider == 0) {
            prime = false;
        }
        divider++;
    }
    console.log(prime);
}

primeCheck(7);
primeCheck(254);
primeCheck(587);
