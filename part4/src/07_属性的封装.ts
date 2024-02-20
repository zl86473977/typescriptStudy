(function () {
  class Persion {
    // ts中可以在属性前添加属性的修饰符
    /**
     * public 修饰的属性可以在任意位置访问(修改)
     * private 私有属性只能在类内部进行修改
     *          通过在类中添加方法使得私有属性可以被外部访问
     * protected 受保护的属性,只能额再当前类和当前类的子类中访问(修改)
     */
    public _name: string;
    private _age: number;
    protected _gender: string;

    constructor(name: string, age: number, gender: string) {
      this._name = name;
      this._age = age;
      this._gender = gender;
    }

    set age(value: number) {
      if (value <= 0) {
        console.log("error value is less than zero");
      } else {
        this._age = value;
      }
    }
    get age() {
      return this._age;
    }
    getAge() {
      return this._age;
    }
  }

  const per = new Persion("sunwukong", 18, "male");
  // 现在属性是在对象中设置的,属性可以任意的被修改
  // 属性可以任意被修改将会导致对象中的数据变得非常不安全
  per.age = -38;
  per._name = "bajie";
  // 类的实例无法使用类的私有属性和保护属性
//   per._gender = "female";
  console.log(per);

  class Student extends Persion {
    sayHello() {
      // 子类中可以使用的父类的protected和public成员,但是不能使用private成员
      console.log(
        // `hello my name is ${this._name} i'm ${this._age} year old, i'm a ${this._gender}`
      );
    }
  }
  const stu = new Student("leo", 18, "male");

  class C {
    // 可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number) {}
  }
  const c = new C("dd", 10);
})();
