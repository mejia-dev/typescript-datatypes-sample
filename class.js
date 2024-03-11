"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _EmployeeV2_id;
class Employee {
}
class EmployeeV2 {
    // Getter method
    get empId() {
        return __classPrivateFieldGet(this, _EmployeeV2_id, "f");
    }
    // setter method
    set empId(id) {
        __classPrivateFieldSet(this, _EmployeeV2_id, id, "f");
    }
    // static method with type
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        // hash sets something to private instead of putting private keyword before it. 
        _EmployeeV2_id.set(this, void 0);
        this.address = address;
        this.name = name;
        __classPrivateFieldSet(this, _EmployeeV2_id, id, "f");
    }
}
_EmployeeV2_id = new WeakMap();
let john = new Employee();
let john2 = new EmployeeV2(2, "John", "Highway 2");
class Manager extends EmployeeV2 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
john.id = 1;
john.name = "John";
john.address = "Highway 71";
console.log(john);
console.log(john2);
console.log(EmployeeV2.getEmployeeCount);
