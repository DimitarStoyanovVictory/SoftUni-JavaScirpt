var arr = [];

function findMinAndMax(arr) {
    var max = 0;
    var min = Number.MAX_VALUE;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1] && arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < arr[i + 1] && arr[i + 1] > max) {
            max = arr[i + 1];
        }
        if (arr[i] <= arr[i + 1] && arr[i] < min) {
            min = arr[i];
        }
        else if (arr[i] > arr[i + 1] && arr[i + 1] < min) {
            min = arr[i];
        }
    }
    console.log("Min ->" + min);
    console.log("Max ->" + max);
}

arr = [1, 2, 1, 15, 20, 5, 7, 31];
findMinAndMax(arr);

arr = [2, 2, 2, 2, 2];
findMinAndMax(arr);

arr = [500, 1, -23, 0, -300, 28, 35, 12];
findMinAndMax(arr);
