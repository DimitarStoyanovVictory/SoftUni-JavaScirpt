var time = new Date();
var hours = Math.floor(Math.random() * 24);
var minutes = Math.floor(Math.random() * 60);
if (minutes < 10) {
    minutes = "0" + minutes;
}
console.log(hours + " : " + minutes);
