﻿var age, maxAge, food, foodPerDay;

function calcSupply(age, maxAge, food, foodPerDay) {
    foodEaten = (maxAge - age) * 365 * foodPerDay;
    console.log(foodEaten + "kg of " + food + " would be enought until I am " + maxAge + " years old.");
}

calcSupply(38, 118, "chocolate", 0.5);
calcSupply(20, 87, "fruits", 2);
calcSupply(16, 102, "nuts", 1.1);