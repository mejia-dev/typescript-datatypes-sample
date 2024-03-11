class Employee {
  // exclamation allows for not defined
  id!: number;
  name!: string;
  address!:string;
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "Highway 71";

console.log(john);