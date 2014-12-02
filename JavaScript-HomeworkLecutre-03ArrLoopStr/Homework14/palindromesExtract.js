function findPalindromes(str) {
    var count = 0;
    var array = [];
    var words = str.toLowerCase().split(/[ ,\t.]+/);
    words = words.filter(Boolean);
    for (var i = 0; i < words.length; i++) {
        if (words[i] == words[i].split('').reverse().join('')) {
            array.push(words[i]);
        }
    }
    console.log(array.join(', '));
}

findPalindromes('There is a man, his name was Bob.');