var radius;
var height;
var arr = [];

function calcCylinderVol(radius, height) {
    arr = [radius, height];
    console.log(((arr[0] * arr[0] * Math.PI) * arr[1]).toFixed(3));
}

calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);
