// function fn(a: number): number {
//   return a;
// }

/**
 * 在定义函数或是类时,如果遇到类型不明确就可以使用泛型
 */
function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
fn<number>(10); // 不指定泛型,ts可以自动对类型进行推断
fn<string>("hello"); // 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}
fn2<number, string>(123, "hello");

// 为泛型增加类型限制
// T extends Inter 表示泛型T必须是Inter实现类(子类)
interface Inter {
  length: number;
}
function fn3<T extends Inter>(a: T): number {
  return a.length;
}
fn3("123");
// fn3({ name: "hello" });
// fn3(123);
fn3([1, 2, 3]);

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
const mc = new MyClass<string>("悟空");
