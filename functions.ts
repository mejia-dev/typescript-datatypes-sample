function add(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(2, 3));

const sub = (num1: number, num2: number) : number => num1 - num2;

console.log(sub(3, 2));


// REST PARAMS

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));



// GENERIC FUNCTIONS


// "Type" is a placeholder value and can be replace with anything.
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatNumResult = getItems<number>([1,2,3,4]);
let concatStringResult = getItems<string>(["1","2","testing!","oh yeah"]);



