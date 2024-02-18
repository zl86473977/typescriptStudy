(function () {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // sayHello() {
    //   console.log("sss");
    // }
  }

  // 通过继承后 子类将会拥有父类所有的方法和属性
  // 如果子类中添加了和父类相同的方法。则会覆盖（方法的重写）
  class Dog extends Animal {
    sayHello() {
      console.log("汪汪汪");
    }
  }

  class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }

    sayHello() {
      console.log("喵喵喵");
    }
  }

  const dog = new Dog("旺财", 5);
  const cat = new Cat("明明", 5);
  console.log(dog);
  dog.sayHello();
  console.log(cat);
  cat.sayHello();
})();
