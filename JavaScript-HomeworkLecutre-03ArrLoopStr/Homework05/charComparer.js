var arr1 = [];
var arr2 = [];

function compareChars(arr1, arr2) {
    var count = 0;
    if (arr1.length != arr2.length) {
        console.log("Not Equal");
    }
    else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                count++;
            }
        }
        if (count == 0) {
            console.log("Equal");
        }
        else {
            console.log("Not Equal");
        }
    }
}

arr1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
arr2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
compareChars(arr1, arr2)

arr1 = ['3', '5', 'g', 'd'];
arr2 = ['5', '3', 'g', 'd'];
compareChars(arr1, arr2)

arr1 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
arr2 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
compareChars(arr1, arr2)