function sort(arr) {
    var array = [];
    for (var i = 2; i < arr.length - 1; i++) {
        var split = arr[i].split(/<\/td><td>/);
        array[i - 2] = [split[0].substring('<tr><td>'.length), split[1], split[2].substring(0, split[2].length - 10)];
    }

    var temp;
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (parseFloat(array[i][1]) > parseFloat(array[j][1])) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else if (parseFloat(array[i][1]) == parseFloat(array[j][1]) && array[i][0].localeCompare(array[j][0] > 1)) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    }
    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    for (var i = 0; i < array.length; i++) {
        console.log("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", array[i][0], array[i][1], array[i][2]);
    }
    console.log("</table>");
}

//sort(['<table>',
//'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
//'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
//'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//'</table>']);
