interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let minho = new Person4("su", 24);

console.log(minho);
