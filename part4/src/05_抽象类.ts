(function () {
  // 以abstract开头的类是抽象类
  // 抽象类和其他类区别不大，只是不能用来创建对象
  // 抽象类就是用来被继承的类
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 抽象方法使用abstract开头。没有方法体
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello(): void {
      console.log("汪汪汪");
    }
  }

  // 继承了animial 必须要实现其中的抽象方法
  class Cat extends Animal {
    sayHello(): void {
      console.log("喵喵喵");
    }
  }

  const dog = new Dog("旺财");
  dog.sayHello();

})();
