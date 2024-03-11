class Employee {
  // exclamation allows for not defined
  id!: number;
  name!: string;
  address!:string;
}

class EmployeeV2 {
  // hash sets something to private instead of putting private keyword before it. 
  #id: number;

  // Getter method
  get empId(): number {
    return this.#id;
  }

  // setter method
  set empId(id : number) {
    this.#id = id;
  }

  protected name: string;

  address:string;

  // static method with type
  static getEmployeeCount() : number { 
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.name = name;
    this.#id = id;
  }
}

let john = new Employee();
let john2 = new EmployeeV2(2, "John", "Highway 2");

class Manager extends EmployeeV2 {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

john.id = 1;
john.name = "John";
john.address = "Highway 71";

console.log(john);
console.log(john2);
console.log(EmployeeV2.getEmployeeCount);