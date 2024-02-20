(function () {
  // 描述一个对象的类型
  // 类型不可以重复定义
  type myType = {
    name: string;
    age: number;
    // [propname: string]: any;
  };
  //   type myType = {}; 会报错

  /**
   * 接口用来定义一个结构
   * 接口可以重复定义，并执行合并策略
   */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface {
    gender: string;
  }

  const obj: myType = {
    name: "sss",
    age: 111,
  };
  const obj1: myInterface = {
    name: "sss",
    age: 111,
    gender: "男",
  };

  /**
   * 接口可以在定义类的时候去限制类的结构
   * 接口中的所有属性都不能有实际的值
   * 接口只定义对象的结构，而不考虑实际值
   */
  interface myInter {
    name: string;
    sayHello(): void;
  }

  // 定义类时，可以使类去实现一个接口
  // 实现接口就是使类满足接口的要求
  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("大家好");
    }
  }
})();
