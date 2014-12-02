var a, b, s1, s2;

function treeHouseCompare(a, b) {
    s1 = Math.pow(a, 2) + a;
    s2 = b + ((Math.pow((4 / 6 * b), 2)) * Math.PI);
    if (s1 > s2) {
        console.log("housle/" + s1.toFixed(2));
    }
    else {
        console.log("tree/" + s2.toFixed(2));
    }
}

treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);