function replaceSpaces(str) {
    var pattern = new RegExp(" ", 'g');
    console.log(str.replace(pattern, ""));
}

replaceSpaces("But you were living in another world tryin' to get your message through");