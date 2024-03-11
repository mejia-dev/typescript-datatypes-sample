"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 2));
// REST PARAMS
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
// GENERIC FUNCTIONS
// "Type" is a placeholder value and can be replace with anything.
function getItems(items) {
    return new Array().concat(items);
}
let concatNumResult = getItems([1, 2, 3, 4]);
let concatStringResult = getItems(["1", "2", "testing!", "oh yeah"]);
