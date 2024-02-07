class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //   constructor(public name: string, public age: number) {}

  bark() {
    // alert("汪汪汪");
    console.log(this.name);
  }
}

const dog = new Dog("旺财", 0);
const dog1 = new Dog("旺财1", 1);
const dog2 = new Dog("旺财2", 2);
const dog3 = new Dog("旺财3", 3);
console.log(dog);
console.log(dog1);
console.log(dog2);
console.log(dog3);
