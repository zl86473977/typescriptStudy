// 使用class关键字来定义一个类
// 对象中主要包含了两个部分
// 属性
// 方法
class Person {
  // 直接定义的属性是实例属性,需要通过对象的实例去访问
  // 定义实例属性
  name: string = "孙悟空";
  age: number = 18;
  // 在属性前使用static关键字可以定义类属性(静态属性)
  // 使用static开头的属性是静态属性(类属性),可以直接通过类去访问
  static type: string = "role";

  // readonly 开头的属性表示一个制度的属性无法修改
  static readonly animal: string = "monkey";

  // 定义方法
  // 如果方法以static开头则方法就是类方法,可以直接通过类去调用
  sayHello() {
    console.log('hello');  
  }

}

const per = new Person();
console.log(per);
console.log(Person.type);
// Person.animal = 'kkk' Cannot assign to 'animal' because it is a read-only 
per.sayHello()


