function displayProperties(value) {

    var arr = [];

    for (var property in value) {
        arr.push(property);
    }
    arr.sort();

    for (var element in arr) {

        console.log(arr[element]);
        document.writeln(arr[element]);
    }
}


displayProperties(document);