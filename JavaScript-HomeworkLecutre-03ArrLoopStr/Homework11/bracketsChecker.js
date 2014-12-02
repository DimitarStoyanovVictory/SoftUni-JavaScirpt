function checkBrackets(str){
    var left = 0, right = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            left++;
        }
        else if (str[i] == ')') {
            right++;
        }
    }

    if (left == right) {
        console.log('correct');
    }
    else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');