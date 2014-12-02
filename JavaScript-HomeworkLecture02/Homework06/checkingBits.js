var number;

function bitChecker(number) {
    var binNum = Number(number).toString(2);
    if (binNum[binNum.length-4] == "1") {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);