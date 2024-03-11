let lname : string = "John";

lname = "Santosh";

let newname = lname.toUpperCase();

let age: number;
age = 24;

let isValid : boolean = true;


// both ways will declare an array of strings
let emptyList : string[];
let depList : Array<string>;

let numList : Array<number>;
numList = [1, 2, 3];
let result = numList.filter((num) => num > 2);

console.log(result);