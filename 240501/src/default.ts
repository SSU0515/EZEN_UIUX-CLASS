interface IPerson {
  name: string;
  age: number;
}

const makePerson = (name: string, age: number = 10): IPerson => ({
  name: name,
  age: age,
});

console.log(makePerson("David"));
console.log(makePerson("David,20"));
