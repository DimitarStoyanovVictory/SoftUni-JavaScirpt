function findCardFrequancy(str) {
    var uniqueArr = [];
    var array = str.split(/[ ♣♦♥♠]+/);
    array.pop();
    var length = array.length;

    for (var i = 0; i < array.length - 1; i++) {
        var count = 1;
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
                array.splice(j, 1);
                j--;
            }
        }
        console.log("%s -> %s%", array[i], ((count * 100) / length).toFixed(2));
    }
}

findCardFrequancy('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequancy('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequancy('10♣ 10♥');