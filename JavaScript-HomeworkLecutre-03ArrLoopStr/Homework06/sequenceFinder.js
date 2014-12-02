var arr = []

function findMaxSequance(arr) {
    var index = 0;
    var maxSeq = 1;
    var count = 1;
    var finalArray = [];
    if (arr.length == 1) {
        console.log(arr);
    }
    else {
        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i] === arr[i + 1]) {
                count++;
                if (count >= maxSeq) {
                    index = i;
                    maxSeq = count;
                }
            }
            else if (arr[i] !== arr[i + 1]) {
                count = 1;
                if (maxSeq == 0) {
                    index == i + 1;
                }
            }
        }
        for (var i = 0; i < maxSeq; i++) {
            finalArray.push(arr[index]);
        }
        console.log(finalArray);
    }
}

arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
findMaxSequance(arr);

arr = ['happy'];
findMaxSequance(arr);

arr = [2, 'qwe', 'qwe', 3, 3, '3'];
findMaxSequance(arr);