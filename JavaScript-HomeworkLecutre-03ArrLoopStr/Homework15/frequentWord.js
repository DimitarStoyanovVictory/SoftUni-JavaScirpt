function findMostFreqWord(str) {
    var words = str.toLowerCase().split(/[ \t.,]+/);
    words = words.filter(Boolean);
    var mostWords = [];
    var wantedWords = [];
    var maxRep = 1;
    for (var i = 0; i < words.length - 1; i++) {
        var count = 1;
        for (var j = i + 1; j < words.length; j++) {
            if (words[i] == words[j]) {
                count++;
            }
            if (count > maxRep) {
                maxRep = count;
                mostWords.push(maxRep);
                wantedWords.push(words[i]);
            }
            else if (count >= maxRep && count > 1) {
                if (words[i] != wantedWords[i]) {
                    maxRep = count;
                    mostWords.push(maxRep);
                    wantedWords.push(words[i]);
                }
            }
        }
    }
    for (var i = 0; i < mostWords.length - 1; i++) {
        if (wantedWords[i] == wantedWords[i + 1]) {
            mostWords.splice(i, 1);
            wantedWords.splice(i, 1);
        }
    }
    for (var i = 0; i < mostWords.length; i++) {
        console.log("%s -> %s times", wantedWords[i], mostWords[i]);
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');