class Employee {
  protected name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  work() {
    console.log("열심히 일함");
  }
}
const employeeA: Employee = new Employee("E", 23);
// employeeA.name = "R";
employeeA.age = 33;
console.log(employeeA);
class ExecutiveOfficer extends Employee {
  func() {
    console.log(`${this.age}`);
  }
}
