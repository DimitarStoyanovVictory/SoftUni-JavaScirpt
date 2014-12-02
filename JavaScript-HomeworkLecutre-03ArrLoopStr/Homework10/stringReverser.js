function reverseString(str) {
    var wantedStr = '';
    for (var i = str.length-1; i >= 0; i--) {
        wantedStr += str[i];
    }
    console.log(wantedStr);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');